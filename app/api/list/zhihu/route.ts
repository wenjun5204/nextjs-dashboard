import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const urlNews =
    'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=20&desktop=true';
  const response = await fetch(urlNews);
  if (!response.ok) {
    return NextResponse.json({
      status: 'error',
      errorMessage: '接口错误，请检查',
      code: 500,
    });
  }
  const data = await response.json();
  // console.log(666, data);
  return NextResponse.json(data);
};
