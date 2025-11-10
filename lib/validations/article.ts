import { z } from "zod"

export const articleSchema = z.object({
  title: z.string().min(10, "Judul minimal 10 karakter"),
  slug: z
    .string()
    .min(5, "Slug minimal 5 karakter")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug hanya boleh huruf kecil, angka, dan strip"),
  excerpt: z.string().min(50, "Ringkasan minimal 50 karakter"),
  content: z.string().min(100, "Konten minimal 100 karakter"),
  category: z.string().min(3, "Kategori harus dipilih"),
  image: z.string().optional(),
  published: z.boolean().default(true),
})

export type ArticleInput = z.infer<typeof articleSchema>
