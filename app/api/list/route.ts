import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  // var myHeaders = new Headers();
  // myHeaders.append('Pragma', 'no-cache');
  // myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://www.apifox.cn)');
  // myHeaders.append('Accept', '*/*');
  // myHeaders.append('Host', 'user.guancha.cn');
  // myHeaders.append('Connection', 'keep-alive');

  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow',
  // };
  const urlNews =
    'https://apis.tianapi.com/bulletin/index?key=ac8ca45d1f2d90f82eedc80982fde095';
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
    data: data?.result?.list|| [],
  });
};
