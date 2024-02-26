import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const urlNews =
    'https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token=M8Au2tRQxuXtgdTjRJOODweL9amHhNnu';
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
