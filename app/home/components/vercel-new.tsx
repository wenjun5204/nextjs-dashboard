import request from '@/lib/request';
import CarouselVercelBlog from './blog-vercel';

export default async function VercelNews() {
  const BASE_URL = process.env.AUTH_URL;
  const res = await request.get(BASE_URL + '/api/list', {});
  // console.log(66, res);
  const { data } = res || {};

  // const data: any = [{ city: 123 }];
  return <CarouselVercelBlog news={data || []} />;
}
