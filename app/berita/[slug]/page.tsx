import { articles } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import Image from "next/image"

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  // Cari artikel berdasarkan slug
  const article = articles.find((a) => a.slug === params.slug)

  // Jika artikel tidak ditemukan, tampilkan 404
  if (!article) {
    notFound()
  }

  // Ambil 3 artikel terkait (artikel lain dari kategori yang sama)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link href="/berita">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Berita
          </Button>
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full ${
                article.category === "Tips & Trik"
                  ? "bg-primary/10 text-primary"
                  : article.category === "Info Layanan"
                    ? "bg-accent/10 text-accent-foreground"
                    : article.category === "Promo Spesial"
                      ? "bg-destructive/10 text-destructive"
                      : "bg-secondary"
              }`}
            >
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{article.title}</h1>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video overflow-hidden rounded-lg mb-8 bg-secondary">
          <Image
            src={`/.jpg?height=600&width=1200&query=${article.title}`}
            alt={article.title}
            width={1200}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="lead text-xl text-muted-foreground mb-6">{article.excerpt}</p>
          
          <div className="space-y-6 text-foreground">
            <p>
              Artikel ini memberikan informasi lengkap mengenai topik yang dibahas. 
              Kami berkomitmen untuk memberikan informasi terbaik dan terpercaya kepada pelanggan kami.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Informasi Lebih Lanjut</h2>
            <p>
              Untuk informasi lebih detail atau konsultasi gratis mengenai topik ini, 
              jangan ragu untuk menghubungi kami melalui WhatsApp atau datang langsung ke toko kami.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Layanan Kami</h2>
            <p>
              MULTIDATA Elektronik melayani berbagai jenis perbaikan elektronik dengan teknisi 
              berpengalaman dan garansi resmi. Kami siap membantu Anda dengan pelayanan terbaik.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="border-primary/50 bg-primary/5 mb-12">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Butuh Bantuan?</h3>
            <p className="text-muted-foreground mb-4">
              Hubungi kami untuk konsultasi gratis atau jadwalkan service perangkat Anda
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="https://wa.me/6281243049073" target="_blank">
                <Button size="lg">Hubungi via WhatsApp</Button>
              </Link>
              <Link href="/kontak">
                <Button size="lg" variant="outline">Lihat Kontak Lengkap</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Artikel Terkait</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Card key={related.id} className="border-border hover:border-primary/50 transition-all group">
                  <div className="relative aspect-video overflow-hidden bg-secondary">
                    <Image
                      src={`/.jpg?height=200&width=400&query=${related.title}`}
                      alt={related.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <h3 className="font-semibold line-clamp-2 text-balance">{related.title}</h3>
                    <p className="text-sm text-muted-foreground">{related.date}</p>
                    <Link href={`/berita/${related.slug}`}>
                      <Button variant="link" className="px-0 text-sm">
                        Baca Selengkapnya →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}