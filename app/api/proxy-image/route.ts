import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const imageUrl = searchParams.get('url')
    
    if (!imageUrl) {
      return NextResponse.json(
        { error: '缺少图片URL参数' },
        { status: 400 }
      )
    }

    // 验证URL是否来自允许的域名
    const allowedDomains = ['picx.ink-home.cn']
    const urlObj = new URL(imageUrl)
    if (!allowedDomains.includes(urlObj.hostname)) {
      return NextResponse.json(
        { error: '不允许的图片域名' },
        { status: 403 }
      )
    }

    // 获取图片
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://picx.ink-home.cn/',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache',
      },
      cache: 'force-cache',
    })

    if (!response.ok) {
      console.error(`Failed to fetch image: ${response.status} ${response.statusText}`)
      return NextResponse.json(
        { error: `获取图片失败: ${response.status}` },
        { status: response.status }
      )
    }

    const imageBuffer = await response.arrayBuffer()
    const contentType = response.headers.get('content-type') || 'image/jpeg'

    // 返回图片数据
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=86400', // 缓存24小时
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })

  } catch (error: any) {
    console.error('Proxy image error:', error.message)
    return NextResponse.json(
      { error: '代理图片请求失败' },
      { status: 500 }
    )
  }
}