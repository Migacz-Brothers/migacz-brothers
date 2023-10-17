import Link from 'next/link';
import Image from 'next/image';
import { Tags, h2, h3, section } from './design-system';
import cn from 'clsx';

import DietIt from '@/public/portfolio/dietit.png';

export default function Portfolio() {
  return (
    <div className='blue-noise-background md:pt-16 pt-9'>
      <section className={cn(section)}>
        <h2 className={cn(h2, 'md:mb-16 mb-6')}>Our Projects Showcase</h2>
        <ul className='grid grid-cols-2 gap-16'>
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
            cover={DietIt}
            alt='Multiple interfaces from diet it aligned'
          />
          <Project
            name={
              <>
                <strong>DietIt</strong> Project
              </>
            }
            cover={DietIt}
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
    <li className={expand ? 'col-span-2' : ''}>
      <Link href='#' className='flex flex-col md:gap-4 gap-2 group'>
        <h3 className={cn(h3, 'group-hover:underline')}>{name}</h3>
        <Image
          src={cover}
          alt={alt}
          quality={100}
          className='md:rounded-2xl rounded-lg group-hover:brightness-90 duration-300'
        />

        <Tags tagList={['UI/UX', 'Mobile App', 'Search engine']} />
      </Link>
    </li>
  );
};
