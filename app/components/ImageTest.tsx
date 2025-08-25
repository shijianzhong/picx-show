'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageTestProps {
  imageUrl: string
  alt: string
}

export default function ImageTest({ imageUrl, alt }: ImageTestProps) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleLoad = () => {
    setLoading(false)
    setError(false)
  }

  const handleError = () => {
    setLoading(false)
    setError(true)
    console.error('图片加载失败:', imageUrl)
  }

  if (error) {
    return (
      <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl mb-2">📷</div>
          <p className="text-sm text-gray-600">图片加载失败</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-square overflow-hidden rounded-lg">
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
        unoptimized={true}
      />
    </div>
  )
}
