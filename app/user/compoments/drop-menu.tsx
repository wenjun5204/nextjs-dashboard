/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-16 19:35:53
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import { SectionIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function DropMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <SectionIcon className="h-20 w-20" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>我的主页</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/user/settings">个人设置</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href="/blog">博客页面</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href="/dashboard">数据面板</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>个人介绍</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
