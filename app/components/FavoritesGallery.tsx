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

interface FavoritesGalleryProps {}

export default function FavoritesGallery({}: FavoritesGalleryProps) {
  const [favorites, setFavorites] = useState<string[]>([])
  const [favoriteImages, setFavoriteImages] = useState<Image[]>([])
  const [loading, setLoading] = useState(true)

  // 从localStorage加载收藏
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      const favoritesList = JSON.parse(savedFavorites)
      setFavorites(favoritesList)
      
      // 从localStorage加载收藏的图片数据
      const savedImages = localStorage.getItem('favoriteImages')
      if (savedImages) {
        const images = JSON.parse(savedImages)
        setFavoriteImages(images)
      }
    }
    setLoading(false)
  }, [])

  // 保存收藏到localStorage
  const saveFavorites = (newFavorites: string[], newImages: Image[]) => {
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    localStorage.setItem('favoriteImages', JSON.stringify(newImages))
  }

  // 收藏/取消收藏
  const handleFavorite = (imageId: string) => {
    const newFavorites = favorites.includes(imageId)
      ? favorites.filter(id => id !== imageId)
      : [...favorites, imageId]
    
    const newImages = favoriteImages.filter(img => newFavorites.includes(img.id))
    
    setFavorites(newFavorites)
    setFavoriteImages(newImages)
    saveFavorites(newFavorites, newImages)
  }

  // 清空收藏
  const handleClearFavorites = () => {
    if (confirm('确定要清空所有收藏吗？')) {
      setFavorites([])
      setFavoriteImages([])
      localStorage.removeItem('favorites')
      localStorage.removeItem('favoriteImages')
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">正在加载收藏...</p>
        </div>
      </div>
    )
  }

  if (favorites.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">❤️</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">暂无收藏</h3>
        <p className="text-gray-600 mb-4">
          您还没有收藏任何图片，快去浏览美图并收藏喜欢的吧！
        </p>
        <a href="/" className="btn-primary">
          浏览美图
        </a>
      </div>
    )
  }

  return (
    <div>
      {/* Favorites Info */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            我的收藏
          </h2>
          <button
            onClick={handleClearFavorites}
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            清空收藏
          </button>
        </div>
        <p className="text-gray-600">
          这里展示了您收藏的所有美图，共 {favorites.length} 张图片。
          您可以随时取消收藏或下载喜欢的图片。
        </p>
      </div>

      {/* Image Grid */}
      <ImageGrid
        images={favoriteImages}
        loading={false}
        hasMore={false}
        onFavorite={handleFavorite}
        favorites={favorites}
      />
    </div>
  )
}
