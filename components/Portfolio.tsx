import Link from 'next/link';
import Image from 'next/image';
import { Tags, h2, h3, section } from './design-system';
import cn from 'clsx';

import DietIt from '@/public/portfolio/dietit.png';
import Cordoce from '@/public/portfolio/cordoce.png';
import Dwight from '@/public/portfolio/dwight.png';
import Knox from '@/public/portfolio/knoxabstract.png';
import Oneup from '@/public/portfolio/umupsistemas.png';

export default function Portfolio() {
  return (
    <div className='blue-noise-background md:pt-16 pt-9 md:pb-16 pb-9'>
      <span
        className='opacity-0 h-0 w-0 relative bottom-[136px]'
        id='portfolio'
      />
      <section className={cn(section)}>
        <h2 className={cn(h2, 'md:mb-16 mb-6')}>Our Projects Showcase</h2>
        <ul className='grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-6'>
          <Project
            expand
            name={
              <>
                <strong>DietIt</strong> Project
              </>
            }
          >
            <Image
              src={DietIt}
              alt='Multiple interfaces from diet it aligned'
              quality={100}
              className={cn(
                'md:rounded-2xl rounded-lg group-hover:brightness-90 duration-300 object-cover w-full',
                'aspect-[17/7]'
              )}
            />
          </Project>
          <Project
            name={
              <>
                <strong>Dwight Capital</strong> Project
              </>
            }
          >
            <Image
              src={Dwight}
              alt='Multiple interfaces from diet it aligned'
              quality={100}
              className={cn(
                'md:rounded-2xl rounded-lg group-hover:brightness-90 duration-300 object-contain w-full',
                'max-h-[400px] md:aspect-[1.2/1] aspect-[17/7]',
                'dwight-capital-bg'
              )}
            />
          </Project>
          <Project
            name={
              <>
                <strong>Cordoce Store</strong> brand design
              </>
            }
          >
            <Image
              src={Cordoce}
              alt='Multiple interfaces from diet it aligned'
              quality={100}
              className={cn(
                'md:rounded-2xl rounded-lg group-hover:brightness-90 duration-300 object-contain w-full',
                'max-h-[400px] md:aspect-[1.2/1] aspect-[17/7]',
                'bg-[#FF777C]'
              )}
            />
          </Project>
          <Project
            expand
            name={
              <>
                <strong>Knox Abstract</strong>
              </>
            }
          >
            <Image
              src={Knox}
              alt='Multiple interfaces from diet it aligned'
              quality={100}
              className={cn(
                'md:rounded-2xl rounded-lg group-hover:brightness-90 duration-300 object-cover w-full',
                'aspect-[17/7]'
              )}
            />
          </Project>
          <Project
            expand
            name={
              <>
                <strong>1up Systems</strong> website
              </>
            }
          >
            <Image
              src={Oneup}
              alt='Multiple interfaces from diet it aligned'
              quality={100}
              className={cn(
                'md:rounded-2xl rounded-lg group-hover:brightness-90 duration-300 object-cover w-full',
                'aspect-[17/7]'
              )}
            />
          </Project>
        </ul>
      </section>
    </div>
  );
}

interface ProjectProps {
  expand?: boolean;
  name: JSX.Element;
  children: JSX.Element;
}

const Project = ({ expand = false, name, children }: ProjectProps) => {
  return (
    <li className={expand ? 'md:col-span-2 col-span-1' : ''}>
      <Link href='#' className='flex flex-col md:gap-4 gap-2 group max-h-full'>
        <h3 className={cn(h3, 'group-hover:underline')}>{name}</h3>

        {children}
        <Tags tagList={['UI/UX', 'Mobile App', 'Search engine']} />
      </Link>
    </li>
  );
};
