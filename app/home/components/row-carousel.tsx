import CarouselBlog from './blog-carousel';

export default async function RowCarsel() {
  const handleFetch = async () => {
    try {
      const ss = await fetch(
        `${process.env.AUTH_URL}`+'/api/list/zhihu',
      ).then((res) => res.json());
      // console.log(666, ss);
      return ss;
      
    } catch (error) {
      console.log(error);
      return { data: [] };
    }
  };
  // const ss = await fetch(
  //   'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=20&desktop=true',
  // ).then((res) => res.json());

  
  const { data } = (await handleFetch()) || {};
  return <CarouselBlog zhihu={data} />;
}
