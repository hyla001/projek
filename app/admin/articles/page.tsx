"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminNav } from "@/components/admin-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"

interface Article {
  id: string
  title: string
  slug: string
  category: string
  published: boolean
  createdAt: string
}

export default function ArticlesPage() {
  const router = useRouter()
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await fetch("/api/articles")
      const data = await response.json()
      setArticles(data.articles)
    } catch (error) {
      toast.error("Gagal memuat artikel")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus artikel ini?")) return

    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast.success("Artikel berhasil dihapus")
        fetchArticles()
      } else {
        toast.error("Gagal menghapus artikel")
      }
    } catch (error) {
      toast.error("Terjadi kesalahan")
    }
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Kelola Berita</h1>
            <p className="text-muted-foreground mt-2">Tambah, edit, atau hapus artikel berita</p>
          </div>
          <Link href="/admin/articles/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Tambah Berita
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Artikel</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-center py-8 text-muted-foreground">Memuat data...</p>
            ) : articles.length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">Belum ada artikel</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Judul</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell className="font-medium">{article.title}</TableCell>
                      <TableCell>{article.category}</TableCell>
                      <TableCell>
                        <Badge variant={article.published ? "default" : "secondary"}>
                          {article.published ? "Published" : "Draft"}
                        </Badge>
                      </TableCell>
                      <TableCell>{new Date(article.createdAt).toLocaleDateString("id-ID")}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/admin/articles/${article.id}`}>
                            <Button variant="ghost" size="sm">
                              <Pencil className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm" onClick={() => handleDelete(article.id)}>
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
