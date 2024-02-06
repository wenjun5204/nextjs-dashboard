import AcmeLogo from '@/app/home/components/acme-logo';
import PersonCard from './home/components/person-card';
import WeatherCard from './home/weather-card';
import MyCalendar from './home/theme-calender';
import BlogList from './home/blog-list';
import CarouselBlog from './home/components/blog-carousel';
import CarouselVercelBlog from './home/components/blog-vercel';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 ">
      <AcmeLogo />
      <section className="relative flex w-full flex-col gap-4  pt-5 md:flex-row">
        <div className="flex-1">
          <CarouselBlog />
        </div>
        <div className="flex-1">
          <CarouselVercelBlog />
        </div>
        <div className="flex-1">
          <PersonCard />
        </div>
      </section>
      <div className="relative mt-5 flex w-full flex-col gap-10 md:flex-row">
        <main className=" flex-shrink flex-grow-[2]">
          <BlogList />
          <div className="mt-10 flex h-auto w-full flex-col items-center justify-center">
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
