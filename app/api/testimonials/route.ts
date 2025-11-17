import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 🔒 SECURITY: Sanitize input function
function sanitizeInput(input: string): string {
  if (!input) return ''
  
  return input
    .replace(/</g, '&lt;')      // Escape <
    .replace(/>/g, '&gt;')      // Escape >
    .replace(/"/g, '&quot;')    // Escape "
    .replace(/'/g, '&#x27;')    // Escape '
    .replace(/\//g, '&#x2F;')   // Escape /
    .replace(/\\/g, '&#x5C;')   // Escape \
    .replace(/javascript:/gi, '') // Remove javascript:
    .replace(/on\w+=/gi, '')    // Remove event handlers
    .substring(0, 500)          // Limit length to 500 chars
}

// 🔒 SECURITY: Validate email format
function isValidEmail(email: string): boolean {
  if (!email) return true // Email optional
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10
    })
    
    return NextResponse.json({ testimonials })
  } catch (error: any) {
    console.error('❌ GET Error:', error.message)
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // 🔒 SECURITY: Sanitize all inputs
    const rawName = body.name || ''
    const rawComment = body.comment || ''
    const rawEmail = body.email || ''
    const rawRating = body.rating || 5

    const name = sanitizeInput(rawName)
    const comment = sanitizeInput(rawComment)
    const email = rawEmail ? sanitizeInput(rawEmail) : null
    const rating = Math.min(Math.max(parseInt(rawRating) || 5, 1), 5) // Clamp 1-5

    // 🔧 VALIDATION YANG LEBIH RELAXED
    if (!name.trim()) {
      return NextResponse.json(
        { error: 'Nama tidak boleh kosong' },
        { status: 400 }
      )
    }

    if (!comment.trim()) {
      return NextResponse.json(
        { error: 'Komentar tidak boleh kosong' },
        { status: 400 }
      )
    }

    if (name.length < 2) {
      return NextResponse.json(
        { error: 'Nama minimal 2 karakter' },
        { status: 400 }
      )
    }

    if (comment.length > 500) {
      return NextResponse.json(
        { error: 'Komentar maksimal 500 karakter' },
        { status: 400 }
      )
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      )
    }

    // 🔒 SECURITY: Check for spam patterns
    const spamPatterns = [
      /http\:\/\//gi,
      /https\:\/\//gi,
      /\[url\]/gi,
      /\[link\]/gi,
      /viagra/gi,
      /casino/gi,
      /bitcoin/gi
    ]
    
    const combinedText = (name + ' ' + comment).toLowerCase()
    const isSpam = spamPatterns.some(pattern => pattern.test(combinedText))
    
    if (isSpam) {
      console.log('🚨 Spam detected:', { name, email })
      return NextResponse.json(
        { error: 'Konten spam terdeteksi' },
        { status: 400 }
      )
    }

    // 🔒 SECURITY: Create testimonial with sanitized data
    const testimonial = await prisma.testimonial.create({
      data: { 
        name: name.trim(),
        rating,
        comment: comment.trim(),
        email: email ? email.trim() : null
      }
    })

    console.log('✅ Testimonial created securely:', testimonial.id)
    
    return NextResponse.json({ 
      success: true, 
      testimonial: {
        id: testimonial.id,
        name: testimonial.name,
        rating: testimonial.rating,
        comment: testimonial.comment,
        email: testimonial.email,
        createdAt: testimonial.createdAt
      }
    })
    
  } catch (error: any) {
    console.error('❌ POST Error:', error.message)
    
    // 🔒 SECURITY: Don't leak database errors to client
    return NextResponse.json(
      { error: 'Gagal membuat testimonial' },
      { status: 500 }
    )
  }
}