'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import CharlieAbout from '@/public/images/CharlieAbout.png';
import GustavoAbout from '@/public/images/GustavoAbout.png';
import MB2About from '@/public/images/MB2About.png';
import MBAbout from '@/public/images/MBAbout.png';
import PedroAbout from '@/public/images/PedroAbout.png';
import PlantAbout from '@/public/images/PlantAbout.png';
import cn from 'clsx';
import { motion } from 'framer-motion';

import { h1, section } from '@/components/design-system';

interface AboutUsHeroProps {
  title: string;
}

export default function AboutUsHero({ title }: AboutUsHeroProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={cn(section, 'mb-14 pt-24 md:mb-56 md:pt-36')}
    >
      <h1 className={cn(h1, 'mb-4 md:mb-16')}>{title}</h1>
      <ul className='grid grid-cols-2 gap-2 sml:grid-cols-4 md:gap-3 lg:gap-4'>
        <Card src={MBAbout} delay={0.1} className='col-span-2' />
        <Card
          src={PlantAbout}
          delay={0.2}
          className='hidden sml:inline-block'
        />
        <Card src={PedroAbout} delay={0.3} />
        <Card
          src={GustavoAbout}
          delay={0.1}
          className='hidden sml:inline-block'
        />
        <Card
          src={MB2About}
          delay={0.2}
          className='col-span-2 hidden sml:inline-block'
        />
        <Card src={CharlieAbout} delay={0.3} />
      </ul>
    </motion.section>
  );
}

interface CardProps {
  src: string | StaticImport;
  className?: string;
  alt?: string;
  delay: number;
}

const Card = ({ src, className, delay }: CardProps) => {
  return (
    <motion.li
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: delay }}
      className={className}
    >
      <Image
        src={src}
        alt={'Our Team Migacz Brothers.'}
        className={cn('h-full w-full rounded-[4px] object-cover')}
      />
    </motion.li>
  );
};
