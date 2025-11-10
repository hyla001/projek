"use client"

import type React from "react"

import { useState } from "react"
import { Star, Send, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface Testimonial {
  id: string
  name: string
  rating: number
  comment: string
  date: string
}

// Mock data - dalam production ini akan fetch dari database
const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Andi Pratama",
    rating: 5,
    comment: "Pelayanan sangat cepat dan profesional. Laptop saya kembali normal seperti baru. Sangat puas!",
    date: "15 April 2024",
  },
  {
    id: "2",
    name: "Budi Santoso",
    rating: 5,
    comment: "Luar biasa! Kerusakan AC cepat diatasi dengan harga yang sangat terjangkau. Kuis puas juga!",
    date: "2 Maret 2024",
  },
  {
    id: "3",
    name: "Citra Lestari",
    rating: 4,
    comment: "Harga terjangkau dan hasilnya memuaskan. Staffnya juga ramah dan informatif. Terima kasih!",
    date: "20 April 2024",
  },
  {
    id: "4",
    name: "Dewi Anjani",
    rating: 5,
    comment: "Sangat puas dengan pelayanan selesai cepat! Komputer saya sekarang berjalan lebih lancar. Terimakasih!",
    date: "18 Maret 2024",
  },
  {
    id: "5",
    name: "Fajar Nugroho",
    rating: 5,
    comment: "Service HP berkualitas tinggi! Perbaikan cepat dan dijelaskan dengan detail. Sangat merekomendasikan!",
    date: "5 Maret 2024",
  },
  {
    id: "6",
    name: "Rian Syahputra",
    rating: 5,
    comment: "Proses perbaikan AC cepat dan efisien! Staff sangat membantu menjelaskan kerusakan. Puas banget!",
    date: "10 Maret 2024",
  },
]

export function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(mockTestimonials)
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  })
  const [hoverRating, setHoverRating] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.comment) {
      toast({
        title: "Error",
        description: "Mohon isi semua field!",
        variant: "destructive",
      })
      return
    }

    if (formData.comment.length < 10) {
      toast({
        title: "Error",
        description: "Komentar minimal 10 karakter!",
        variant: "destructive",
      })
      return
    }

    setSubmitting(true)

    // Simulasi API call - dalam production ini akan save ke database
    setTimeout(() => {
      const newTestimonial: Testimonial = {
        id: Date.now().toString(),
        name: formData.name,
        rating: formData.rating,
        comment: formData.comment,
        date: new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      }

      setTestimonials([newTestimonial, ...testimonials])
      setFormData({ name: "", rating: 5, comment: "" })
      setSubmitting(false)

      toast({
        title: "Terima kasih!",
        description: "Ulasan Anda berhasil dikirim.",
      })
    }, 1500)
  }

  const renderStarInput = () => {
    return (
      <div className="flex gap-2 justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setFormData({ ...formData, rating: star })}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="transition-transform hover:scale-110"
          >
            <Star
              className={`w-8 h-8 ${
                star <= (hoverRating || formData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
              }`}
            />
          </button>
        ))}
      </div>
    )
  }

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Apa Kata Pelanggan Kami</h2>

        {/* Form Input */}
        <div className="max-w-2xl mx-auto mb-16 bg-card p-6 sm:p-8 rounded-2xl border border-border">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-foreground mb-2 font-semibold">Nama Anda</label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Masukkan nama Anda"
                className="bg-secondary border-border"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-foreground mb-3 font-semibold text-center">Rating Anda</label>
              {renderStarInput()}
            </div>

            <div className="mb-6">
              <label className="block text-foreground mb-2 font-semibold">Komentar</label>
              <Textarea
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                placeholder="Ceritakan pengalaman Anda dengan layanan kami..."
                rows={4}
                maxLength={500}
                className="bg-secondary border-border resize-none"
                required
              />
              <div className="text-right text-muted-foreground text-sm mt-1">{formData.comment.length}/500</div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              size="lg"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Mengirim...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Ulasan
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Display Comments */}
        {testimonials.length === 0 ? (
          <div className="text-center text-muted-foreground py-16">
            <Star className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <p className="text-lg">Belum ada ulasan</p>
            <p className="text-sm mt-2">Jadilah yang pertama memberikan testimoni!</p>
          </div>
        ) : testimonials.length < 10 ? (
          // Grid layout untuk < 10 comments
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-card border-border hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.comment}&rdquo;</p>
                  <div className="border-t border-border pt-3">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          // Vertical auto-scroll untuk >= 10 comments
          <div className="relative h-[600px] overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              {[0, 1, 2].map((colIndex) => (
                <div key={colIndex} className="animate-scroll-vertical space-y-6">
                  {duplicatedTestimonials.map((testimonial, index) => (
                    <Card
                      key={`${colIndex}-${index}`}
                      className="bg-card border-border hover:scale-105 transition-transform cursor-pointer"
                    >
                      <CardContent className="p-6">
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.comment}&rdquo;</p>
                        <div className="border-t border-border pt-3">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
