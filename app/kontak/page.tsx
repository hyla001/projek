"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactInfo } from "@/lib/data"
import { MapPin, Phone, MessageCircle, Mail, Clock, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Kirim ke WhatsApp
    const message = `Halo, saya ${formData.name}.\n\nEmail: ${formData.email}\nTelepon: ${formData.phone}\n\nPesan: ${formData.message}`
    const whatsappUrl = `https://wa.me/6281243049073?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Hubungi Kami</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Ada pertanyaan? Silahkan isi form di bawah ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama lengkap Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contoh@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">No. Handphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Masukkan nomor handphone Anda"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      placeholder="Tuliskan pesan Anda di sini..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-32 bg-secondary border-border"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Alamat</h3>
                    <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Jam Operasional</h3>
                    <p className="text-sm text-muted-foreground">{contactInfo.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Telepon</h3>
                    <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">{contactInfo.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Ikuti Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
