'use client'

import { useState, useEffect } from 'react'
import ImageCard from './ImageCard'
import { Loader2 } from 'lucide-react'

interface Image {
  id: string
  url: string
  filename: string
  size?: number
  uploadTime?: string
  alt: string
  title: string
  description: string
}

interface ImageGridProps {
  images: Image[]
  loading?: boolean
  onLoadMore?: () => void
  hasMore?: boolean
  onFavorite?: (imageId: string) => void
  favorites?: string[]
}

export default function ImageGrid({ 
  images, 
  loading = false, 
  onLoadMore, 
  hasMore = false,
  onFavorite,
  favorites = []
}: ImageGridProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
          onLoadMore?.()
        }
      },
      { threshold: 0.1 }
    )

    const loadMoreTrigger = document.getElementById('load-more-trigger')
    if (loadMoreTrigger) {
      observer.observe(loadMoreTrigger)
    }

    return () => {
      if (loadMoreTrigger) {
        observer.unobserve(loadMoreTrigger)
      }
    }
  }, [hasMore, loading, onLoadMore])

  if (loading && images.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary-600 mx-auto mb-4" />
          <p className="text-gray-600">正在加载美图...</p>
        </div>
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📷</span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">暂无图片</h3>
          <p className="text-gray-600">暂时没有找到相关的美图</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Image Grid */}
      <div className="image-grid">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onFavorite={onFavorite}
            isFavorited={favorites.includes(image.id)}
          />
        ))}
      </div>

      {/* Load More Trigger */}
      {hasMore && (
        <div id="load-more-trigger" className="flex justify-center py-8">
          {loading ? (
            <div className="flex items-center space-x-2 text-gray-600">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>加载更多...</span>
            </div>
          ) : (
            <button
              onClick={onLoadMore}
              className="btn-primary"
            >
              加载更多美图
            </button>
          )}
        </div>
      )}

      {/* End of content */}
      {!hasMore && images.length > 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>已经到底了，没有更多美图了</p>
        </div>
      )}
    </div>
  )
}
