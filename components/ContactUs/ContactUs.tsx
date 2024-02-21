'use client';

import cn from 'clsx';
import { motion } from 'framer-motion';

import Cta from '../Cta';
import { h2, p, section } from '../design-system';

interface ContactUsProps {
  title: string;
  paragraph: string;
  textButton: string;
}

export default function ContactUs({
  title,
  paragraph,
  textButton,
}: ContactUsProps) {
  return (
    <section>
      <span
        id='contact'
        className='relative bottom-[136px] h-0 w-0 opacity-0'
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
        <div className='flex flex-col justify-between gap-4 pb-32 pt-28 md:pb-36 lg:flex-row lg:items-end'>
          <div>
            <h3 className={cn(h2, 'pb-2 lg:pb-3 lg:!text-[2rem]')}>{title}</h3>
            <p className={cn(p, 'max-w-lg pb-4')}>{paragraph}</p>
          </div>
          <div className='w-full max-w-[445px]'>
            <Cta textButton={textButton} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
