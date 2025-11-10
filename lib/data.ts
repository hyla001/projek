// ========== CONTACT INFO ==========
export const contactInfo = {
  address: "Jalan Kemiri VII Ngebug, Winong Lor, Gebang, Kab Purworejo, Jawa Tengah",
  phone: "+62 812-4304-9073",
  whatsapp: "+62 812-4304-9073",
  email: "multidataelectronik@gmail.com",
  hours: "Senin - Minggu 09.00 - 21.30",
  mapCoordinates: "-7.7145, 110.0168", // Purworejo coordinates
}

// ========== TESTIMONIALS (MOCK DATA) ==========
export const mockTestimonials = [
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
    comment: "Luar biasa! Kerusakan LCD HP cepat diatasi dengan harga yang sangat terjangkau. Sangat puas!",
    date: "2 Maret 2024",
  },
  {
    id: "3",
    name: "Citra Lestari",
    rating: 5,
    comment: "Harga terjangkau dan hasilnya memuaskan. Staffnya juga ramah dan informatif. Terima kasih!",
    date: "20 April 2024",
  },
  {
    id: "4",
    name: "Dewi Anjani",
    rating: 5,
    comment: "Sangat puas dengan pelayanan! Komputer saya sekarang berjalan lebih lancar. Terimakasih!",
    date: "18 Maret 2024",
  },
  {
    id: "5",
    name: "Fajar Nugroho",
    rating: 5,
    comment: "Service HP berkualitas tinggi! Perbaikan cepat dan dijelaskan dengan detail. Sangat recommended!",
    date: "5 Maret 2024",
  },
  {
    id: "6",
    name: "Rian Syahputra",
    rating: 5,
    comment: "Proses perbaikan TV cepat dan efisien! Staff sangat membantu menjelaskan kerusakan. Puas banget!",
    date: "10 Maret 2024",
  },
]

// ========== STATS ==========
export const stats = [
  { value: "1000+", label: "Pelanggan Puas" },
  { value: "500+", label: "Service yang sudah di tangani" },
  { value: "98%", label: "Tingkat Kepuasan" },
  { value: "15+", label: "tahun berpengalaman" },
]

// ========== WHY CHOOSE US ==========
export const whyChooseUs = [
  {
    icon: "🔧",
    title: "Terpercaya",
    description: "Memiliki pengalaman dan lahan yang tepat, sehingga manfaat berbagai masalah elektronik",
  },
  {
    icon: "📋",
    title: "Bergaransi",
    description: "Setiap pengerjaan kami garansi untuk kerusakan part/alat anda",
  },
  {
    icon: "💰",
    title: "Harga Terjangkau",
    description: "Harga menyesuaikan sesuai berkualitas, tanpa mengorbankan kualitas dan kompetensi",
  },
  {
    icon: "⚡",
    title: "Cepat",
    description: "Proses kerja yang efisien, hasil pengerjaan Anda kembali berfungsi dalam waktu singkat",
  },
]

// ========== SERVICE CATEGORIES, BRANDS, AND LAINNYA ITEMS DATA ==========
export const serviceCategories = [
  {
    id: "hp",
    name: "Service HP",
    description: "Perbaikan berbagai merek HP, dari kerusakan software hingga hardware.",
    hasSubmenu: true,
    submenuType: "brands",
  },
  {
    id: "tv",
    name: "Service TV",
    description: "Solusi untuk semua masalah TV Anda, termasuk panel, suara, dan daya.",
    hasSubmenu: true,
    submenuType: "brands",
  },
  {
    id: "laptop",
    name: "Service Laptop",
    description: "Layanan perbaikan laptop untuk semua brand, software dan hardware.",
    hasSubmenu: true,
    submenuType: "brands",
  },
  {
    id: "komputer",
    name: "Service Komputer",
    description: "Rawat dan perbaik PC Anda dengan layanan profesional kami.",
    hasSubmenu: false,
  },
  {
    id: "printer",
    name: "Service Printer",
    description: "Mengatasi masalah printer dari imacet, hasil cetak buruk, hingga koneksi.",
    hasSubmenu: false,
  },
  {
    id: "speaker",
    name: "Service Speaker",
    description: "Kembalikan kualitas suara speaker Anda, dari portable hingga home theater.",
    hasSubmenu: false,
  },
  {
    id: "amplifier",
    name: "Service Amplifier",
    description: "Perbaikan amplifier untuk audio yang jernih dan bertenaga kembali.",
    hasSubmenu: false,
  },
  {
    id: "lainnya",
    name: "Dan Lain-lain",
    description: "Layanan tambahan untuk berbagai perangkat elektronik lainnya.",
    hasSubmenu: true,
    submenuType: "other",
  },
]

