
import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import { ThemeProvider } from '@/components/theme/theme-provider';

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
          <div className='m-auto  max-w-7xl overflow-auto'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
