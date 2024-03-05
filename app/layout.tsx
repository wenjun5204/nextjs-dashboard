
import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  
  title: {
    template: '%s | 刘文俊的网页',
    default: '刘文俊的网页',
  },
  description: '刘文俊的个人博客，记录日常，前端只是分享',
  metadataBase: new URL('https://liuwenjun.fun'),
};
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-jianbian antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='relative h-screen overflow-auto'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
