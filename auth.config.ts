import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/user');
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   // console.log(666, (new URL('/user', nextUrl).toString()))
      //   return Response.redirect(`${process.env.AUTH_URL}/user`);
      // }
      if (isOnDashboard && !isLoggedIn) {
        return Response.redirect(`${process.env.AUTH_URL}/login`);
      }else if(isOnLogin && isLoggedIn){
        return Response.redirect(`${process.env.AUTH_URL}/blog`);
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;