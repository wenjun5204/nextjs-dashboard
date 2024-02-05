/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2023-11-29 20:44:04
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/ui/home.module.css';
import PersonCard from './home/person-card';
import WeatherCard from './home/weather-card';
import MyCalendar from './home/theme-calender';
import BlogList from './home/blog-list';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 ">
      <AcmeLogo />

      <section className="relative flex w-full flex-col  gap-5 md:flex-row">
        <div className="flex-1  bg-red-300 "></div>
        <div className="flex-1  bg-red-300 "></div>
        <div className="flex-1">
          <PersonCard />
        </div>
      </section>
      <div className="relative mt-5 flex w-full flex-col gap-10 md:flex-row">
        <main className=" flex-shrink flex-grow-[2]">
          <BlogList />
          <div className="flex h-auto w-full flex-col items-center mt-10 justify-center">
            <div className=" mt-1 text-xs">图形正则表达式1</div>
            <iframe
              className=" h-[500px] w-full"
              src="https://www.toolscat.com/dev/regex-img#!flags=&re=ss"
            ></iframe>
          </div>
        </main>
        <aside className="w-full md:w-1/3">
          <WeatherCard />
          <MyCalendar />
        </aside>
      </div>
    </main>
  );
}
