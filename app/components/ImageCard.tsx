'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Download, Share2, Eye, X } from 'lucide-react'

interface ImageCardProps {
  image: {
    id: string
    url: string
    filename: string
    size?: number
    uploadTime?: string
    alt: string
    title: string
    description: string
  }
  onFavorite?: (imageId: string) => void
  isFavorited?: boolean
}

export default function ImageCard({ image, onFavorite, isFavorited = false }: ImageCardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [showFullImage, setShowFullImage] = useState(false)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    onFavorite?.(image.id)
  }

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation()
    const link = document.createElement('a')
    link.href = image.url
    link.download = image.filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.title,
          text: image.description,
          url: window.location.href,
        })
      } catch (error) {
        console.log('分享失败:', error)
      }
    } else {
      // 降级到复制链接
      navigator.clipboard.writeText(window.location.href)
      alert('链接已复制到剪贴板')
    }
  }

  const handleImageClick = () => {
    setShowFullImage(true)
  }

  const handleCloseFullImage = () => {
    setShowFullImage(false)
  }

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return ''
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('zh-CN')
  }

  return (
    <>
      <div 
        className="image-card group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleImageClick}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 loading-skeleton" />
          )}
          
          <Image
            src={image.url}
            alt={image.alt}
            title={image.title}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={handleImageLoad}
            onError={() => {
              console.error('图片加载失败:', image.url)
              setIsLoading(false)
            }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            priority={false}
            unoptimized={true}
          />

          {/* Overlay with actions */}
          <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex space-x-2">
              <button
                onClick={handleFavorite}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isFavorited 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white bg-opacity-90 text-gray-700 hover:bg-red-500 hover:text-white'
                }`}
                title={isFavorited ? '取消收藏' : '收藏'}
              >
                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
              </button>
              
              <button
                onClick={handleDownload}
                className="p-2 rounded-full bg-white bg-opacity-90 text-gray-700 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                title="下载"
              >
                <Download className="w-4 h-4" />
              </button>
              
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-white bg-opacity-90 text-gray-700 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                title="分享"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-sm font-medium truncate">{image.filename}</h3>
            <div className="flex items-center justify-between text-xs text-gray-300 mt-1">
              <span>{formatFileSize(image.size)}</span>
              <span>{formatDate(image.uploadTime)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full Image Modal */}
      {showFullImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseFullImage}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={handleCloseFullImage}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              title="关闭"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative">
              <Image
                src={image.url}
                alt={image.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain"
                unoptimized={true}
              />
              
              {/* Image info in modal */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                <h3 className="text-lg font-medium">{image.filename}</h3>
                <p className="text-sm text-gray-300 mt-1">{image.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-300 mt-2">
                  <span>{formatFileSize(image.size)}</span>
                  <span>{formatDate(image.uploadTime)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
