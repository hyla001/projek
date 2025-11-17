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
                {/* 🔥 BUTTON BARU YANG KEREN - HIJAU */}
                <Link 
                  href="/kontak"
                  className="group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-green-500/30 bg-gradient-to-br from-green-900/40 via-black/60 to-black/80 shadow-2xl hover:shadow-green-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-green-400/60 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 via-green-400/20 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/30 to-green-600/10 backdrop-blur-sm group-hover:from-green-400/40 group-hover:to-green-500/20 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                      >
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                      </svg>
                    </div>

                    <div className="flex-1 text-left">
                      <p className="text-green-400 font-bold text-lg group-hover:text-green-300 transition-colors duration-300 drop-shadow-sm">
                        Hubungi Kami Sekarang
                      </p>
                      <p className="text-green-300/60 text-sm group-hover:text-green-200/80 transition-colors duration-300">
                        Fast response
                      </p>
                    </div>

                    <div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      <svg
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="w-5 h-5 text-green-400"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          strokeWidth="2"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Button tambahan jika ada */}
                <Link href="/layanan-service">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base px-8 border-primary text-primary hover:bg-primary/10 hover-lift"
                  >
                    Lihat Layanan
                  </Button>
                </Link>
              </div>
            </div>
            <div className={`relative ${heroRef.isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl border border-border hover-lift">
                <Image
                  src="/images/konter.jpg"
                  alt="MULTIDATA Elektronik Store"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full transform scale-105"
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