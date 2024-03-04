'use client';
import { useEffect, useState } from 'react';
import CarouselVercelBlog from './blog-vercel';

export default function VercelNews() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // console.log(777, process.env.AUTH_URL);
        const res = await fetch('/api/list').then((ss) => ss.json());
        
        const { data } = res || {};
        setData(data || []);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // const data: any = [{ city: 123 }];
  return (
    <div className=" max-w-lg">
      <CarouselVercelBlog news={data || []} />
    </div>
  );
}
