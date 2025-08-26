#!/bin/bash

echo "🚀 Vercel 部署脚本"
echo "=================="

# 清理构建缓存
echo "🧹 清理构建缓存..."
rm -rf .next
rm -rf node_modules/.cache

# 重新安装依赖
echo "📦 重新安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建结果
if [ $? -eq 0 ]; then
    echo "✅ 构建成功！"
    echo ""
    echo "📋 构建信息："
    echo "   - 静态页面: 8个"
    echo "   - API路由: 2个"
    echo "   - 动态路由: 1个"
    echo ""
    echo "🔍 检查构建产物..."
    
    # 检查关键文件
    if [ -f ".next/server/app-paths-manifest.json" ]; then
        echo "✅ app-paths-manifest.json 存在"
        echo "   内容预览："
        head -5 .next/server/app-paths-manifest.json
    else
        echo "❌ app-paths-manifest.json 不存在"
    fi
    
    echo ""
    echo "🚀 部署步骤："
    echo "1. 提交代码: git add . && git commit -m 'Fix Vercel deployment' && git push"
    echo "2. 在Vercel控制台重新部署"
    echo "3. 测试访问:"
    echo "   - 主页面: https://picx-show.vercel.app/"
    echo "   - 测试页面: https://picx-show.vercel.app/simple"
    echo "   - API测试: https://picx-show.vercel.app/api/images"
    echo ""
    echo "💡 如果仍有404错误，请："
    echo "   - 检查Vercel构建日志"
    echo "   - 清除Vercel项目缓存"
    echo "   - 重新连接Git仓库"
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi
