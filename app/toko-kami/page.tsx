import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { storeGallery, contactInfo } from "@/lib/data"
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Toko Kami - MULTIDATA Elektronik",
  description:
    "Kunjungi toko kami di Purworejo. Solusi lengkap untuk semua kebutuhan perbaikan perangkat elektronik Anda.",
}

export default function TokoKamiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Store Image */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenNN-TL85CnUxaFiqFOH5HCXWRZpH9HuVqk.png"
          alt="MULTIDATA Elektronik Store"
          width={1200}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">MULTIDATA ELEKTRONIK</h1>
            <p className="text-xl text-primary font-semibold">SOLUSI ELEKTRONIK ANDA</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Di MULTIDATA Elektronik, kami menyediakan solusi lengkap untuk semua kebutuhan perbaikan perangkat
            elektronik Anda. Dengan teknisi berpengalaman dan suku cadang berkualitas, kami berkomitmen untuk memberikan
            layanan terbaik.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Dari handphone hingga komputer, kami siap membantu Anda mengembalikan perangkat Anda ke kondisi prima.
            Kunjungi toko kami untuk konsultasi dan perbaikan yang cepat dan andal.
          </p>
        </div>

        {/* Informasi Toko */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Informasi Toko</h2>
          <Card className="max-w-3xl mx-auto border-border">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Alamat</h3>
                  <p className="text-muted-foreground">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Jam Operasional</h3>
                  <p className="text-muted-foreground">{contactInfo.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Telepon</h3>
                  <p className="text-muted-foreground">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground">{contactInfo.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">{contactInfo.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gallery Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Galeri Toko</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {storeGallery.map((item, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden border border-border group">
                <Image
                  src={`/.jpg?key=kr3c7&height=400&width=400&query=${item.alt}`}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
