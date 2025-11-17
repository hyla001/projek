// components/testimonial-form.tsx - VERSI SIMPLE
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    // Simulasi submit (tanpa API)
    setTimeout(() => {
      console.log('Testimonial submitted:', formData)
      setMessage('✅ Terima kasih! Testimonial Anda telah dikirim.')
      setFormData({ name: '', email: '', rating: 5, comment: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }))
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Tambah Testimonial</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nama *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Masukkan nama Anda"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email (opsional)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="email@contoh.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Rating *</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingChange(star)}
                className={`p-2 rounded-full transition-all ${
                  formData.rating >= star 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                ⭐
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-1">Rating: {formData.rating}/5</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Komentar *</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Bagikan pengalaman Anda..."
          />
        </div>

        {message && (
          <div className="p-3 rounded-md bg-green-100 text-green-800">
            {message}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90"
        >
          {isSubmitting ? 'Mengirim...' : 'Kirim Testimonial'}
        </Button>
      </form>
    </div>
  )
}