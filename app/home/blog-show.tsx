'use client';
import MarkdownPreview from '@uiw/react-markdown-preview';

import { useContext } from 'react';
import { ThemeContext } from '@/components/theme/wraper-provider';
const sourceDef = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

export default function BlogShow() {
  const value = useContext(ThemeContext);
  const source = value?.content || sourceDef;
  return <MarkdownPreview className="w-full" source={source} />;
}
