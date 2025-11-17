'use client'

import Image from "next/image"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { articles } from "@/lib/data"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

export default function BeritaPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Get current page from URL params (default: 1)
  const currentPage = parseInt(searchParams.get('page') || '1')
  
  // Pagination settings
  const articlesPerPage = 9 // 9 artikel per halaman (3x3 grid)
  const totalPages = Math.ceil(articles.length / articlesPerPage)
  
  // Calculate artikel untuk halaman saat ini
  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const currentArticles = articles.slice(startIndex, endIndex)
  
  // Handle page change
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`/berita?page=${page}`)
      // Scroll ke atas saat ganti halaman
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  
  // Generate page numbers untuk pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    
    if (totalPages <= 7) {
      // Kalau total page <= 7, tampilkan semua
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Kalau lebih dari 7, tampilkan dengan "..."
      if (currentPage <= 3) {
        // Awal: 1 2 3 4 ... 8
        pages.push(1, 2, 3, 4, "...", totalPages)
      } else if (currentPage >= totalPages - 2) {
        // Akhir: 1 ... 5 6 7 8
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        // Tengah: 1 ... 4 5 6 ... 8
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages)
      }
    }
    
    return pages
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Berita & Informasi Terkini</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Dapatkan update terbaru seputar tips perawatan, informasi layanan, dan promo spesial dari kami.
          </p>
        </div>

        {/* Info Halaman */}
        <div className="text-center mb-6 text-muted-foreground">
          Halaman {currentPage} dari {totalPages} • {articles.length} artikel
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentArticles.map((article) => (
            <Card
              key={article.id}
              className="border-border hover:border-primary/50 transition-all hover:shadow-lg group overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <Image
                  src="/images/sample.png"
                  alt={article.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.category === "Tips & Trik"
                        ? "bg-primary text-primary-foreground"
                        : article.category === "Info Layanan"
                          ? "bg-accent text-accent-foreground"
                          : article.category === "Promo Spesial"
                            ? "bg-destructive text-destructive-foreground"
                            : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold line-clamp-2 text-balance">{article.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 text-pretty leading-relaxed">
                  {article.excerpt}
                </p>
                <Link href={`/berita/${article.slug}`}>
                  <Button variant="link" className="px-0 text-primary">
                    Baca Selengkapnya →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {/* Previous Button */}
          <Button 
            variant="outline" 
            size="icon" 
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Page Numbers */}
          <div className="flex gap-2 flex-wrap justify-center">
            {getPageNumbers().map((page, index) => (
              page === "..." ? (
                <Button
                  key={`ellipsis-${index}`}
                  variant="outline"
                  size="icon"
                  disabled
                  className="pointer-events-none"
                >
                  ...
                </Button>
              ) : (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  size="icon"
                  onClick={() => goToPage(page as number)}
                >
                  {page}
                </Button>
              )
            ))}
          </div>

          {/* Next Button */}
          <Button 
            variant="outline" 
            size="icon" 
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}