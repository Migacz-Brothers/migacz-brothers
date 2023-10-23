'use client';

import { motion } from 'framer-motion';
import Cta from '../Cta';
import { h2, p, section } from '../design-system';
import cn from 'clsx';

export default function ContactUs() {
  return (
    <section>
      <span
        id='contact'
        className='opacity-0 h-0 w-0 relative bottom-[136px]'
      />
      <motion.div
        className={section}
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
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
      </motion.div>
    </section>
  );
}
