"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { serviceCategories, hpBrands, tvBrands, laptopBrands, lainnyaItems } from "@/lib/data"

export default function LayananServicePage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [selectedBrand, setSelectedBrand] = useState<{ brand: string; category: string } | null>(null)

  const getBrandsForCategory = (categoryId: string) => {
    switch (categoryId) {
      case "hp":
        return hpBrands
      case "tv":
        return tvBrands
      case "laptop":
        return laptopBrands
      default:
        return []
    }
  }

  const handleServiceClick = (serviceId: string, hasSubmenu: boolean) => {
    if (hasSubmenu) {
      setExpandedService(expandedService === serviceId ? null : serviceId)
    } else {
      // Langsung buka modal WhatsApp untuk kategori tanpa submenu
      handleDirectWhatsApp(serviceId)
    }
  }

  const handleBrandClick = (brandName: string, categoryName: string) => {
    setSelectedBrand({ brand: brandName, category: categoryName })
  }

  const handleDirectWhatsApp = (serviceName: string) => {
    const message = `Halo MULTIDATA Elektronik, saya ingin bertanya tentang service ${serviceName}`
    window.open(`https://wa.me/6281243049073?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleWhatsAppFromModal = () => {
    if (selectedBrand) {
      const message = `Halo MULTIDATA Elektronik, saya ingin bertanya tentang service ${selectedBrand.category} ${selectedBrand.brand}`
      window.open(`https://wa.me/6281243049073?text=${encodeURIComponent(message)}`, "_blank")
    }
    setSelectedBrand(null)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Layanan Service Kami</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Kami menyediakan berbagai layanan perbaikan untuk perangkat elektronik Anda dengan teknisi profesional,
            cepat, dan bergaransi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((service) => (
            <div key={service.id} className="space-y-4">
              <Card
                className="border-border hover:border-primary/50 transition-all hover:shadow-lg group overflow-hidden cursor-pointer"
                onClick={() => handleServiceClick(service.id, service.hasSubmenu || false)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={`/generic-placeholder-300px.png?height=300&width=400`}
                    alt={service.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    {service.hasSubmenu && (
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${expandedService === service.id ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>

              {/* Submenu Brands */}
              {service.hasSubmenu && expandedService === service.id && service.submenuType === "brands" && (
                <Card className="border-primary/50 bg-secondary/50 animate-in slide-in-from-top-4">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-center">Pilih Brand</h4>
                    <div className="grid grid-cols-4 gap-3">
                      {getBrandsForCategory(service.id).map((brand) => (
                        <button
                          key={brand.id}
                          onClick={() => handleBrandClick(brand.name, service.name)}
                          className="aspect-square border-2 border-border rounded-lg p-2 hover:border-primary hover:scale-105 hover:shadow-lg transition-all bg-card flex items-center justify-center"
                        >
                          <div className="text-center">
                            <div className="text-2xl mb-1">📱</div>
                            <p className="text-[10px] font-medium">{brand.name}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Submenu Dan Lain-lain */}
              {service.hasSubmenu && expandedService === service.id && service.submenuType === "other" && (
                <Card className="border-primary/50 bg-secondary/50 animate-in slide-in-from-top-4">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-center">Pilih Layanan</h4>
                    <div className="grid grid-cols-4 gap-3">
                      {lainnyaItems.map((item) =>
                        item.active ? (
                          <button
                            key={item.id}
                            onClick={() => handleDirectWhatsApp(item.name)}
                            className="aspect-square border-2 border-border rounded-lg p-2 hover:border-primary hover:scale-105 hover:shadow-lg transition-all bg-card flex items-center justify-center"
                          >
                            <div className="text-center">
                              <div className="text-2xl mb-1">🔧</div>
                              <p className="text-[8px] font-medium line-clamp-2">{item.name}</p>
                            </div>
                          </button>
                        ) : (
                          <div
                            key={item.id}
                            className="aspect-square border-2 border-dashed border-border rounded-lg p-2 bg-muted/30 flex items-center justify-center cursor-not-allowed opacity-50"
                          >
                            <div className="text-center">
                              <div className="text-xl text-muted-foreground">+</div>
                              <p className="text-[8px] text-muted-foreground">Slot {item.id}</p>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      {/* Catatan untuk developer: Tambahkan item baru di lib/data.ts */}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal WhatsApp */}
      <Dialog open={selectedBrand !== null} onOpenChange={() => setSelectedBrand(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hubungi Kami</DialogTitle>
            <DialogDescription>
              Untuk informasi lebih lanjut tentang service{" "}
              <span className="font-semibold text-foreground">
                {selectedBrand?.category} {selectedBrand?.brand}
              </span>
              , silahkan hubungi kontak kami.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-4">
            <Button onClick={handleWhatsAppFromModal} className="flex-1 bg-[#25D366] hover:bg-[#20BA5A]">
              Hubungi Kami
            </Button>
            <Button variant="outline" onClick={() => setSelectedBrand(null)} className="flex-1">
              Tutup
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
