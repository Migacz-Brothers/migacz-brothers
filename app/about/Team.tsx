'use client';

import { h2, section } from '@/components/design-system';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import PedroImage from '@/public/images/PedroImage.png';
import GustavoImage from '@/public/images/GustavoImage.png';
import KarlaImage from '@/public/images/KarlaImage.png';
import ArthurImage from '@/public/images/ArthurImage.png';
import CharlieImage from '@/public/images/CharlieImage.png';
import { delay, motion } from 'framer-motion';
import cn from 'clsx';

export default function Team() {
  return (
    <motion.section
      className={cn(section, 'md:mb-32 mb-12')}
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <h2 className={cn(h2, 'md:mb-16 mb-4')}>The Team</h2>
      <ul className='grid md:grid-cols-3 sml:grid-cols-2 grid-cols-1 gap-4'>
        <Card
          src={PedroImage}
          title={'Pedro Migacz'}
          role={'BACKEND DEV'}
          delay={0.1}
        />
        <Card
          src={GustavoImage}
          title={'Gustavo Migacz'}
          role={'FRONTEND DEV'}
          delay={0.2}
        />
        <Card
          src={KarlaImage}
          title={'Karla Machado'}
          role={'UX/UI DESIGNER'}
          delay={0.3}
        />
        <Card
          src={ArthurImage}
          title={'Arthur Franceschini'}
          role={'MARKETING SPECIALIST'}
          delay={0.4}
        />
        <Card src={CharlieImage} title={'Charlie'} role={'PET'} delay={0.5} />
      </ul>
    </motion.section>
  );
}

interface CardProps {
  src: string | StaticImport;
  title: string;
  role: string;
  delay: number;
}

const Card = ({ src, title, role, delay }: CardProps) => {
  return (
    <motion.li
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: delay }}
      className='inline-block'
    >
      <Image
        src={src}
        alt={''}
        className='rounded-2xl md:mb-1 mb-2 md:max-w-full'
      />
      <h3 className='font-header font-extralight leading-header md:text-2xl text-xl md:mb-0 -mb-1'>
        {title}
      </h3>
      <span className='font-body font-medium leading-header tracking-[3.2px] md:text-base text-xs'>
        {role}
      </span>
    </motion.li>
  );
};
