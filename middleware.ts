import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Simple in-memory rate limiting
const rateLimitMap = new Map()

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const ip = request.ip || 'unknown'

  // 🔒 SECURITY: Block malicious paths and attacks
  const blockedPatterns = [
    '/engine/',
    '/swfupload',
    '//',           // double slashes
    '/../',         // directory traversal
    '/.env',        // env file access
    '/wp-admin',    // wordpress paths
    '/phpmyadmin',  // database admin
    '/\.php',       // php files
    '/config',      // config files
    '/backup',      // backup files
  ]

  // Check for malicious patterns
  const isMaliciousRequest = blockedPatterns.some(pattern => 
    pathname.includes(pattern) || 
    pathname.indexOf(pattern) > -1
  )

/* if (isMaliciousRequest) {
    console.log(`🚨 Blocked malicious request: ${pathname}`)
    return new NextResponse('Not Found', { status: 404 })
  }
*/

  // 🚦 RATE LIMITING: Basic protection
  const now = Date.now()
  const windowMs = 60000 // 1 minute
  const maxRequests = 100 // max 100 requests per minute

  const clientData = rateLimitMap.get(ip) || { count: 0, lastReset: now }
  
  // Reset counter if window has passed
  if (now - clientData.lastReset > windowMs) {
    clientData.count = 0
    clientData.lastReset = now
  }

  // Check if over limit
  if (clientData.count >= maxRequests) {
    console.log(`🚨 Rate limit exceeded for IP: ${ip}`)
    return new NextResponse('Too Many Requests', { status: 429 })
  }

  // Increment counter
  clientData.count++
  rateLimitMap.set(ip, clientData)

  // 🔐 ADMIN AUTH: Check if accessing admin routes
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const session = request.cookies.get("admin_session")

    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  // 🔄 REDIRECT: Redirect to dashboard if already logged in
  if (pathname === "/admin/login") {
    const session = request.cookies.get("admin_session")
    if (session) {
      return NextResponse.redirect(new URL("/admin", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Protect all routes, not just admin
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}