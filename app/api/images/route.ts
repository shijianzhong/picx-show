import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const API_BASE_URL = "https://picx.ink-home.cn/api/manage/list";
const API_TOKEN = "imgbed_n5M4iqcwnaQUBQe5Dh8dZwxWBDq0ZESN";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const dir = searchParams.get("dir") || "facebook";
    const start = searchParams.get("start") || "0";
    const count = searchParams.get("count") || "20";

    const response = await axios.post(
      `${API_BASE_URL}?dir=${dir}&start=${start}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        timeout: 10000,
      }
    );

    // 处理返回的数据
    const data = response.data;
    const images = data.files || [];

    // 为每张图片添加SEO友好的信息
    const processedImages = images.map((image: any, index: number) => {
      const metadata = image.metadata || {};
      const filename = metadata.FileName || image.name || `image_${index}`;
      const fileSize = metadata.FileSize || "0";
      const timeStamp = metadata.TimeStamp || Date.now();
      const originalUrl = `https://picx.ink-home.cn/file/${image.name}`;
      const proxyUrl = `/api/proxy-image?url=${encodeURIComponent(
        originalUrl
      )}`;

      return {
        id: `${dir}_${start}_${index}`,
        url: proxyUrl,
        originalUrl: originalUrl, // 保留原始URL以备需要
        filename: filename,
        size: parseFloat(fileSize) * 1024 * 1024, // 转换为字节
        uploadTime: new Date(timeStamp).toISOString(),
        alt: `美图欣赏 - ${filename}`,
        title: `精选美图 - ${filename}`,
        description: `欣赏高质量美图，${filename}`,
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        images: processedImages,
        total: data.totalCount || images.length,
        hasMore: images.length >= parseInt(count),
        pagination: {
          start: parseInt(start),
          count: parseInt(count),
          nextStart: parseInt(start) + images.length,
        },
      },
    });
  } catch (error: any) {
    console.error("API Error:", error.message);

    return NextResponse.json(
      {
        success: false,
        error: "获取图片数据失败",
        message: error.message,
      },
      { status: 500 }
    );
  }
}

// 获取特定目录的图片列表
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { dir = "facebook", start = 0, count = 20 } = body;

    const response = await axios.post(
      `${API_BASE_URL}?dir=${dir}&start=${start}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        timeout: 10000,
      }
    );

    const data = response.data;
    const images = data.files || [];

    const processedImages = images.map((image: any, index: number) => {
      const metadata = image.metadata || {};
      const filename = metadata.FileName || image.name || `image_${index}`;
      const fileSize = metadata.FileSize || "0";
      const timeStamp = metadata.TimeStamp || Date.now();
      const originalUrl = `https://picx.ink-home.cn/file/${image.name}`;
      const proxyUrl = `/api/proxy-image?url=${encodeURIComponent(
        originalUrl
      )}`;

      return {
        id: `${dir}_${start}_${index}`,
        url: proxyUrl,
        originalUrl: originalUrl, // 保留原始URL以备需要
        filename: filename,
        size: parseFloat(fileSize) * 1024 * 1024, // 转换为字节
        uploadTime: new Date(timeStamp).toISOString(),
        alt: `美图欣赏 - ${filename}`,
        title: `精选美图 - ${filename}`,
        description: `欣赏高质量美图，${filename}`,
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        images: processedImages,
        total: data.totalCount || images.length,
        hasMore: images.length >= count,
        pagination: {
          start: parseInt(start),
          count: parseInt(count),
          nextStart: parseInt(start) + images.length,
        },
      },
    });
  } catch (error: any) {
    console.error("API Error:", error.message);

    return NextResponse.json(
      {
        success: false,
        error: "获取图片数据失败",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
