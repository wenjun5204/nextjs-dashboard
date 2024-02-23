'use client';
import React, { useContext } from 'react';
import MarkdownNavbar from 'markdown-navbar';
import { ThemeContext } from '@/components/theme/wraper-provider';
export default function BlogNav() {
  const value = useContext(ThemeContext);
  return (
    <div>
      <div className=" text-lg text-main">目录</div>
      <MarkdownNavbar source={value?.content} />
    </div>
  );
}
