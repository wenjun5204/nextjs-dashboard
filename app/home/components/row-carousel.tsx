import CarouselBlog from './blog-carousel';

export default async function RowCarsel() {
  const handleFetch = async () => {
    try {
      const ss = await fetch(
        'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=20&desktop=true',
      ).then((res) => res.json());
      return ss;
    } catch (error) {
      console.log(error);
      return { data: [] };
    }
  };
  // const ss = await fetch(
  //   'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=20&desktop=true',
  // ).then((res) => res.json());

  // console.log(666, ss);
  const { data } = (await handleFetch()) || {};
  return <CarouselBlog zhihu={data} />;
}
