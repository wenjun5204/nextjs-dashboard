import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const urlNews =
    // 'https://apis.tianapi.com/bulletin/index?key=ac8ca45d1f2d90f82eedc80982fde095';
    ' https://user.guancha.cn/news-api/fengwen-index-list.json?page=1&order=6';
  const response = await fetch(urlNews);
  // console.log(666, response);
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
