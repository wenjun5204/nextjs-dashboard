import PersonCard from '@/app/blog/components/person-card';
import Link from 'next/link';

export default function HomeSide() {
  return (
    <div className=" w-80">
      <PersonCard />
      <div className="mt-10">
        <Link
          href="/"
          className="text-blue-500 hover:underline"
        >
            返回首页
        </Link>
      </div>
    </div>
  );
}
