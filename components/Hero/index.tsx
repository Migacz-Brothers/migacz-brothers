'use client';

import Image from 'next/image';
import MBGif from '@/public/images/MBGif.gif';
import cn from 'clsx';
import { motion } from 'framer-motion';

import { h1, p, section } from '@/components/design-system';

import Cta from '../Cta';

interface HeroProps {
  title: JSX.Element;
  paragraph: JSX.Element;
  textButton: string;
  alt: string;
}

export default function Hero({ title, paragraph, textButton, alt }: HeroProps) {
  return (
    <div className='pb-18 pt-28 md:pb-32 md:pt-40' id='home'>
      <motion.section
        className={cn(
          section,
          'flex flex-col flex-wrap justify-center lg:max-h-[580px]',
        )}
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className='mr-4 mt-0 flex max-w-[652px] flex-col self-start lg:order-1 lg:mt-[95px]'>
          <span className={cn(p, 'mb-1 uppercase underline lg:mb-3')}>
            MigaczBrothers
          </span>
          <h1 className={cn(h1, 'mb-4 max-w-[464px] md:max-w-none lg:mb-6')}>
            {title}
          </h1>
        </div>
        <div className='order-2 mb-0 mr-4 flex w-full max-w-[445px] flex-col-reverse self-start lg:order-1 lg:mb-[95px] lg:flex-col'>
          <p className={cn(p, 'mb-0 max-w-[434px] font-medium lg:mb-16')}>
            {paragraph}
          </p>
          <Cta textButton={textButton} />
        </div>
        <Image
          src={MBGif}
          alt={alt}
          className='mb-4 rounded-2xl lg:order-1 lg:mb-0 lg:self-end'
        />
      </motion.section>
    </div>
  );
}
