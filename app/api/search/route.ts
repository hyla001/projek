import { NextResponse } from "next/server"
import { serviceCategories, hpBrands, tvBrands, laptopBrands, lainnyaItems } from "@/lib/data"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.toLowerCase() || ""

    if (!query || query.length < 2) {
      return NextResponse.json({ results: [] })
    }

    const results: Array<{
      id: string
      title: string
      description?: string
      category: string
      url: string
    }> = []

    // Search service categories
    serviceCategories.forEach((service) => {
      if (service.name.toLowerCase().includes(query) || service.description.toLowerCase().includes(query)) {
        results.push({
          id: service.id,
          title: service.name,
          description: service.description,
          category: "Layanan",
          url: "/layanan-service",
        })
      }
    })

    // Search HP brands
    hpBrands.forEach((brand) => {
      if (brand.name.toLowerCase().includes(query)) {
        results.push({
          id: `hp-${brand.id}`,
          title: `Service HP ${brand.name}`,
          category: "Brand HP",
          url: "/layanan-service",
        })
      }
    })

    // Search TV brands
    tvBrands.forEach((brand) => {
      if (brand.name.toLowerCase().includes(query)) {
        results.push({
          id: `tv-${brand.id}`,
          title: `Service TV ${brand.name}`,
          category: "Brand TV",
          url: "/layanan-service",
        })
      }
    })

    // Search laptop brands
    laptopBrands.forEach((brand) => {
      if (brand.name.toLowerCase().includes(query)) {
        results.push({
          id: `laptop-${brand.id}`,
          title: `Service Laptop ${brand.name}`,
          category: "Brand Laptop",
          url: "/layanan-service",
        })
      }
    })

    // Search other items
    lainnyaItems.forEach((item) => {
      if (item.active && item.name.toLowerCase().includes(query)) {
        results.push({
          id: `lainnya-${item.id}`,
          title: `Service ${item.name}`,
          category: "Layanan Lainnya",
          url: "/layanan-service",
        })
      }
    })

    // Search articles from database
    const articles = await prisma.article.findMany({
      where: {
        published: true,
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { excerpt: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
        ],
      },
      take: 5,
      select: {
        id: true,
        title: true,
        excerpt: true,
        slug: true,
      },
    })

    articles.forEach((article) => {
      results.push({
        id: article.id,
        title: article.title,
        description: article.excerpt,
        category: "Berita",
        url: `/berita/${article.slug}`,
      })
    })

    // Limit results to top 8
    return NextResponse.json({ results: results.slice(0, 8) })
  } catch (error) {
    console.error("[v0] Search error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
