import { notFound } from 'next/navigation'

export default function TestError() {
  notFound() // ← Ini akan trigger 404 page, bukan 500 error
}