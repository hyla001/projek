import { getCurrentAdmin } from "@/lib/auth"
import { redirect } from "next/navigation"
import { AdminNav } from "@/components/admin-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/prisma"
import { Newspaper, MessageSquare } from "lucide-react"

export default async function AdminDashboard() {
  const admin = await getCurrentAdmin()

  if (!admin) {
    redirect("/admin/login")
  }

  const [articlesCount, contactsCount] = await Promise.all([prisma.article.count(), prisma.contact.count()])

  return (
    <div className="min-h-screen bg-secondary/30">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard Admin</h1>
          <p className="text-muted-foreground mt-2">Selamat datang, {admin.name}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Artikel</CardTitle>
              <Newspaper className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{articlesCount}</div>
              <p className="text-xs text-muted-foreground mt-1">Artikel yang sudah dipublikasi</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pesan Kontak</CardTitle>
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contactsCount}</div>
              <p className="text-xs text-muted-foreground mt-1">Pesan dari pelanggan</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
