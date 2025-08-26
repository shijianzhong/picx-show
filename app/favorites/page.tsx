import { Metadata } from 'next'
import Header from '../components/Header'
import FavoritesGallery from '../components/FavoritesGallery'
import ClientOnly from '../components/ClientOnly'
import { HeaderAd, InContentAd, FooterAd } from '../components/AdSense'

export const metadata: Metadata = {
  title: '我的收藏 - 美图欣赏',
  description: '查看您收藏的美图，随时回顾喜欢的图片。',
  keywords: ['收藏', '美图', '图片欣赏', '我的收藏'],
  openGraph: {
    title: '我的收藏 - 美图欣赏',
    description: '查看您收藏的美图，随时回顾喜欢的图片。',
  },
}

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeaderAd />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            我的收藏
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            查看您收藏的美图，随时回顾喜欢的图片
          </p>
        </section>

        {/* Favorites Gallery */}
        <ClientOnly fallback={
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">正在加载收藏...</p>
            </div>
          </div>
        }>
          <FavoritesGallery />
        </ClientOnly>

        {/* 内容中广告 */}
        <InContentAd />
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
