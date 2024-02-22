import request from '@/lib/request';
import CarouselVercelBlog from './blog-vercel';

export default async function VercelNews() {
  const res = await request.get('/api/list', {});
//   console.log(66, res);
  const { data } = res || {};
  return <CarouselVercelBlog news={data || []} />;
}
