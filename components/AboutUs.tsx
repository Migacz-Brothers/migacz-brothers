////////////Images and Svgs
import AboutUsImage from '@/public/images/AboutUsImage.png';
import { BookOpen, Dribbble, Instagram, Linkedin } from 'lucide-react';
import BehanceIcon from '@/components/svgs/BehanceIcon';

////////////Images and Svgs
import Image from 'next/image';
import Link from 'next/link';
import cn from 'clsx';
import { ReactNode } from 'react';

export default function AboutUs() {
  return (
    <section>
      <div className='max-w-[1264px] mx-auto px-4'>
        <Image src={AboutUsImage} alt={'A photo about group pro working'} />
        <div>
          <h2>About Us</h2>
          <h3>Design & Code</h3>
          <p>
            We are a small cooperative company from South Brazil with an
            international team of professionals who have joined forces to create
            unique products for the web.
          </p>
          <ul className='flex md:gap-2 gap-[6px] pt-2'>
            <SocialLink className='bg-[#3367CC]'>
              <BehanceIcon />
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
      </div>
    </section>
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
        'rounded-[4px] font-body text-xs md:text-base leading-[12px]',
        className
      )}
    >
      <Link
        href={'#'}
        className='w-full h-full flex flex-row gap-1 items-center'
      >
        <div className='scale-75 md:scale-100 w-10 h-10 md:w-[54px] md:h-[54px] rounded-[4px] grid place-items-center'>
          {children}
        </div>
        {text}
      </Link>
    </li>
  );
};
