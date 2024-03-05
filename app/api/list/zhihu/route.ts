import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    const urlNews =
      'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=20&desktop=true';
    const response = await fetch(urlNews, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error(`请求错误，错误码! status: ${response.status}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      success: false,
      errorMessage: error,
      data: [],
    });
  }
};
