
import CarouselVercelBlog from './blog-vercel';

export default async function VercelNews() {
  const BASE_URL = process.env.AUTH_URL;
  const res = await fetch(BASE_URL + '/api/list').then((ss) => ss.json());
  console.log(66, BASE_URL);
  const { data } = res || {};

  // const data: any = [{ city: 123 }];
  return <CarouselVercelBlog news={data || []} />;
}
