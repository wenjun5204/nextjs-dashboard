import PersonCard from '@/app/blog/components/person-card';
import Link from 'next/link';
import BlogNav from './blog-nav';

export default function HomeSide({blog}:{blog:any}) {
  return (
    <div className="fixed top-0 h-screen w-80 ">
      {/* <PersonCard /> */}
      <div className=" mt-10">
        <BlogNav content={blog?.content}/>
      </div>
      <div className="mt-10">
        <Link href="/" className="text-blue-500 hover:underline">
          返回首页
        </Link>
      </div>
    </div>
  );
}
