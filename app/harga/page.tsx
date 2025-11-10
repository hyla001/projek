import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { pricingHandphone, pricingLaptop } from "@/lib/data"
import { MessageCircle } from "lucide-react"

export const metadata = {
  title: "Daftar Harga Layanan Service - MULTIDATA Elektronik",
  description:
    "Temukan estimasi biaya perbaikan untuk perangkat elektronik Anda. Harga dapat berubah tergantung tingkat kerusakan.",
}

export default function HargaPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Daftar Harga Layanan Service</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Temukan estimasi biaya perbaikan untuk perangkat elektronik Anda. Harga dapat berubah tergantung tingkat
            kerusakan.
          </p>
        </div>

        {/* Service Handphone */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Service Handphone</h2>
          <Card className="border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left p-4 font-semibold border-b border-border">No</th>
                    <th className="text-left p-4 font-semibold border-b border-border">Jenis Kerusakan</th>
                    <th className="text-left p-4 font-semibold border-b border-border">Kisaran Harga</th>
                    <th className="text-left p-4 font-semibold border-b border-border">Garansi</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingHandphone.map((item) => (
                    <tr key={item.no} className="hover:bg-secondary/50 transition-colors">
                      <td className="p-4 border-b border-border">{item.no}</td>
                      <td className="p-4 border-b border-border">{item.service}</td>
                      <td className="p-4 border-b border-border text-primary font-medium">{item.price}</td>
                      <td className="p-4 border-b border-border">{item.warranty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Service Laptop */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Service Laptop</h2>
          <Card className="border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left p-4 font-semibold border-b border-border">No</th>
                    <th className="text-left p-4 font-semibold border-b border-border">Jenis Kerusakan</th>
                    <th className="text-left p-4 font-semibold border-b border-border">Kisaran Harga</th>
                    <th className="text-left p-4 font-semibold border-b border-border">Garansi</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingLaptop.map((item) => (
                    <tr key={item.no} className="hover:bg-secondary/50 transition-colors">
                      <td className="p-4 border-b border-border">{item.no}</td>
                      <td className="p-4 border-b border-border">{item.service}</td>
                      <td className="p-4 border-b border-border text-primary font-medium">{item.price}</td>
                      <td className="p-4 border-b border-border">{item.warranty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Elektronik Lainnya */}
        <Card className="border-primary/50 bg-secondary/30 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Elektronik Lainnya</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Untuk kategori Speaker, Amplifier, Kulkas, Kipas Angin, TV, Komputer, Printer, dan elektronik lainnya,
              silahkan hubungi kontak kami untuk konsultasi harga.
            </p>
            <Link href="https://wa.me/6281243049073" target="_blank">
              <Button size="lg" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis via WhatsApp
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Catatan Penting */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Catatan Penting:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Harga di atas adalah estimasi dan dapat berubah sesuai kondisi perangkat.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Biaya jasa belum termasuk harga suku cadang (spare parts).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Garansi service yang kami berikan adalah 1 minggu setelah pengambilan.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/kontak">
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              Tanya Harga Detail
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
