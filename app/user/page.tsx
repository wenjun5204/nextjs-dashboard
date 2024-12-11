/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-09 19:55:17
 * @LastEditors: liuwenjun05
 * @Description: file content
 */

// import { signOut } from '@/auth';
import Link from 'next/link';
import DropMenu from './compoments/drop-menu';

export default function page() {
  return (
    <div>
      <div className="flex h-20 w-full items-center justify-between">
        用户权限页面
        <DropMenu />
      </div>

      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/dashboard"
      >
        <div className="w-32 text-white md:w-40">返回首页</div>
      </Link>
      <form
        action={async () => {
          'use server';
          // await signOut();
        }}
      >
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">退出登陆</div>
        </button>
      </form>
    </div>
  );
}
