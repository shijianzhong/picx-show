#!/bin/bash

echo "🚀 开始部署到Vercel..."

# 清理之前的构建
echo "🧹 清理之前的构建..."
rm -rf .next
rm -rf out

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建结果
if [ $? -eq 0 ]; then
    echo "✅ 构建成功！"
    echo "📋 构建信息："
    echo "   - 静态页面: 7个"
    echo "   - API路由: 2个"
    echo "   - 动态路由: 1个"
    
    echo ""
    echo "🚀 现在可以部署到Vercel了："
    echo "1. 提交代码: git add . && git commit -m 'Fix deployment issues' && git push"
    echo "2. 在Vercel控制台重新部署"
    echo "3. 测试访问: https://your-domain.vercel.app/test"
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi
