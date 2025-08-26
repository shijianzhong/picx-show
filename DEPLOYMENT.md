# Vercel 部署指南

## 问题诊断

你的项目在Vercel上出现404错误，主要原因是缺少必要的静态文件。

## 解决方案

### 1. 添加静态文件

确保以下文件存在于 `public` 目录中：
- `favicon.ico` - 网站图标
- `og-image.jpg` - Open Graph 图片
- `apple-touch-icon.png` - Apple设备图标

### 2. 部署步骤

1. **提交代码到Git仓库**
   ```bash
   git add .
   git commit -m "Fix deployment issues"
   git push
   ```

2. **在Vercel中重新部署**
   - 登录Vercel控制台
   - 找到你的项目
   - 点击"Redeploy"或等待自动部署

3. **测试部署**
   - 访问主域名：`https://your-domain.vercel.app`
   - 访问测试页面：`https://your-domain.vercel.app/test`
   - 测试API端点：`https://your-domain.vercel.app/api/images`

### 3. 验证清单

- [ ] 构建成功（无错误）
- [ ] 静态文件存在
- [ ] API路由正常工作
- [ ] 页面可以正常访问
- [ ] 图片代理功能正常

### 4. 常见问题

#### 404错误
- 检查静态文件是否存在
- 确认路由配置正确
- 验证API端点路径

#### 构建失败
- 检查依赖项是否正确安装
- 确认Node.js版本兼容
- 查看构建日志中的具体错误

#### API错误
- 检查环境变量配置
- 确认API密钥有效
- 验证CORS设置

### 5. 环境变量

如果需要，在Vercel中设置以下环境变量：
- `NODE_ENV=production`
- 任何API密钥或配置

### 6. 性能优化

- 启用图片优化
- 配置CDN缓存
- 优化API响应时间

## 联系支持

如果问题仍然存在，请：
1. 检查Vercel部署日志
2. 查看浏览器控制台错误
3. 测试本地开发环境
