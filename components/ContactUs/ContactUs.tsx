import Cta from '../Cta';
import { h2, p, section } from '../design-system';
import cn from 'clsx';

export default function ContactUs() {
  return (
    <section>
      <div className={section}>
        <div className='flex lg:flex-row flex-col justify-between md:pb-36 gap-4 lg:items-end pt-28 pb-32'>
          <div>
            <h3 className={cn(h2, 'pb-2 lg:pb-3 lg:!text-[2rem]')}>
              Wanna Talk? Send us a message!
            </h3>
            <p className={cn(p, 'pb-4 max-w-lg')}>
              Our team is excited to connect with you. Reach out to discuss your
              software needs today!
            </p>
          </div>
          <div className='w-full max-w-[445px]'>
            <Cta />
          </div>
        </div>
      </div>
    </section>
  );
}
