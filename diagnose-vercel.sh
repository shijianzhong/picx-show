#!/bin/bash

echo "🔍 Vercel 部署诊断脚本"
echo "======================"

# 检查Git状态
echo "📋 检查Git状态..."
git status
echo ""

# 检查最近的提交
echo "📝 最近的提交记录..."
git log --oneline -3
echo ""

# 检查远程仓库
echo "🌐 检查远程仓库..."
git remote -v
echo ""

# 检查构建状态
echo "🔨 检查本地构建..."
if npm run build > /dev/null 2>&1; then
    echo "✅ 本地构建成功"
else
    echo "❌ 本地构建失败"
fi
echo ""

# 检查关键文件
echo "📁 检查关键文件..."
if [ -f ".next/server/app-paths-manifest.json" ]; then
    echo "✅ app-paths-manifest.json 存在"
    echo "   内容预览："
    head -3 .next/server/app-paths-manifest.json
else
    echo "❌ app-paths-manifest.json 不存在"
fi
echo ""

# 检查Vercel配置
echo "⚙️ 检查Vercel配置..."
if [ -f "vercel.json" ]; then
    echo "✅ vercel.json 存在"
    cat vercel.json
else
    echo "❌ vercel.json 不存在"
fi
echo ""

# 检查package.json
echo "📦 检查package.json..."
if [ -f "package.json" ]; then
    echo "✅ package.json 存在"
    echo "   脚本："
    grep -A 5 '"scripts"' package.json
else
    echo "❌ package.json 不存在"
fi
echo ""

echo "🚀 下一步操作建议："
echo "1. 登录Vercel控制台检查项目状态"
echo "2. 查看构建日志是否有错误"
echo "3. 确认项目设置中的框架为Next.js"
echo "4. 检查环境变量配置"
echo "5. 尝试重新部署项目"
echo ""
echo "💡 如果Vercel显示构建成功但网站无法访问，可能是："
echo "   - DNS配置问题"
echo "   - 域名重定向问题"
echo "   - Vercel服务问题"
echo "   - 需要清除缓存重新部署"
