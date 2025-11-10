import { NextResponse } from "next/server"
import { loginSchema } from "@/lib/validations/auth"
import { prisma } from "@/lib/prisma"
import { verifyPassword, createSession } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = loginSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: "Data tidak valid", details: validation.error.errors }, { status: 400 })
    }

    const { email, password } = validation.data

    // Find admin
    const admin = await prisma.admin.findUnique({
      where: { email },
    })

    if (!admin) {
      return NextResponse.json({ error: "Email atau password salah" }, { status: 401 })
    }

    // Verify password
    const isValid = await verifyPassword(password, admin.password)
    if (!isValid) {
      return NextResponse.json({ error: "Email atau password salah" }, { status: 401 })
    }

    // Create session
    await createSession(admin.id)

    return NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
      },
    })
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
