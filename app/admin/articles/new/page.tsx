"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AdminNav } from "@/components/admin-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { articleSchema, type ArticleInput } from "@/lib/validations/article"
import { toast } from "sonner"

export default function NewArticlePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ArticleInput>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      published: true,
      category: "Tips & Trik",
    },
  })

  const onSubmit = async (data: ArticleInput) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const error = await response.json()
        toast.error(error.error || "Gagal menyimpan artikel")
        return
      }

      toast.success("Artikel berhasil dibuat")
      router.push("/admin/articles")
    } catch (error) {
      toast.error("Terjadi kesalahan")
    } finally {
      setIsLoading(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <AdminNav />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Tambah Berita Baru</h1>
          <p className="text-muted-foreground mt-2">Isi form di bawah untuk membuat artikel berita baru</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Form Artikel</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Judul Artikel</Label>
                <Input
                  id="title"
                  placeholder="Masukkan judul artikel"
                  {...register("title")}
                  onChange={(e) => {
                    register("title").onChange(e)
                    setValue("slug", generateSlug(e.target.value))
                  }}
                />
                {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input id="slug" placeholder="judul-artikel-url" {...register("slug")} />
                {errors.slug && <p className="text-sm text-destructive">{errors.slug.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Kategori</Label>
                <Select onValueChange={(value) => setValue("category", value)} defaultValue="Tips & Trik">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tips & Trik">Tips & Trik</SelectItem>
                    <SelectItem value="Promo Spesial">Promo Spesial</SelectItem>
                    <SelectItem value="Info Layanan">Info Layanan</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-sm text-destructive">{errors.category.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Ringkasan</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Tulis ringkasan singkat artikel (minimal 50 karakter)"
                  rows={3}
                  {...register("excerpt")}
                />
                {errors.excerpt && <p className="text-sm text-destructive">{errors.excerpt.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Konten Lengkap</Label>
                <Textarea
                  id="content"
                  placeholder="Tulis konten artikel lengkap (minimal 100 karakter)"
                  rows={10}
                  {...register("content")}
                />
                {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">URL Gambar (Opsional)</Label>
                <Input id="image" placeholder="https://example.com/image.jpg" {...register("image")} />
                {errors.image && <p className="text-sm text-destructive">{errors.image.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch
                    id="published"
                    checked={watch("published")}
                    onCheckedChange={(checked) => setValue("published", checked)}
                  />
                  <Label htmlFor="published">Publikasikan artikel</Label>
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Menyimpan..." : "Simpan Artikel"}
                </Button>
                <Button type="button" variant="outline" onClick={() => router.back()}>
                  Batal
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
