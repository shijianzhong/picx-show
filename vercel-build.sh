#!/bin/bash

echo "🚀 Vercel 专用构建脚本"
echo "======================"

# 清理之前的构建
echo "🧹 清理之前的构建..."
rm -rf .next
rm -rf out
rm -rf node_modules/.cache

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建结果
if [ $? -eq 0 ]; then
    echo "✅ 构建成功！"
    echo ""
    echo "📋 构建产物检查："
    
    # 检查关键文件
    if [ -f ".next/server/app-paths-manifest.json" ]; then
        echo "✅ app-paths-manifest.json 存在"
        echo "   路由数量: $(jq 'length' .next/server/app-paths-manifest.json)"
    else
        echo "❌ app-paths-manifest.json 不存在"
    fi
    
    if [ -d ".next/static" ]; then
        echo "✅ static 目录存在"
        echo "   静态文件数量: $(find .next/static -type f | wc -l)"
    else
        echo "❌ static 目录不存在"
    fi
    
    if [ -d ".next/server/app" ]; then
        echo "✅ server/app 目录存在"
        echo "   服务器文件数量: $(find .next/server/app -type f | wc -l)"
    else
        echo "❌ server/app 目录不存在"
    fi
    
    echo ""
    echo "📊 构建统计："
    echo "   总文件数: $(find .next -type f | wc -l)"
    echo "   总大小: $(du -sh .next | cut -f1)"
    
    echo ""
    echo "🚀 部署步骤："
    echo "1. 提交代码: git add . && git commit -m 'Fix Vercel build output' && git push"
    echo "2. 在Vercel控制台重新部署"
    echo "3. 检查Vercel构建日志中的Resources部分"
    
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi
