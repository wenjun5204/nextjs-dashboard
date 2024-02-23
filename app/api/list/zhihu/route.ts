import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const urlNews =
    ' https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=20&desktop=true';
  const response = await fetch(urlNews);
  if (!response.ok) {
    throw new Error(`请求错误，错误码! status: ${response.status}`);
  }
  const data = await response.json();
  // console.log(666, data);
  return NextResponse.json({
    success: true,
    errorMessage: 'success',
    data: data || [],
  });
};
