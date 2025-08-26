'use client'

import { useEffect } from 'react'
import { AD_CONFIG, AD_STYLES } from '../config/ads'

interface AdSenseProps {
  adSlot: string
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'banner'
  style?: React.CSSProperties
  className?: string
  fullWidthResponsive?: boolean
}

export default function AdSense({ 
  adSlot, 
  adFormat = 'auto',
  style = {},
  className = '',
  fullWidthResponsive = true
}: AdSenseProps) {
  useEffect(() => {
    // 确保Google AdSense脚本已加载
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      try {
        (window as any).adsbygoogle.push({})
      } catch (error) {
        console.error('AdSense error:', error)
      }
    }
  }, [adSlot])

  const adStyle = {
    ...AD_STYLES.container,
    ...style
  }

  return (
    <div className={`ad-container ${className}`} style={adStyle}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CONFIG.PUBLISHER_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  )
}

// 预定义的广告位组件
export function HeaderAd() {
  const config = AD_CONFIG.POSITIONS.header
  return (
    <div className="w-full bg-white border-b border-gray-200 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <AdSense 
          adSlot={config.slot} 
          adFormat={config.format}
          className={config.className}
        />
      </div>
    </div>
  )
}

export function SidebarAd() {
  const config = AD_CONFIG.POSITIONS.sidebar
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <AdSense 
        adSlot={config.slot} 
        adFormat={config.format}
        className={config.className}
      />
    </div>
  )
}

export function InContentAd() {
  const config = AD_CONFIG.POSITIONS.inContent
  return (
    <div className="my-8 text-center">
      <AdSense 
        adSlot={config.slot} 
        adFormat={config.format}
        className={config.className}
      />
    </div>
  )
}

export function FooterAd() {
  const config = AD_CONFIG.POSITIONS.footer
  return (
    <div className="w-full bg-gray-50 border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <AdSense 
          adSlot={config.slot} 
          adFormat={config.format}
          className={config.className}
        />
      </div>
    </div>
  )
}

export function GridInlineAd() {
  const config = AD_CONFIG.POSITIONS.gridInline
  return (
    <div className="my-4 text-center">
      <AdSense 
        adSlot={config.slot} 
        adFormat={config.format}
        className={config.className}
      />
    </div>
  )
}
