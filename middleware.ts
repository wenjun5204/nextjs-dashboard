/*
 * @Author: regan regan@douyu.tv
 * @Date: 2024-01-05 22:26:25
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest, NextResponse } from 'next/server';

export default NextAuth(authConfig).auth;

 
// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   // return NextResponse.redirect(new URL('/home', request.url))
//   let cookie = request.cookies.get('nextjs')
//   // console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
//   const allCookies = request.cookies.getAll()
//   // console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
 
//   // request.cookies.has('nextjs') // => true
//   // request.cookies.delete('nextjs')
//   // request.cookies.has('nextjs') // => false
 
//   // Setting cookies on the response using the `ResponseCookies` API
//   const response = NextResponse.next()
//   // response.cookies.set('vercel', 'fast')
//   // response.cookies.set({
//   //   name: 'vercel',
//   //   value: 'fast',
//   //   path: '/',
//   // })
//   cookie = response.cookies.get('vercel')
//   console.log(777, request.nextUrl, request.url)
//   console.log(666,response) // => { name: 'vercel', value: 'fast', Path: '/' }
//   // The outgoing response will have a `Set-Cookie:vercel=fast;path=/` header.
 
//   return response
// }

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    '/((?!api|blog|\/|_next/static|_next/image|.*\\.png$).*)',
    // '/user'
  ],
  // missing: [
  //   { type: 'header', key: 'next-router-prefetch' },
  //   { type: 'header', key: 'purpose', value: 'prefetch' },
  // ],
};
