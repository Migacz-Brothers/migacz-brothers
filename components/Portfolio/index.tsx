import Image from 'next/image';
import { h2, section } from '@/components/design-system';
import cn from 'clsx';

import DietIt from '@/public/portfolio/dietit.png';
import Cordoce from '@/public/portfolio/cordoce.png';
import Dwight from '@/public/portfolio/dwight.png';
import Knox from '@/public/portfolio/knoxabstract.png';
import Oneup from '@/public/portfolio/umupsistemas.png';
import Project from '@/components/Portfolio/Project';

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
            key={1}
            expand
            name={
              <>
                <strong>DietIt</strong> Project
              </>
            }
            tagList={[
              'UI/UX',
              'Mobile App',
              'Progressive Web App',
              'Saas',
              'PostgreSQL',
              'Redis',
            ]}
            href='/dietit'
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
            key={2}
            name={
              <>
                <strong>Dwight Capital</strong> Pages
              </>
            }
            tagList={['UI/UX', 'CMS', 'Blog']}
            href='/cordoce'
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
            key={3}
            name={
              <>
                <strong>Cordoce Store</strong> brand design
              </>
            }
            tagList={['branding', 'Product Design']}
            href='/dwight-capital'
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
            key={4}
            expand
            name={
              <>
                <strong>Knox Abstract</strong>
              </>
            }
            tagList={['UI/UX', 'CMS', 'Website', 'Microinteractions']}
            href='/knox-abstract'
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
            key={5}
            expand
            name={
              <>
                <strong>1up Systems</strong> website
              </>
            }
            tagList={['UI/UX', 'CMS', 'Website', 'Microinteractions']}
            href='/1up'
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
