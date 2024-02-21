'use client';
import MarkdownPreview from '@uiw/react-markdown-preview';
const sourceDef = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

export default function BlogShow({ blog }: { blog: any }) {
  const source = blog?.content || sourceDef;
  return (
    <div>
      <MarkdownPreview source={source} />
    </div>
  );
}
