'use client'

import { useState, useEffect } from 'react'
import ImageGrid from './ImageGrid'

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

interface ApiResponse {
  success: boolean
  data: {
    images: Image[]
    total: number
    hasMore: boolean
    pagination: {
      start: number
      limit: number
      nextStart: number
    }
  }
  error?: string
  message?: string
}

export default function ImageGallery() {
  const [images, setImages] = useState<Image[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])

  // 从localStorage加载收藏
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // 保存收藏到localStorage
  const saveFavorites = (newFavorites: string[]) => {
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  // 获取图片数据
  const fetchImages = async (start = 0, append = false) => {
    try {
      const response = await fetch(`/api/images?dir=facebook&start=${start}&count=20`)
      const data: ApiResponse = await response.json()

      if (data.success) {
        if (append) {
          setImages(prev => [...prev, ...data.data.images])
        } else {
          setImages(data.data.images)
        }
        setHasMore(data.data.hasMore)
      } else {
        setError(data.error || '获取图片失败')
      }
    } catch (err) {
      console.error('获取图片失败:', err)
      setError('网络错误，请稍后重试')
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  // 初始加载
  useEffect(() => {
    fetchImages(0, false)
  }, [])

  // 加载更多
  const handleLoadMore = () => {
    if (loadingMore || !hasMore) return
    
    setLoadingMore(true)
    const nextStart = images.length
    fetchImages(nextStart, true)
  }

  // 收藏/取消收藏
  const handleFavorite = (imageId: string) => {
    const newFavorites = favorites.includes(imageId)
      ? favorites.filter(id => id !== imageId)
      : [...favorites, imageId]
    
    setFavorites(newFavorites)
    saveFavorites(newFavorites)
  }

  // 重试加载
  const handleRetry = () => {
    setError(null)
    setLoading(true)
    fetchImages(0, false)
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">⚠️</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">加载失败</h3>
        <p className="text-gray-600 mb-4">{error}</p>
        <button onClick={handleRetry} className="btn-primary">
          重试
        </button>
      </div>
    )
  }

  return (
    <ImageGrid
      images={images}
      loading={loading}
      onLoadMore={handleLoadMore}
      hasMore={hasMore}
      onFavorite={handleFavorite}
      favorites={favorites}
    />
  )
}
