import { NextResponse } from 'next/server';
// export function POST(req: any, res: any) {
//   if (req.method === 'GET') {
//     // 处理 GET 请求
//     NextResponse.json({ name: 'John Doe' });
//   } else if (req.method === 'POST') {
//     // 处理 POST 请求
//     // 你可以通过 req.body 获取请求体数据
//     NextResponse.json({ message: 'User created' });
//   } else {
//     // 处理其他 HTTP 方法或返回 405 方法不被允许
//     NextResponse.json({ code: 405, message: 'User created' })
//   }
// }

export const GET = async (req: Request) => {
  const urlNews =
    'https://user.guancha.cn/news-api/fengwen-index-list.json?page=1&order=6';
  const response = await await fetch(urlNews);
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
