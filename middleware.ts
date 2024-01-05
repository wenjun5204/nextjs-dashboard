/*
 * @Author: regan regan@douyu.tv
 * @Date: 2024-01-05 22:26:25
 * @LastEditors: regan
 * @Description: file content
 */
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};