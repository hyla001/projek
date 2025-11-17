'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            MULTIDATA ELEKTRONIK 
          </h1>
          
          {/* Navigation Menu */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
            <span>Service</span>
            <span>Harga</span>
            <span>Benita</span>
            <span>Tokio Kami</span>
            <span>Kontak</span>
            <span>Cari </span>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-300 my-6"></div>
        </div>

        {/* Error Content */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-red-600 mb-8">
            500
          </h1>

          <h2 className="text-6xl font-bold text-red-600 mb-8">

            SERVER LAGI EROR MAAF YA ...
          </h2>

        </div>

        {/* Action Buttons */}
       
        {/* Footer Separator */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <p className="text-sm text-gray-500">
            &copy; 2025 MULTIDATA Elektronik. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  )
}