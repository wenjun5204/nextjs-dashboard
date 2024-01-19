/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-18 17:50:09
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import React from 'react';
import { auth } from '@/auth';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getTagsData } from '@/app/lib/data';

export default async function PersonCard() {
  const { user } = (await auth()) as any;
  const { name, email } = user || {};
  const {
    numberOfCustomers,
    numberOfBlogs,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await getTagsData();
  //   console.log(user);
  return (
    // 为下列div元素添加圆角和阴影
    <div className="mt-10 py-10 flex h-auto md:w-75 flex-col justify-center rounded-xl bg-gray-50 shadow-sm">
      <div className="flex flex-col items-center justify-around">
        <Image
          src="https://s11.ax1x.com/2024/01/18/pFANFzD.png"
          alt="作者头像"
          width={100}
          height={100}
        />
        {/* <Image
          width={560}
          height={602}
          className="block md:hidden"
          src={'https://s11.ax1x.com/2024/01/18/pFANFzD.png'}
          alt="个人头像"
        /> */}
        <span className=" text-lg">{name}</span>
        <div>{email}</div>
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
}
