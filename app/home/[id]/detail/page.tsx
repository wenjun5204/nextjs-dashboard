import { fetchBlogById } from '@/app/lib/data';
import BlogShow from '@/app/home/blog-show';
import { Metadata, ResolvingMetadata } from 'next';

// export const metadata: Metadata = {
//   title: '前端技术',
// };

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;
  const blog = await fetchBlogById(id);

  // console.log(666, parent)
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog?.title || '',
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  };
}

export default function Page() {
  return <BlogShow />;
}
