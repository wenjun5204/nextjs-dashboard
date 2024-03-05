// import PersonCard from '@/app/blog/components/person-card';
import Link from 'next/link';
import BlogNav from './blog-nav';

export default function HomeSide() {

  return (
    <div className="sticky top-10 w-80 ">
      {/* <PersonCard /> */}
      <div className="mt-10 hidden md:flex">
        <BlogNav />
      </div>
      <div className="mt-10">
        <Link href="/" className="text-blue-500 hover:underline">
          返回首页
        </Link>
      </div>
    </div>
  );
}
