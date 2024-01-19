/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-03 16:16:05
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import SideNav from './components/side-nav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-80">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}