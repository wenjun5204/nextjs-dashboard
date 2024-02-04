'use client'
import MarkdownPreview from '@uiw/react-markdown-preview';

const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

export default function Demo() {
  return <MarkdownPreview source={source} />;
}
