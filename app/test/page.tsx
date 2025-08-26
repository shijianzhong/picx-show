export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          部署测试页面
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          如果你能看到这个页面，说明Next.js应用已经成功部署！
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-green-100 rounded-lg">
            <p className="text-green-800">✅ 页面渲染正常</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg">
            <p className="text-blue-800">📱 响应式设计正常</p>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg">
            <p className="text-purple-800">🎨 Tailwind CSS 正常</p>
          </div>
        </div>
        <div className="mt-8">
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            返回首页
          </a>
        </div>
      </div>
    </div>
  )
}
