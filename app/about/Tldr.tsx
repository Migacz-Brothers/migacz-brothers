import { h2, p, section } from '@/components/design-system';
import ScrollAnimated from '@/components/svgs/ScrollAnimated';
import cn from 'clsx';

export default function Tldr() {
  return (
    <section className={section}>
      <h2 className={cn(h2, 'md:mb-6 mb-4')}>The tl;dr</h2>
      <div className='max-w-[514px] flex flex-col gap-4'>
        <p className={p}>
          We know you are a busy person, so we&apos;ll get straight to the
          point. We&apos;re a cooperative of designers and software developers
          who united to create high-quality products that might otherwise be
          impracticable. Our team is global, with our company&apos;s main office
          located in South Brazil.
        </p>
        <p className={cn(p, 'flex gap-2')}>
          If you wanna learn more, just keep scrolling <ScrollAnimated />
        </p>
      </div>
    </section>
  );
}
