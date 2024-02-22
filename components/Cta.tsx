import Link from 'next/link';
import cn from 'clsx';
import { ArrowUpRight } from 'lucide-react';

interface CtaProps {
  textButton: string;
}

export default function Cta({ textButton }: CtaProps) {
  return (
    <Link
      href='mailto:hello@migaczbrothers.com'
      className={cn(
        'group mb-4 flex w-full items-center rounded-lg bg-cta py-[3px] pl-2 pr-[3px] text-cta duration-1000 ease-in-out hover:shadow-bright md:rounded-2xl md:pl-4 lg:mb-0',
      )}
    >
      <span className='font-body text-sm md:text-base'>
        {textButton}
        <strong className='font-semibold group-hover:underline'>
          {' '}
          hello@migaczbrothers.com
        </strong>
      </span>
      <div className='cta-button-gradient ml-auto grid aspect-square h-11 w-11 place-items-center rounded-[5px] xsm:h-8 xsm:w-8 md:h-14 md:w-14 md:rounded-[13px]'>
        <ArrowUpRight
          size={36}
          strokeWidth={2.5}
          absoluteStrokeWidth
          className='h-6 w-6 text-[#f4f4f4] md:h-auto md:w-auto'
        />
      </div>
    </Link>
  );
}
