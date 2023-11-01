'use client';

import { h1, section } from '@/components/design-system';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import cn from 'clsx';
import Image from 'next/image';

import MBAbout from '@/public/images/MBAbout.png';
import PlantAbout from '@/public/images/PlantAbout.png';
import PedroAbout from '@/public/images/PedroAbout.png';
import GustavoAbout from '@/public/images/GustavoAbout.png';
import MB2About from '@/public/images/MB2About.png';
import CharlieAbout from '@/public/images/CharlieAbout.png';
import { motion } from 'framer-motion';

export default function AboutUsSection() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={section}
    >
      <h1 className={cn(h1, 'md:mb-16 mb-4')}>About US</h1>
      <ul className='grid md:grid-cols-4 grid-cols-2 lg:gap-4 md:gap-3 gap-2'>
        <Card src={MBAbout} delay={0.1} className='col-span-2' />
        <Card src={PlantAbout} delay={0.2} className='md:inline-block hidden' />
        <Card src={PedroAbout} delay={0.3} />
        <Card
          src={GustavoAbout}
          delay={0.4}
          className='md:inline-block hidden'
        />
        <Card
          src={MB2About}
          delay={0.5}
          className='col-span-2 md:inline-block hidden'
        />
        <Card src={CharlieAbout} delay={0.6} />
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
        className={cn('rounded-[4px] w-full h-full object-cover')}
      />
    </motion.li>
  );
};
