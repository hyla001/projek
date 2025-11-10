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

// Declare variables to fix undeclared errors
const newsArticles = [] // Placeholder for news articles
const priceList = {
  hp: [], // Placeholder for HP pricing
  laptop: [], // Placeholder for Laptop pricing
}

// Export aliases for backward compatibility
export const articles = newsArticles
export const pricingHandphone = priceList.hp
export const pricingLaptop = priceList.laptop
