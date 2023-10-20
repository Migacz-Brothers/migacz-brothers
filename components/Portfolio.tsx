import Link from 'next/link';
import Image from 'next/image';
import { Tags, h2, h3, section } from './design-system';
import cn from 'clsx';

import DietIt from '@/public/portfolio/dietit.png';
import Cordoce from '@/public/portfolio/cordoce.png';
import Dwight from '@/public/portfolio/dwight.png';

export default function Portfolio() {
  return (
    <div className='blue-noise-background md:pt-16 pt-9'>
      <span
        className='opacity-0 h-0 w-0 relative bottom-[136px]'
        id='portfolio'
      />
      <section className={cn(section)}>
        <h2 className={cn(h2, 'md:mb-16 mb-6')}>Our Projects Showcase</h2>
        <ul className='grid ld:grid-cols-2 grid-cols-1 md:gap-16 gap-6'>
          <Project
            expand
            name={
              <>
                <strong>DietIt</strong> Project
              </>
            }
            cover={DietIt}
            alt='Multiple interfaces from diet it aligned'
          />
          <Project
            name={
              <>
                <strong>DietIt</strong> Project
              </>
            }
            cover={Dwight}
            alt='Multiple interfaces from diet it aligned'
          />
          <Project
            name={
              <>
                <strong>DietIt</strong> Project
              </>
            }
            cover={Cordoce}
            alt='Multiple interfaces from diet it aligned'
          />
        </ul>
      </section>
    </div>
  );
}

interface ProjectProps {
  expand?: boolean;
  name: JSX.Element;
  cover: any;
  alt: string;
}

const Project = ({ expand = false, name, cover, alt }: ProjectProps) => {
  return (
    <li className={expand ? 'lg:col-span-2 col-span-1' : ''}>
      <Link href='#' className='flex flex-col md:gap-4 gap-2 group'>
        <h3 className={cn(h3, 'group-hover:underline')}>{name}</h3>
        <Image
          src={cover}
          alt={alt}
          quality={100}
          className={cn(
            'md:rounded-2xl rounded-lg group-hover:brightness-90 duration-300 object-cover w-full',
            expand ? 'aspect-[1.32 / 1]' : ''
          )}
        />

        <Tags tagList={['UI/UX', 'Mobile App', 'Search engine']} />
      </Link>
    </li>
  );
};
