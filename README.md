# 美图欣赏 - 精选高质量图片分享平台

一个基于 Next.js 14 构建的美图欣赏网站，专注于分享高质量图片，包含完整的 SEO 优化和响应式设计。

## 功能特性

- 🖼️ **高质量图片展示** - 从 API 获取并展示精选美图
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🔍 **SEO 优化** - 完整的元数据、结构化数据和 Open Graph 标签
- ❤️ **收藏功能** - 用户可以收藏喜欢的图片
- 📥 **下载功能** - 支持图片下载
- 🔄 **无限滚动** - 自动加载更多图片
- 🎨 **现代 UI** - 使用 Tailwind CSS 构建的美观界面
- ⚡ **性能优化** - Next.js 图片优化和懒加载

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **HTTP 客户端**: Axios
- **图片优化**: Next.js Image 组件

## 项目结构

```
picx-show/
├── app/
│   ├── api/
│   │   └── images/
│   │       └── route.ts          # 后端 API 接口
│   ├── category/
│   │   └── [dir]/
│   │       └── page.tsx          # 分类页面
│   ├── components/
│   │   ├── Header.tsx            # 头部组件
│   │   ├── ImageCard.tsx         # 图片卡片组件
│   │   ├── ImageGrid.tsx         # 图片网格组件
│   │   ├── ImageGallery.tsx      # 图片画廊组件
│   │   ├── CategoryGallery.tsx   # 分类画廊组件
│   │   └── FavoritesGallery.tsx  # 收藏画廊组件
│   ├── favorites/
│   │   └── page.tsx              # 收藏页面
│   ├── globals.css               # 全局样式
│   ├── layout.tsx                # 根布局
│   └── page.tsx                  # 主页面
├── public/                       # 静态资源
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
npm start
```

## API 配置

项目使用外部 API 获取图片数据。API 配置在 `app/api/images/route.ts` 文件中：

```typescript
const API_BASE_URL = 'https://picx.ink-home.cn/api/manage/list'
const API_TOKEN = 'imgbed_n5M4iqcwnaQUBQe5Dh8dZwxWBDq0ZESN'
```

## SEO 优化

项目包含完整的 SEO 优化：

- **元数据**: 每个页面都有完整的 title、description、keywords
- **Open Graph**: 支持社交媒体分享
- **结构化数据**: 为搜索引擎提供更好的理解
- **图片优化**: 使用 Next.js Image 组件进行自动优化
- **语义化 HTML**: 使用正确的 HTML 标签结构

## 功能说明

### 图片展示
- 响应式网格布局
- 懒加载和无限滚动
- 图片悬停效果
- 加载状态指示

### 收藏功能
- 本地存储收藏数据
- 收藏状态同步
- 收藏页面展示

### 分类浏览
- 支持不同目录的图片分类
- 动态路由生成
- 分类页面 SEO 优化

### 下载和分享
- 一键下载图片
- 原生分享 API 支持
- 降级到复制链接

## 部署

### Vercel 部署

推荐使用 Vercel 进行部署：

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

项目支持部署到任何支持 Next.js 的平台：

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 环境变量

创建 `.env.local` 文件（可选）：

```env
NEXT_PUBLIC_API_BASE_URL=https://picx.ink-home.cn/api/manage/list
API_TOKEN=imgbed_n5M4iqcwnaQUBQe5Dh8dZwxWBDq0ZESN
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

## 更新日志

### v1.0.0
- 初始版本发布
- 完整的图片展示功能
- SEO 优化
- 响应式设计
- 收藏功能
