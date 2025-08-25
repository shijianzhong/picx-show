import { Metadata } from 'next'
import Header from '../../components/Header'
import CategoryGallery from '../../components/CategoryGallery'
import ClientOnly from '../../components/ClientOnly'

interface CategoryPageProps {
  params: {
    dir: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const dir = params.dir
  const categoryNames: { [key: string]: string } = {
    facebook: 'Facebook美图',
    instagram: 'Instagram美图',
  }
  
  const categoryName = categoryNames[dir] || `${dir}美图`

  return {
    title: `${categoryName} - 美图欣赏`,
    description: `精选${categoryName}，高质量图片分享，为您提供视觉盛宴。`,
    keywords: [categoryName, '美图', '图片欣赏', '高质量图片'],
    openGraph: {
      title: `${categoryName} - 美图欣赏`,
      description: `精选${categoryName}，高质量图片分享，为您提供视觉盛宴。`,
    },
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { dir } = params
  const categoryNames: { [key: string]: string } = {
    facebook: 'Facebook美图',
    instagram: 'Instagram美图',
  }
  
  const categoryName = categoryNames[dir] || `${dir}美图`

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            精选{categoryName}，为您提供高质量视觉体验
          </p>
        </section>

        {/* Category Gallery */}
        <ClientOnly fallback={
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">正在加载{categoryName}...</p>
            </div>
          </div>
        }>
          <CategoryGallery dir={dir} categoryName={categoryName} />
        </ClientOnly>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
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
