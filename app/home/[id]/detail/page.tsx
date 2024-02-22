import { fetchBlogById } from '@/app/lib/data';
import BlogShow from '@/app/home/blog-show';
import BlogNav from '../../components/blog-nav';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const blog = await fetchBlogById(id);
  return (
    <BlogShow blog={blog}/>
  );
}
