import { NextResponse } from "next/server"
import { getCurrentAdmin } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { articleSchema } from "@/lib/validations/article"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const article = await prisma.article.findUnique({
      where: { id },
    })

    if (!article) {
      return NextResponse.json({ error: "Artikel tidak ditemukan" }, { status: 404 })
    }

    return NextResponse.json(article)
  } catch (error) {
    console.error("[v0] Get article error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const admin = await getCurrentAdmin()
    if (!admin) {
      return NextResponse.json({ error: "Tidak terautentikasi" }, { status: 401 })
    }

    const { id } = await params
    const body = await request.json()
    const validation = articleSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: "Data tidak valid", details: validation.error.errors }, { status: 400 })
    }

    const article = await prisma.article.update({
      where: { id },
      data: validation.data,
    })

    return NextResponse.json(article)
  } catch (error) {
    console.error("[v0] Update article error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const admin = await getCurrentAdmin()
    if (!admin) {
      return NextResponse.json({ error: "Tidak terautentikasi" }, { status: 401 })
    }

    const { id } = await params
    await prisma.article.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Delete article error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