export const hpBrands = [
  { id: "1", name: "Samsung" },
  { id: "2", name: "Xiaomi" },
  { id: "3", name: "iPhone" },
  { id: "4", name: "Oppo" },
  { id: "5", name: "Vivo" },
  { id: "6", name: "Realme" },
  { id: "7", name: "Huawei" },
  { id: "8", name: "Asus" },
  { id: "9", name: "Lenovo" },
  { id: "10", name: "Nokia" },
  { id: "11", name: "Sony" },
  { id: "12", name: "LG" },
  { id: "13", name: "Infinix" },
  { id: "14", name: "Tecno" },
  { id: "15", name: "Advan" },
  { id: "16", name: "Lainnya" },
]

export const tvBrands = [
  { id: "1", name: "Samsung" },
  { id: "2", name: "LG" },
  { id: "3", name: "Sony" },
  { id: "4", name: "Sharp" },
  { id: "5", name: "Toshiba" },
  { id: "6", name: "Panasonic" },
  { id: "7", name: "TCL" },
  { id: "8", name: "Polytron" },
  { id: "9", name: "Changhong" },
  { id: "10", name: "Philips" },
  { id: "11", name: "Coocaa" },
  { id: "12", name: "Xiaomi" },
  { id: "13", name: "Aqua" },
  { id: "14", name: "Mito" },
  { id: "15", name: "Akari" },
  { id: "16", name: "Lainnya" },
]

export const laptopBrands = [
  { id: "1", name: "Asus" },
  { id: "2", name: "Acer" },
  { id: "3", name: "Lenovo" },
  { id: "4", name: "HP" },
  { id: "5", name: "Dell" },
  { id: "6", name: "MSI" },
  { id: "7", name: "Apple" },
  { id: "8", name: "Toshiba" },
  { id: "9", name: "Samsung" },
  { id: "10", name: "Sony" },
  { id: "11", name: "Fujitsu" },
  { id: "12", name: "Axioo" },
  { id: "13", name: "Zyrex" },
  { id: "14", name: "Advan" },
  { id: "15", name: "Infinix" },
  { id: "16", name: "Lainnya" },
]

export const lainnyaItems = [
  { id: "1", name: "Kulkas", active: true },
  { id: "2", name: "Kipas Angin", active: true },
  { id: "3", name: "AC", active: true },
  { id: "4", name: "Mesin Cuci", active: true },
  { id: "5", name: "Dispenser", active: true },
  { id: "6", name: "Rice Cooker", active: true },
  { id: "7", name: "Blender", active: true },
  { id: "8", name: "Setrika", active: true },
  { id: "9", name: "Microwave", active: true },
  { id: "10", name: "Oven", active: true },
  { id: "11", name: "", active: false },
  { id: "12", name: "", active: false },
  { id: "13", name: "", active: false },
  { id: "14", name: "", active: false },
  { id: "15", name: "", active: false },
  { id: "16", name: "", active: false },
  { id: "17", name: "", active: false },
  { id: "18", name: "", active: false },
  { id: "19", name: "", active: false },
  { id: "20", name: "", active: false },
]

export const storeGallery = [
  {
    id: "1",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenNN-TL85CnUxaFiqFOH5HCXWRZpH9HuVqk.png",
    alt: "Interior Toko MULTIDATA Elektronik",
  },
  {
    id: "2",
    image: "/electronics-repair-workshop-interior.jpg",
    alt: "Ruang Service MULTIDATA",
  },
  {
    id: "3",
    image: "/customer-service-counter-electronics-store.jpg",
    alt: "Counter Pelayanan MULTIDATA",
  },
  {
    id: "4",
    image: "/electronics-store-showroom-display.jpg",
    alt: "Showroom MULTIDATA Elektronik",
  },
]

