import { ModeToggle } from '@/components/theme/mode-toggle';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from './nav-menu';

export default function AcmeLogo() {
  return (
    <div
      className={`flex sticky top-0 w-full min-w-min flex-row items-center gap-3 rounded-lg border-2 border-solid bg-indigo-500 px-5 leading-none text-main`}
    >
      <Link href={'/'}>
        <Image
          src="/cat.gif"
          width={20}
          height={40}
          className="hidden md:block"
          alt="小可爱"
        />
      </Link>
      <Menu />
      <div className="text-primary">
        <ModeToggle></ModeToggle>
      </div>
      <span className=' text-highlight hidden md:block'>**等等我呀, 我还没写完</span>
    </div>
  );
}
