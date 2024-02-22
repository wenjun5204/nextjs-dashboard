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
  const {
    numberOfCustomers,
    numberOfBlogs,
  } = await getTagsData();
  //   console.log(user);
  return (
    // 为下列div元素添加圆角和阴影
    <div className="w-full mt-2 flex h-auto flex-col justify-center rounded-xl bg-hide p-6 shadow-sm">
      <div className="relative flex flex-col items-center justify-around">
        <Link
          href="/login"
          className=" h-1/3 w-1/3"
        >
          <Avatar className='w-full h-full hover:animate-spin'>
            <AvatarImage
              src="/assets/dragon.png"
              alt="@regan"
            />
            <AvatarFallback>regan</AvatarFallback>
          </Avatar>
        </Link>

        <span className="text-lg leading-loose">伊人一笑倾城醉</span>
        <a href="mailto:reganlwj@gmail.com" target="_blank">
          {'reganlwj@gmail.com'}
        </a>
      </div>

      <div className="flex items-center justify-around">
        <Card>
          <CardHeader>
            <CardTitle>文章</CardTitle>
            <CardDescription>{numberOfBlogs}</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>用户</CardTitle>
            <CardDescription>{numberOfCustomers}</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>标签</CardTitle>
            <CardDescription>20</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default PersonCard;
