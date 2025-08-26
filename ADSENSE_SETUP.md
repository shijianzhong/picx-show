# Google AdSense 集成指南

## 概述

本项目已集成Google AdSense广告系统，支持多种广告位和响应式设计。

## 已完成的配置

### 1. ads.txt 文件
- ✅ 已放置在根目录：`/ads.txt`
- 内容：`google.com, pub-8317527679530231, DIRECT, f08c47fec0942fa0`

### 2. AdSense脚本
- ✅ 已在 `app/layout.tsx` 中添加Google AdSense脚本
- 发布者ID：`ca-pub-8317527679530231`

### 3. 广告组件
- ✅ 创建了 `app/components/AdSense.tsx` 组件
- ✅ 创建了 `app/config/ads.ts` 配置文件
- ✅ 支持多种广告格式和位置

## 广告位配置

### 当前广告位
1. **头部横幅广告** (Header Banner)
   - 位置：页面顶部
   - 格式：横幅
   - 广告位ID：`1234567890`

2. **内容中广告** (In-Content)
   - 位置：主要内容区域
   - 格式：自动
   - 广告位ID：`1234567892`

3. **底部横幅广告** (Footer Banner)
   - 位置：页面底部
   - 格式：横幅
   - 广告位ID：`1234567893`

4. **侧边栏广告** (Sidebar)
   - 位置：侧边栏
   - 格式：矩形
   - 广告位ID：`1234567891`

5. **网格内联广告** (Grid Inline)
   - 位置：图片网格中
   - 格式：矩形
   - 广告位ID：`1234567894`

## 页面集成

### 已集成的页面
- ✅ 首页 (`app/page.tsx`)
- ✅ 分类页面 (`app/category/[dir]/page.tsx`)
- ✅ 收藏页面 (`app/favorites/page.tsx`)

### 广告位置
每个页面都包含：
- 头部横幅广告
- 内容中广告
- 底部横幅广告

## 下一步操作

### 1. 获取真实广告位ID
当前使用的是示例广告位ID，需要替换为真实的：

1. 登录 [Google AdSense](https://www.google.com/adsense)
2. 创建新的广告单元
3. 获取广告位ID
4. 更新 `app/config/ads.ts` 中的 `AD_SLOTS`

### 2. 更新广告位ID
```typescript
// app/config/ads.ts
export const AD_SLOTS = {
  HEADER_BANNER: '你的真实广告位ID',
  IN_CONTENT_AUTO: '你的真实广告位ID',
  FOOTER_BANNER: '你的真实广告位ID',
  // ... 其他广告位
}
```

### 3. 验证设置
1. 部署网站到生产环境
2. 确保 `ads.txt` 文件可通过 `https://yourdomain.com/ads.txt` 访问
3. 在AdSense后台验证网站
4. 等待Google审核通过

## 广告组件使用

### 基本用法
```tsx
import { HeaderAd, InContentAd, FooterAd } from './components/AdSense'

// 在页面中使用
<HeaderAd />
<InContentAd />
<FooterAd />
```

### 自定义广告
```tsx
import AdSense from './components/AdSense'

<AdSense 
  adSlot="你的广告位ID"
  adFormat="banner"
  className="custom-class"
/>
```

## 注意事项

### 1. 广告政策遵守
- 确保广告内容符合Google AdSense政策
- 不要过度放置广告影响用户体验
- 遵循Google的广告密度指南

### 2. 性能优化
- 广告加载不会阻塞页面渲染
- 使用异步加载避免影响页面性能
- 响应式设计适配各种设备

### 3. 测试
- 在开发环境中测试广告组件
- 确保广告在不同设备上正常显示
- 验证广告点击和展示统计

## 故障排除

### 常见问题
1. **广告不显示**
   - 检查广告位ID是否正确
   - 确认AdSense账户已激活
   - 验证网站是否通过Google审核

2. **ads.txt 错误**
   - 确保文件在根目录
   - 检查文件内容格式
   - 验证域名匹配

3. **响应式问题**
   - 检查CSS样式设置
   - 验证广告容器尺寸
   - 测试不同屏幕尺寸

## 联系支持

如有问题，请参考：
- [Google AdSense 帮助中心](https://support.google.com/adsense)
- [AdSense 政策中心](https://support.google.com/adsense/answer/48182)
