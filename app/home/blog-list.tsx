import React from 'react';
import Image from 'next/image';
import { fetchBlogList } from '../lib/data';
import { StarIcon, HeartIcon, BookmarkIcon } from '@radix-ui/react-icons';
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
            className="flex w-full flex-col items-center rounded-lg p-3 shadow-lg"
            key={it.id}
          >
            <div className="transform object-cover duration-300  hover:scale-110">
              <Link href={`/home/${id}/detail`}>
                <Image
                  src={blog_img || '/assets/girl0.png'}
                  alt={title}
                  width={200}
                  height={200}
                  className="aspect-video w-full rounded-lg"
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
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="flex w-full items-center gap-2 py-3 text-main">
              <span className="flex items-center gap-1">
                <StarIcon /> {views}
              </span>
              <span className="flex items-center gap-1">
                <HeartIcon />
                {likes}
              </span>
              <span className="flex items-center gap-1">
                <BookmarkIcon />
                {tags}
              </span>
            </div>
            <div className="w-full">
              {author}
              <span className='ml-4 text-highlight'>#{tags}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
