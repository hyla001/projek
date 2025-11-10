import { NextResponse } from "next/server"
import { getCurrentAdmin } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { articleSchema } from "@/lib/validations/article"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const skip = (page - 1) * limit

    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.article.count(),
    ])

    return NextResponse.json({
      articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("[v0] Get articles error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const admin = await getCurrentAdmin()
    if (!admin) {
      return NextResponse.json({ error: "Tidak terautentikasi" }, { status: 401 })
    }

    const body = await request.json()
    const validation = articleSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: "Data tidak valid", details: validation.error.errors }, { status: 400 })
    }

    const article = await prisma.article.create({
      data: validation.data,
    })

    return NextResponse.json(article, { status: 201 })
  } catch (error) {
    console.error("[v0] Create article error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
