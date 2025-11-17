import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/iconutama.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold">MULTIDATA Elektronik</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Solusi terpercaya untuk semua kebutuhan perbaikan perangkat elektronik Anda. Cepat, handal, dan
              bergaransi.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-8 h-8 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-8 h-8 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/6281243049073"
                target="_blank"
                className="w-8 h-8 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/layanan-service" className="hover:text-primary transition-colors">
                  Service Handphone
                </Link>
              </li>
              <li>
                <Link href="/layanan-service" className="hover:text-primary transition-colors">
                  Service Laptop
                </Link>
              </li>
              <li>
                <Link href="/layanan-service" className="hover:text-primary transition-colors">
                  Service TV
                </Link>
              </li>
              <li>
                <Link href="/layanan-service" className="hover:text-primary transition-colors">
                  Service Komputer
                </Link>
              </li>
              <li>
                <Link href="/layanan-service" className="hover:text-primary transition-colors">
                  Service Printer
                </Link>
              </li>
              <li>
                <Link href="/layanan-service" className="hover:text-primary transition-colors">
                  Layanan Lainnya
                </Link>
              </li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/toko-kami" className="hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/harga" className="hover:text-primary transition-colors">
                  Harga Service
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-primary transition-colors">
                  Berita & Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Jalan Kemiri VII Ngebug, Winong Lor, Gebang, Kab Purworejo, Jawa Tengah</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+62 812-4304-9073</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>multidataelectronik@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Senin - Minggu 09.00 - 21.30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 MULTIDATA Elektronik. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤</span> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}