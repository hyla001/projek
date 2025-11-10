import { NextResponse } from "next/server"
import { serviceCategories, hpBrands, tvBrands, laptopBrands, lainnyaItems } from "@/lib/data"
import { prisma } from "@/lib/prisma"
import { fuzzyMatch, getSynonyms, searchWithRanking } from "@/lib/search-utils"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.toLowerCase().trim() || ""

    if (!query || query.length < 2) {
      return NextResponse.json({ results: [] })
    }

    const queryTerms = [query, ...getSynonyms(query)]
    console.log("[v0] Search query:", query, "Expanded terms:", queryTerms)

    const results: Array<{
      id: string
      title: string
      description?: string
      category: string
      url: string
      score: number
    }> = []

    serviceCategories.forEach((service) => {
      const nameMatch = fuzzyMatch(service.name, query)
      const descMatch = fuzzyMatch(service.description, query)

      const bestScore = Math.max(nameMatch.score, descMatch.score)

      if (nameMatch.matches || descMatch.matches) {
        results.push({
          id: service.id,
          title: service.name,
          description: service.description,
          category: "Layanan",
          url: "/layanan-service",
          score: bestScore,
        })
      }
    })

    const hpSearchResults = searchWithRanking(hpBrands, query, ["name"])
    hpSearchResults.forEach(({ item: brand, score }) => {
      results.push({
        id: `hp-${brand.id}`,
        title: `Service HP ${brand.name}`,
        category: "Brand HP",
        url: "/layanan-service",
        score: score + 5, // Boost brand results slightly
      })
    })

    const tvSearchResults = searchWithRanking(tvBrands, query, ["name"])
    tvSearchResults.forEach(({ item: brand, score }) => {
      results.push({
        id: `tv-${brand.id}`,
        title: `Service TV ${brand.name}`,
        category: "Brand TV",
        url: "/layanan-service",
        score: score + 5,
      })
    })

    const laptopSearchResults = searchWithRanking(laptopBrands, query, ["name"])
    laptopSearchResults.forEach(({ item: brand, score }) => {
      results.push({
        id: `laptop-${brand.id}`,
        title: `Service Laptop ${brand.name}`,
        category: "Brand Laptop",
        url: "/layanan-service",
        score: score + 5,
      })
    })

    lainnyaItems.forEach((item) => {
      if (!item.active) return

      const match = fuzzyMatch(item.name, query)
      if (match.matches) {
        results.push({
          id: `lainnya-${item.id}`,
          title: `Service ${item.name}`,
          category: "Layanan Lainnya",
          url: "/layanan-service",
          score: match.score,
        })
      }
    })

    const articleConditions = queryTerms.map((term) => ({
      OR: [
        { title: { contains: term, mode: "insensitive" as const } },
        { excerpt: { contains: term, mode: "insensitive" as const } },
        { content: { contains: term, mode: "insensitive" as const } },
        { category: { contains: term, mode: "insensitive" as const } },
      ],
    }))

    const articles = await prisma.article.findMany({
      where: {
        published: true,
        OR: articleConditions.flatMap((cond) => cond.OR),
      },
      take: 10,
      select: {
        id: true,
        title: true,
        excerpt: true,
        slug: true,
      },
    })

    articles.forEach((article) => {
      // Calculate relevance score for articles
      const titleMatch = fuzzyMatch(article.title, query)
      const excerptMatch = fuzzyMatch(article.excerpt, query)
      const bestScore = Math.max(titleMatch.score, excerptMatch.score)

      results.push({
        id: article.id,
        title: article.title,
        description: article.excerpt,
        category: "Berita",
        url: `/berita/${article.slug}`,
        score: bestScore,
      })
    })

    const sortedResults = results.sort((a, b) => b.score - a.score).slice(0, 10)

    console.log("[v0] Search results count:", sortedResults.length)

    return NextResponse.json({ results: sortedResults })
  } catch (error) {
    console.error("[v0] Search error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
