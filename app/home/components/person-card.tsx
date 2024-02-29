/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-18 17:50:09
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import React from 'react';
// import { auth } from '@/auth';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getTagsData } from '@/app/lib/data';
import Link from 'next/link';

const PersonCard = async () => {
  const { numberOfCustomers, numberOfBlogs, numberOfComments } =
    await getTagsData();
  const arr = [numberOfBlogs, numberOfComments, numberOfCustomers];
  // console.log(numberOfComments);
  return (
    // 为下列div元素添加圆角和阴影
    <div className="mt-2 flex h-auto w-full flex-col justify-center rounded-xl bg-gradient-to-r from-base-g-start to-base-g-end p-6 shadow">
      <div className="relative flex flex-col items-center justify-around">
        <Link href="/login" className=" h-1/3 w-1/3">
          <Avatar className="h-full w-full hover:animate-spin">
            <AvatarImage src="/avator.png" alt="@regan" />
            <AvatarFallback>regan</AvatarFallback>
          </Avatar>
        </Link>

        <span className="text-lg leading-loose">伊人一笑倾城醉</span>
        <a href="mailto:reganlwj@gmail.com" target="_blank">
          {'reganlwj@gmail.com'}
        </a>
      </div>

      <div className="flex items-center justify-around">
        <Card className="w-full py-6">
          <CardContent className="flex w-full items-center gap-2 pb-0">
            {Array.from(['文章', '用户', '评论']).map((it, ind) => (
              <div className=" w-1/3" key={ind}>
                <div>{it}</div>
                <div className=" font-bold text-highlight">{arr[ind]}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonCard;
