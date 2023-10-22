////////////Images and Svgs
import AboutUsImage from '@/public/images/AboutUsImage.png';
import { BookOpen, Dribbble, Instagram, Linkedin } from 'lucide-react';
import BehanceIcon from '@/components/svgs/BehanceIcon';

////////////Images and Svgs
import Image from 'next/image';
import Link from 'next/link';
import cn from 'clsx';
import { ReactNode } from 'react';
import { h2, p, section } from './design-system';

export default function AboutUs() {
  return (
    <div className='light-noise-background md:pb-16 pb-9'>
      <span className='opacity-0 h-0 w-0 relative bottom-[136px]' id='about' />
      <section
        className={cn(
          section,
          'flex lg:flex-row flex-col justify-between ld:gap-8 gap-4 items-start lg:items-center lg:w-full'
        )}
      >
        <Image
          src={AboutUsImage}
          alt={'Migacz Borthers team during a meeting'}
          className='md:rounded-2xl rounded-lg'
        />
        <div className='max-w-[445px]'>
          <div>
            <h2 className={cn(h2, '-mb-[2px]')}>About Us</h2>
            <h3
              className={
                'font-header text-main leading-header text-base md:text-lg'
              }
            >
              Design & Code
            </h3>
            <p className={cn(p, 'mt-2 lg:mt-[24px] lg:mb-[41px] ')}>
              We are a small cooperative company from South Brazil with an
              international team of professionals who have joined forces to
              create unique products for the web.
            </p>
          </div>

          <ul className='flex lg:gap-2 gap-[6px] pt-2'>
            <SocialLink className='bg-[#3367CC]'>
              <BehanceIcon strokeWidth={1.5} />
            </SocialLink>
            <SocialLink className='bg-[#2966A3]'>
              <Linkedin size={32} strokeWidth={1.5} />
            </SocialLink>
            <SocialLink className='bg-[#7F55B6]'>
              <Instagram size={32} strokeWidth={1.5} />
            </SocialLink>
            <SocialLink className='bg-[#B35598]'>
              <Dribbble size={32} strokeWidth={1.5} />
            </SocialLink>
            <SocialLink
              className='bg-[#F4F4F4] text-[#121212] pr-2 flex-1'
              text='Or read more'
            >
              <BookOpen size={32} strokeWidth={1.5} />
            </SocialLink>
          </ul>
        </div>
      </section>
    </div>
  );
}

interface SocialLinkProps {
  children: ReactNode;
  className: string;
  text?: string;
}

const SocialLink = ({ children, className, text }: SocialLinkProps) => {
  return (
    <li
      className={cn(
        'rounded-[4px] font-body text-xs lg:text-base leading-[12px] hover:brightness-90 hover:underline duration-300',
        className
      )}
    >
      <Link
        href={'#'}
        className='w-full h-full flex flex-row gap-1 items-center'
      >
        <div className='scale-75 xl:scale-100 w-10 h-10 xl:w-[54px] xl:h-[54px] rounded-[4px] grid place-items-center'>
          {children}
        </div>
        {text}
      </Link>
    </li>
  );
};
