import { PhoneArrowUpRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { ModeToggle } from '@/components/theme/mode-toggle';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-dropdown-menu';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex w-full max-w-7xl min-w-min flex-row items-center justify-between rounded-lg bg-indigo-500 px-5 leading-none text-white border-2 border-solid hover:border-red-400`}
    >
      <Image
        src="/cat.gif"
        width={20}
        height={40}
        className="hidden md:block"
        alt="小可爱"
      />

      <PhoneArrowUpRightIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Nice</p>
      <div className=" text-primary">
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}
