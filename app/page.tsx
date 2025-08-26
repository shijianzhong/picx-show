import { Metadata } from 'next'
import Header from './components/Header'
import ImageGrid from './components/ImageGrid'
import { Suspense } from 'react'
import ImageGallery from './components/ImageGallery'
import ClientOnly from './components/ClientOnly'
import ErrorBoundary from './components/ErrorBoundary'
import { HeaderAd, InContentAd, FooterAd } from './components/AdSense'

export const metadata: Metadata = {
  title: '美图欣赏 - 精选高质量图片分享平台',
  description: '发现和分享最美的高质量图片，包含风景、人物、艺术等多种类型的美图，为您提供视觉盛宴。',
  keywords: ['美图', '图片欣赏', '高质量图片', '风景图片', '艺术图片', '图片分享'],
  openGraph: {
    title: '美图欣赏 - 精选高质量图片分享平台',
    description: '发现和分享最美的高质量图片，包含风景、人物、艺术等多种类型的美图，为您提供视觉盛宴。',
    images: ['/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeaderAd />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            发现最美图片
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            精选高质量美图，包含风景、人物、艺术等多种类型，为您提供视觉盛宴
          </p>
        </section>

        {/* Category Navigation */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/category/facebook" 
              className="btn-primary"
            >
              Facebook美图
            </a>
            <a 
              href="/category/instagram" 
              className="btn-secondary"
            >
              Instagram美图
            </a>
            <a 
              href="/favorites" 
              className="btn-secondary"
            >
              我的收藏
            </a>
          </div>
        </section>

        {/* Image Gallery */}
        <ErrorBoundary>
          <ClientOnly fallback={
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">正在加载美图...</p>
              </div>
            </div>
          }>
            <Suspense fallback={
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">正在加载美图...</p>
              </div>
            </div>
            }>
              <ImageGallery />
            </Suspense>
          </ClientOnly>
        </ErrorBoundary>

        {/* 内容中广告 */}
        <InContentAd />

        {/* SEO Content */}
        <section className="mt-16 prose prose-lg max-w-none">
          <h2>关于美图欣赏</h2>
          <p>
            美图欣赏是一个专注于分享高质量图片的平台。我们致力于为用户提供最美、最优质的图片资源，
            包括自然风景、城市建筑、人物肖像、艺术作品等多种类型的美图。
          </p>
          
          <h3>我们的特色</h3>
          <ul>
            <li><strong>高质量图片</strong>：所有图片都经过精心挑选，确保高质量</li>
            <li><strong>多样化内容</strong>：涵盖各种主题和风格的美图</li>
            <li><strong>便捷浏览</strong>：响应式设计，支持各种设备访问</li>
            <li><strong>免费分享</strong>：所有图片都可以免费浏览和下载</li>
          </ul>

          <h3>图片分类</h3>
          <p>
            我们的图片按不同主题进行分类，方便用户快速找到感兴趣的内容：
          </p>
          <ul>
            <li><strong>Facebook美图</strong>：来自Facebook平台的精选美图</li>
            <li><strong>Instagram美图</strong>：来自Instagram平台的精美图片</li>
            <li><strong>风景图片</strong>：自然风光、城市景观等</li>
            <li><strong>人物图片</strong>：人像摄影、时尚写真等</li>
            <li><strong>艺术图片</strong>：艺术作品、创意设计等</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <FooterAd />
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 美图欣赏. 保留所有权利.</p>
            <p className="mt-2 text-sm">
              所有图片版权归原作者所有，本站仅用于分享欣赏
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