export const articles = [
  // Page 1
  {
    id: "1",
    title: "5 Tanda Baterai HP Anda Sudah Harus Diganti",
    slug: "5-tanda-baterai-hp-harus-diganti",
    category: "Tips & Trik",
    date: "20 Mei 2024",
    excerpt:
      "Baterai HP yang sudah lemah dapat mengganggu aktivitas sehari-hari. Kenali tanda-tandanya agar tidak terlambat menggantinya dan terhindar dari kerusakan lebih parah.",
  },
  {
    id: "2",
    title: "Cara Merawat Layar HP Agar Tidak Cepat Rusak",
    slug: "cara-merawat-layar-hp-agar-awet",
    category: "Tips & Trik",
    date: "18 Mei 2024",
    excerpt:
      "Layar adalah komponen HP yang paling rentan rusak. Simak tips perawatan layar HP yang benar agar tetap jernih dan awet dalam jangka panjang.",
  },
  {
    id: "3",
    title: "Promo Spesial Service HP Gratis Biaya Cek",
    slug: "promo-service-hp-gratis-biaya-cek",
    category: "Promo Spesial",
    date: "15 Mei 2024",
    excerpt:
      "Dapatkan layanan cek kondisi HP gratis di bulan ini! Cukup bawa HP Anda ke toko kami, kami akan mengecek kerusakan tanpa biaya apapun.",
  },
  // Page 2
  {
    id: "4",
    title: "Kenapa HP Sering Panas? Ini Penyebab dan Solusinya",
    slug: "kenapa-hp-sering-panas-penyebab-solusi",
    category: "Tips & Trik",
    date: "13 Mei 2024",
    excerpt:
      "HP yang cepat panas bisa jadi tanda masalah serius. Pelajari penyebab utama HP overheat dan cara mengatasinya sebelum merusak komponen lainnya.",
  },
  {
    id: "5",
    title: "Layanan Express Service: Perbaikan HP dalam 2 Jam",
    slug: "layanan-express-service-2-jam",
    category: "Info Layanan",
    date: "11 Mei 2024",
    excerpt:
      "Butuh HP cepat kembali? Kini kami menyediakan layanan express service untuk kerusakan ringan hingga sedang dengan garansi hasil perbaikan.",
  },
  {
    id: "6",
    title: "Tips Membersihkan Port Charging HP yang Kotor",
    slug: "tips-membersihkan-port-charging-hp",
    category: "Tips & Trik",
    date: "9 Mei 2024",
    excerpt:
      "Port charging yang kotor dapat menyebabkan HP sulit di-charge. Ikuti cara aman membersihkan port charging tanpa merusak komponen di dalamnya.",
  },
  // Page 3
  {
    id: "7",
    title: "Diskon 20% untuk Service Laptop Semua Merek",
    slug: "diskon-20-persen-service-laptop",
    category: "Promo Spesial",
    date: "7 Mei 2024",
    excerpt:
      "Laptop lemot atau rusak? Manfaatkan promo diskon 20% untuk semua jenis service laptop dari mulai cleaning, install ulang, hingga ganti komponen.",
  },
  {
    id: "8",
    title: "Cara Backup Data Sebelum Service HP",
    slug: "cara-backup-data-sebelum-service",
    category: "Tips & Trik",
    date: "5 Mei 2024",
    excerpt:
      "Pastikan data Anda aman sebelum melakukan service HP. Pelajari cara backup yang mudah dan aman agar tidak kehilangan foto, kontak, dan file penting.",
  },
  {
    id: "9",
    title: "Teknisi Bersertifikat Resmi Siap Melayani Anda",
    slug: "teknisi-bersertifikat-resmi",
    category: "Info Layanan",
    date: "3 Mei 2024",
    excerpt:
      "Tim teknisi kami telah tersertifikasi dan berpengalaman lebih dari 15 tahun dalam menangani berbagai kerusakan elektronik dengan standar profesional.",
  },
  // Page 4
  {
    id: "10",
    title: "Penyebab HP Mati Total dan Cara Mengatasinya",
    slug: "penyebab-hp-mati-total-dan-solusi",
    category: "Tips & Trik",
    date: "1 Mei 2024",
    excerpt:
      "HP mati total bisa disebabkan berbagai hal mulai dari masalah baterai, IC power, hingga motherboard. Ketahui penyebab dan estimasi biaya perbaikannya.",
  },
  {
    id: "11",
    title: "Garansi Resmi untuk Semua Jenis Perbaikan",
    slug: "garansi-resmi-semua-perbaikan",
    category: "Info Layanan",
    date: "29 April 2024",
    excerpt:
      "Kami memberikan garansi resmi untuk setiap perbaikan yang kami lakukan. Jika masalah yang sama muncul lagi, kami akan perbaiki tanpa biaya tambahan.",
  },
  {
    id: "12",
    title: "Cara Memperpanjang Usia Baterai HP Anda",
    slug: "cara-memperpanjang-usia-baterai-hp",
    category: "Tips & Trik",
    date: "27 April 2024",
    excerpt:
      "Baterai HP bisa awet hingga 3-4 tahun jika dirawat dengan benar. Simak kebiasaan charging yang tepat dan tips mengoptimalkan kesehatan baterai HP Anda.",
  },
  // Page 5
  {
    id: "13",
    title: "Beli 2 Gratis 1: Promo Aksesoris HP Pilihan",
    slug: "beli-2-gratis-1-aksesoris-hp",
    category: "Promo Spesial",
    date: "25 April 2024",
    excerpt:
      "Lengkapi HP Anda dengan aksesoris berkualitas! Dapatkan promo beli 2 gratis 1 untuk produk pilihan seperti casing, tempered glass, dan charger.",
  },
  {
    id: "14",
    title: "Mengatasi HP Lemot: Software vs Hardware",
    slug: "mengatasi-hp-lemot-software-hardware",
    category: "Tips & Trik",
    date: "23 April 2024",
    excerpt:
      "HP lemot bisa karena masalah software atau hardware. Pelajari cara membedakannya dan solusi tepat untuk membuat HP kembali ngebut seperti baru.",
  },
  {
    id: "15",
    title: "Kini Melayani Service TV LED Semua Merek",
    slug: "melayani-service-tv-led-semua-merek",
    category: "Info Layanan",
    date: "21 April 2024",
    excerpt:
      "Layanan kami kini diperluas untuk service TV LED berbagai merek. Dari masalah gambar, suara, hingga kerusakan panel, kami siap membantu Anda.",
  },
  // Page 6
  {
    id: "16",
    title: "Bahaya Menggunakan Charger Tidak Original",
    slug: "bahaya-charger-tidak-original",
    category: "Tips & Trik",
    date: "19 April 2024",
    excerpt:
      "Charger palsu atau tidak original dapat merusak baterai dan komponen HP lainnya. Ketahui risiko dan cara memilih charger yang aman untuk HP Anda.",
  },
  {
    id: "17",
    title: "Cara Mengatasi Touchscreen HP yang Error",
    slug: "cara-mengatasi-touchscreen-error",
    category: "Tips & Trik",
    date: "17 April 2024",
    excerpt:
      "Layar sentuh yang tidak responsif atau bergerak sendiri sangat mengganggu. Coba beberapa cara ini sebelum memutuskan untuk ganti LCD HP Anda.",
  },
  {
    id: "18",
    title: "Promo Cashback 50rb untuk Service di Atas 200rb",
    slug: "promo-cashback-50rb-service",
    category: "Promo Spesial",
    date: "15 April 2024",
    excerpt:
      "Service HP atau laptop dengan biaya di atas Rp 200.000 akan mendapat cashback Rp 50.000 yang bisa digunakan untuk service berikutnya. Buruan manfaatkan!",
  },
  // Page 7
  {
    id: "19",
    title: "Tips Merawat Laptop Agar Tetap Awet",
    slug: "tips-merawat-laptop-agar-awet",
    category: "Tips & Trik",
    date: "13 April 2024",
    excerpt:
      "Laptop adalah investasi yang tidak murah. Pelajari cara merawat laptop dengan benar mulai dari cleaning, suhu, hingga kebiasaan penggunaan yang tepat.",
  },
  {
    id: "20",
    title: "Kini Tersedia Layanan Antar Jemput Service",
    slug: "layanan-antar-jemput-service",
    category: "Info Layanan",
    date: "11 April 2024",
    excerpt:
      "Tidak sempat datang ke toko? Tenang, kini kami menyediakan layanan antar jemput untuk service HP, laptop, dan elektronik lainnya di area Purworejo.",
  },
  {
    id: "21",
    title: "Penyebab Speaker HP Tidak Bunyi dan Solusinya",
    slug: "penyebab-speaker-hp-tidak-bunyi",
    category: "Tips & Trik",
    date: "9 April 2024",
    excerpt:
      "Speaker HP bermasalah bisa karena debu, air, atau kerusakan komponen. Simak penyebab umum dan langkah awal yang bisa Anda lakukan sendiri di rumah.",
  },
  // Page 8
  {
    id: "22",
    title: "Panduan Lengkap Memilih HP Bekas Berkualitas",
    slug: "panduan-memilih-hp-bekas-berkualitas",
    category: "Tips & Trik",
    date: "7 April 2024",
    excerpt:
      "Ingin beli HP second? Pelajari cara cek kondisi HP bekas agar tidak tertipu. Dari fisik, software, hingga komponen internal yang harus dicek sebelum beli.",
  },
  {
    id: "23",
    title: "Gratis Cleaning dan Cek Kesehatan Laptop",
    slug: "gratis-cleaning-cek-kesehatan-laptop",
    category: "Promo Spesial",
    date: "5 April 2024",
    excerpt:
      "Khusus bulan ini, dapatkan layanan cleaning laptop dan pengecekan kesehatan komponen secara gratis. Pastikan laptop Anda dalam kondisi prima untuk bekerja.",
  },
  {
    id: "24",
    title: "Cara Mengatasi HP yang Sering Restart Sendiri",
    slug: "cara-mengatasi-hp-restart-sendiri",
    category: "Tips & Trik",
    date: "3 April 2024",
    excerpt:
      "HP yang sering restart sendiri bisa sangat mengganggu. Ketahui penyebabnya mulai dari aplikasi bermasalah, sistem error, hingga kerusakan hardware.",
  },
]

const priceList = {
  hp: [], // Placeholder for HP pricing
  laptop: [], // Placeholder for Laptop pricing
}

// Export aliases for backward compatibility
export const pricingHandphone = priceList.hp
export const pricingLaptop = priceList.laptop
