'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function BlogSearch() {
    const searchParams: any = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = useDebouncedCallback((term: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      // console.log(params);
      replace(`${pathname}?${params.toString()}`);
    }, 300);
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="输入关键词进行搜索" onChange={(e) => {
          handleSearch(e.target.value);
        }}/>
      {/* <Button type="submit">点击查询</Button> */}
    </div>
  );
}
