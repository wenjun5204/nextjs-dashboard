import React from 'react';
import Image from 'next/image';
import { fetchBlogList } from '../lib/data';
import { getDateDiff, isoStringToTimestamp } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';

export default async function BlogList() {
  const Blogs = (await fetchBlogList()) || [];
  // console.log(Blogs);
  return (
    <div className=" relative grid grid-cols-2 gap-5 md:grid-cols-3">
      {Blogs.map((it) => {
        const {
          id,
          title,
          content,
          publish_date,
          blog_img,
          views,
          likes,
          tags,
          author,
        } = it || {};
        return (
          <div
            className="flex w-full flex-col items-center rounded-lg px-2 shadow-lg"
            key={it.id}
          >
            <div className="transform object-cover duration-300  hover:scale-110">
              <Link
                href={`/home/${id}/detail`}
              >
                <Image
                  src={
                    blog_img ||
                    'https://btf08gvibdziv1ae.public.blob.vercel-storage.com/image/beauty.png'
                  }
                  alt={title}
                  width={200}
                  height={100}
                  className="rounded-lg"
                />
              </Link>

              <div className="absolute bottom-0 left-0 h-5 w-full rounded-b-lg bg-black bg-opacity-50 text-center text-xs text-white">
                {getDateDiff(isoStringToTimestamp(publish_date))}
              </div>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <h1 className="line-clamp-1 text-ellipsis break-all text-lg font-semibold">
                    {title}
                  </h1>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{title}23</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <p>{tags}</p>
            <div className="flex items-center py-5">
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
