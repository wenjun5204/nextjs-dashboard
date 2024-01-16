import { PhoneArrowUpRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { ModeToggle } from '@/components/theme/mode-toggle';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} w-full flex flex-row items-center justify-between leading-none text-white`}
    >
      <PhoneArrowUpRightIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Nice</p>
      <div className=' text-primary'><ModeToggle></ModeToggle></div>
    </div>
  );
}
