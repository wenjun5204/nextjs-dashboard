import CarouselBlog from './blog-carousel';

export default async function RowCarsel() {
  const ss = await fetch(
    'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=20&desktop=true',
  ).then((res) => res.json());

  // console.log(666, ss);
  const { data } = ss || {};
  return <CarouselBlog zhihu={data} />;
}
