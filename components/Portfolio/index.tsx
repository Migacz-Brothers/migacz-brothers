import Image from 'next/image';
import Cordoce from '@/public/portfolio/cordoce.png';
import DietIt from '@/public/portfolio/dietit.png';
import Dwight from '@/public/portfolio/dwight.png';
import Knox from '@/public/portfolio/knoxabstract.png';
import Oneup from '@/public/portfolio/umupsistemas.png';
import cn from 'clsx';

import { h2, section } from '@/components/design-system';
import Project from '@/components/Portfolio/Project';

interface PortfolioProps {
  title: string;
  title_1: JSX.Element;
  title_2: JSX.Element;
  title_3: JSX.Element;
  title_4: JSX.Element;
  title_5: JSX.Element;
  basePath?: string;
}

export default function Portfolio({
  title,
  title_1,
  title_2,
  title_3,
  title_4,
  title_5,
  basePath = '',
}: PortfolioProps) {
  return (
    <div className='pb-9 pt-9 md:pb-16 md:pt-16'>
      <span
        className='relative bottom-[136px] h-0 w-0 opacity-0'
        id='portfolio'
      />
      <section className={cn(section)}>
        <h2 className={cn(h2, 'mb-6 md:mb-16')}>{title}</h2>
        <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16'>
          <Project
            key={1}
            expand
            name={title_1}
            tagList={[
              'UI/UX',
              'NextJs',
              'Progressive Web App',
              'Mobile App',
              'PostgreSQL',
              'Redis',
              'SaaS',
            ]}
            href={basePath + '/dietit'}
          >
            <Image
              src={DietIt}
              alt='Multiple interfaces from diet it aligned'
              quality={100}
              className={cn(
                'w-full rounded-lg object-cover duration-300 group-hover:brightness-90 md:rounded-2xl',
                'aspect-[17/7]',
              )}
            />
          </Project>
          <Project
            key={2}
            name={title_2}
            tagList={['UI/UX', 'CMS', 'Blog system', 'SEO']}
            href={basePath + '/dwight-capital'}
          >
            <Image
              src={Dwight}
              alt='Multiple interfaces from diet it aligned'
              quality={100}
              className={cn(
                'w-full rounded-lg object-contain duration-300 group-hover:brightness-90 md:rounded-2xl',
                'aspect-[17/7] max-h-[400px] md:aspect-[1.2/1]',
                'dwight-capital-bg',
              )}
            />
          </Project>
          <Project
            key={3}
            name={title_3}
            tagList={['branding', 'Product Design']}
            href={basePath + '/cordoce-store'}
          >
            <Image
              src={Cordoce}
              alt='Multiple interfaces from diet it aligned'
              quality={100}
              className={cn(
                'w-full rounded-lg object-cover duration-300 group-hover:brightness-90 md:rounded-2xl',
                'aspect-[17/7] max-h-[400px] md:aspect-[1.2/1]',
              )}
            />
          </Project>
          <Project
            key={4}
            expand
            name={title_4}
            tagList={[
              'UI/UX',
              'CMS',
              'Blog System',
              'SEO',
              'Performance',
              'Microinteractions',
            ]}
            href={basePath + '/knox-abstract'}
          >
            <Image
              src={Knox}
              alt='Multiple interfaces from diet it aligned'
              quality={100}
              className={cn(
                'w-full rounded-lg object-cover duration-300 group-hover:brightness-90 md:rounded-2xl',
                'aspect-[17/7]',
              )}
            />
          </Project>
          <Project
            key={5}
            expand
            name={title_5}
            tagList={['UI/UX', 'CMS', 'Website', 'SEO', 'Analytics']}
            href={basePath + '/1up-sistemas'}
          >
            <Image
              src={Oneup}
              alt='Multiple interfaces from diet it aligned'
              quality={100}
              className={cn(
                'w-full rounded-lg object-cover duration-300 group-hover:brightness-90 md:rounded-2xl',
                'aspect-[17/7]',
              )}
            />
          </Project>
        </ul>
      </section>
    </div>
  );
}
