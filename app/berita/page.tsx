import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { articles } from "@/lib/data"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

export const metadata = {
  title: "Berita & Informasi Terkini - MULTIDATA Elektronik",
  description: "Dapatkan update terbaru seputar tips perawatan, informasi layanan, dan promo spesial dari kami.",
}

export default function BeritaPage() {
  // Pagination logic - dalam implementasi nyata, ini akan menggunakan URL params
  const currentPage = 1
  const totalPages = 8

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

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="border-border hover:border-primary/50 transition-all hover:shadow-lg group overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <Image
                  src={`/.jpg?height=300&width=500&query=${article.title}`}
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
        <div className="flex justify-center items-center gap-2">
          <Button variant="outline" size="icon" disabled={currentPage === 1}>
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex gap-2">
            {[1, 2, 3, "...", totalPages].map((page, index) => (
              <Button
                key={index}
                variant={page === currentPage ? "default" : "outline"}
                size="icon"
                className={page === "..." ? "pointer-events-none" : ""}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button variant="outline" size="icon" disabled={currentPage === totalPages}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
