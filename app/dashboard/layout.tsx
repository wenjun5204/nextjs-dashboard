/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-03 16:16:05
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-auto flex-col md:flex-row md:overflow-hidden">
      {/* <div className="w-full h-screen flex-none md:w-64">
        
      </div> */}
      <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}