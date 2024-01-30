import React from 'react';
import { fetchBlogList } from '../lib/data';

export default async function BlogList() {
  const Blogs = (await fetchBlogList()) || [];
  // console.log(Blogs);
  return (
    <div className="flex w-full">
      {Blogs.map((it) => {
        const { title, content, views, likes, tags, author } = it || {};
        return (
          <div className="w-1/3 p-4 shadow-lg" key={it.id}>
            <h1 className='text-ellipsis break-all line-clamp-1 font-semibold text-lg'>{title}</h1>
            <p>{tags}</p>
            <div className='flex items-center py-5'>
              <div>{views}</div>
              <div>{likes}</div>
              <div>{tags}</div>
            </div>
            <div>{author}</div>
          </div>
        );
      })}
    </div>
  );
}
