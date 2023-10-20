import { h1, p, section } from '@/components/design-system';
import cn from 'clsx';
import Illustrations from './Illustrations';
import Cta from '../Cta';

export default function Hero() {
  return (
    <div className='light-noise-background md:py-32 pb-18 pt-20' id='home'>
      <section
        className={cn(
          section,
          'flex flex-col flex-wrap lg:max-h-[580px] justify-center'
        )}
      >
        <div className='max-w-[652px] flex flex-col self-start mr-4 lg:order-1 lg:mt-[95px] mt-0'>
          <span className={cn(p, 'uppercase underline lg:mb-3 mb-1')}>
            MigaczBrothers
          </span>
          <h1 className={cn(h1, 'lg:mb-6 mb-4 md:max-w-none max-w-[464px]')}>
            Helping companies create unique{' '}
            <strong className='gradient-bold'>digital products</strong>.
          </h1>
        </div>
        <div className='self-start flex lg:flex-col flex-col-reverse max-w-[445px] w-full mr-4 lg:order-1 order-2 lg:mb-[95px] mb-0'>
          <p className={cn(p, 'font-medium lg:mb-16 mb-0 max-w-[434px]')}>
            Get access to high-end designers, frontend and backend developers,
            branding specialists, and much more in a{' '}
            <strong className='font-medium underline'>single place</strong>!
          </p>
          <Cta />
        </div>
        <Illustrations className='lg:self-end lg:order-1 mb-4 lg:mb-0' />
      </section>
    </div>
  );
}
