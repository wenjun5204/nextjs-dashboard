'use client';
import React from 'react';
import MarkdownNavbar from 'markdown-navbar';
export default function BlogNav({ content }: any) {
  return (
    <div>
      <div className=' text-lg text-main'>目录</div>
      <MarkdownNavbar source={content} />
    </div>
  );
}
