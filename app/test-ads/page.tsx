import { Metadata } from 'next'
import Header from '../components/Header'
import { HeaderAd, InContentAd, FooterAd, SidebarAd, GridInlineAd } from '../components/AdSense'

export const metadata: Metadata = {
  title: '广告测试 - 美图欣赏',
  description: '测试Google AdSense广告组件',
}

export default function TestAdsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeaderAd />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            广告测试页面
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            测试各种广告位和广告格式
          </p>
        </section>

        {/* 测试内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 主内容区域 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">主内容区域</h2>
              <p className="text-gray-600 mb-4">
                这是主内容区域，用于测试内容中广告的显示效果。
              </p>
              
              {/* 内容中广告 */}
              <InContentAd />
              
              <p className="text-gray-600 mb-4">
                广告应该显示在上方内容之后，下方内容之前。
              </p>
            </div>

            {/* 网格内联广告测试 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">网格内联广告</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded">图片1</div>
                <div className="bg-gray-100 p-4 rounded">图片2</div>
                <GridInlineAd />
                <div className="bg-gray-100 p-4 rounded">图片3</div>
                <div className="bg-gray-100 p-4 rounded">图片4</div>
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="lg:col-span-1">
            <SidebarAd />
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">侧边栏内容</h3>
              <p className="text-gray-600 text-sm">
                这是侧边栏内容，用于测试侧边栏广告的显示效果。
              </p>
            </div>
          </div>
        </div>

        {/* 底部测试内容 */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">底部测试区域</h2>
          <p className="text-gray-600">
            这是底部测试区域，用于验证底部广告的显示效果。
          </p>
        </div>
      </main>

      {/* 底部广告 */}
      <FooterAd />
      
      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 美图欣赏. 保留所有权利.</p>
            <p className="mt-2 text-sm">
              广告测试页面 - 仅用于开发测试
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
