import Link from 'next/link';
import cn from 'clsx';
import { ArrowUpRight } from 'lucide-react';

export default function Cta() {
  return (
    <Link
      href='#'
      className={cn(
        'group hover:shadow-bright duration-1000 ease-in-out bg-cta text-cta py-[3px] pr-[3px] md:pl-4 pl-2 w-full md:rounded-2xl rounded-lg flex items-center mb-4 lg:mb-0'
      )}
    >
      <span className='font-body text-sm md:text-base'>
        Contact us at{' '}
        <strong className='font-semibold group-hover:underline'>
          hello@migaczbrothers.com
        </strong>
      </span>
      <div className='cta-button-gradient md:w-14 md:h-14 xsm:w-8 xsm:h-8 w-11 h-11 aspect-square grid place-items-center md:rounded-[13px] rounded-[5px] ml-auto'>
        <ArrowUpRight
          size={36}
          strokeWidth={2.5}
          absoluteStrokeWidth
          className='text-[#f4f4f4] md:w-auto w-6 md:h-auto h-6'
        />
      </div>
    </Link>
  );
}
