"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialSection } from "@/components/testimonial-section"
import { stats, whyChooseUs } from "@/lib/data"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useEffect, useState } from "react"

export default function HomePage() {
  const heroRef = useScrollReveal()
  const multiDataRef = useScrollReveal()
  const whyChooseRef = useScrollReveal()
  const statsRef = useScrollReveal()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background animate-gradient"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div
            ref={heroRef.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              heroRef.isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`space-y-6 ${heroRef.isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium hover-glow">
                Terpercaya Sejak 2007
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                MULTIDATA Elektronik
              </h1>
              <p className="text-xl text-primary font-semibold">SOLUSI ELEKTRONIK ANDA</p>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Di MULTIDATA Elektronik, kami menyediakan solusi lengkap untuk semua kebutuhan perbaikan perangkat
                elektronik Anda. Dengan teknisi berpengalaman dan suku cadang berkualitas, kami berkomitmen untuk
                memberikan layanan terbaik.
              </p>
              <p className="text-base text-muted-foreground text-pretty leading-relaxed">
                Dari handphone hingga komputer, kami siap membantu Anda mengembalikan perangkat Anda ke kondisi prima.
                Kunjungi toko kami untuk konsultasi dan perbaikan yang cepat dan andal.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kontak">
                  <Button
                    size="lg"
                    className="text-base px-8 bg-primary hover:bg-primary/90 hover-lift animate-pulse-glow"
                  >
                    Hubungi Kami Sekarang
                  </Button>
                </Link>
              </div>
            </div>
            <div className={`relative ${heroRef.isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border hover-lift">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenNN-TL85CnUxaFiqFOH5HCXWRZpH9HuVqk.png"
                  alt="MULTIDATA Elektronik Store"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MULTIDATA Menangani Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div
            ref={multiDataRef.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              multiDataRef.isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MULTIDATA Menangani</h2>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${multiDataRef.isVisible ? "" : "opacity-0"}`}>
            {["Pembuatan Alat Sensor", "Service Software", "Service Hardware", "Kelistrikan Rumah"].map((item, idx) => (
              <div
                key={item}
                className={`bg-card border border-primary/30 rounded-lg p-6 text-center hover:bg-primary/10 transition-all hover-lift cursor-pointer smooth-transition ${
                  multiDataRef.isVisible ? `animate-scale-in stagger-${idx + 1}` : "opacity-0"
                }`}
              >
                <p className="font-semibold text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
          <div className={`text-center mt-8 ${multiDataRef.isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Winong lor, Kemiri, Purworejo, (Dekat Sate Mustola dan di sebelah RM Padang Cahaya Minang)
            </p>
          </div>
        </div>
      </section>

      {/* Mengapa Memilih Kami Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={whyChooseRef.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              whyChooseRef.isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Kami?</h2>
          </div>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${whyChooseRef.isVisible ? "" : "opacity-0"}`}>
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className={`border-border hover:border-primary/50 transition-all hover-lift cursor-pointer smooth-transition ${
                  whyChooseRef.isVisible ? `animate-fade-in-up stagger-${(index % 4) + 1}` : "opacity-0"
                }`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-4xl animate-float">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div
            ref={statsRef.ref}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${statsRef.isVisible ? "" : "opacity-0"}`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center smooth-transition ${
                  statsRef.isVisible ? `animate-scale-in stagger-${(index % 4) + 1}` : "opacity-0"
                }`}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 hover-glow">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />
    </div>
  )
}
