import { NextResponse } from 'next/server';

export function handler(req: any, res: any) {
  if (req.method === 'GET') {
    // 处理 GET 请求
    res.status(200).json({ name: 'John Doe' });
  } else if (req.method === 'POST') {
    // 处理 POST 请求
    // 你可以通过 req.body 获取请求体数据
    res.status(200).json({ message: 'User created' });
  } else {
    // 处理其他 HTTP 方法或返回 405 方法不被允许
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export const GET = (req: Request) => {
//   console.log(666, req);
  return NextResponse.json({
    success: true,
    errorMessage: 'success',
    name: 'John Doe',
  });
};
