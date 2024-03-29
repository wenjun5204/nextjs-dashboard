import AcmeLogo from '@/app/home/components/acme-logo';
import PersonCard from './home/components/person-card';
import WeatherCard from './home/weather-card';
import MyCalendar from './home/theme-calender';
import BlogList from './home/blog-list';
import VercelNews from './home/components/vercel-new';
import OneSense from './home/components/one-sense';
import RowCarsel from './home/components/row-carousel';
import LatestComment from './home/latest-comment';

export default function Page() {
  return (
    <main className="m-auto flex max-w-7xl flex-col items-center p-6 ">
      <AcmeLogo />
      <section className="relative flex w-full flex-col justify-between gap-10 pt-5 md:flex-row">
        <main className="flex flex-wrap justify-center">
          <RowCarsel />
          <VercelNews />
        </main>
        <aside className="w-full flex-shrink-0 md:w-1/4">
          <PersonCard />
        </aside>
      </section>
      <section className="relative mt-5 flex w-full flex-col gap-10 md:flex-row">
        <main className=" flex-shrink flex-grow-0 ">
          <BlogList />
          <div className="mt-10 flex h-auto w-full flex-col items-center justify-center">
            <div className=" mt-1 text-xs">图形正则表达式1</div>
            <iframe
              className=" h-[600px] w-full"
              src="https://jex.im/regulex/"
            ></iframe>
          </div>
        </main>
        <aside className="w-full flex-shrink-0 md:w-1/4">
          <WeatherCard />
          <MyCalendar />
          <OneSense />
          <LatestComment />
        </aside>
      </section>
    </main>
  );
}
