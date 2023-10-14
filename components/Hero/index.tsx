import { h1, p, section } from '@/components/design-system';
import cn from 'clsx';
import Illustrations from './Illustrations';

export default function Hero() {
  return (
    <div className='light-noise-background py-32'>
      <section className={cn(section, 'flex justify-between')}>
        <div className='max-w-[652px] flex flex-col'>
          <span className={cn(p, 'uppercase underline mb-3')}>
            MigaczBrothers
          </span>
          <h1 className={cn(h1, 'mb-6')}>
            Helping companies create unique{' '}
            <strong className='gradient-bold'>digital products</strong>.
          </h1>
          <p className={cn(p, 'font-medium mb-16 max-w-[434px]')}>
            Get access to high-end designers, frontend and backend developers,
            branding specialists, and much more in a{' '}
            <strong className='font-medium underline'>single place</strong>!
          </p>
        </div>
        <Illustrations />
      </section>
    </div>
  );
}
