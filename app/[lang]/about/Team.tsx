'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import ArthurImage from '@/public/images/ArthurImage.png';
import CharlieImage from '@/public/images/CharlieImage.png';
import GustavoImage from '@/public/images/GustavoImage.png';
import KarlaImage from '@/public/images/KarlaImage.png';
import PedroImage from '@/public/images/PedroImage.png';
import cn from 'clsx';
import { motion } from 'framer-motion';

import { h2, section } from '@/components/design-system';

interface TeamProps {
  title: string;
}

export default function Team({ title }: TeamProps) {
  return (
    <motion.section
      className={cn(section, 'mb-12 md:mb-32')}
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <h2 className={cn(h2, 'mb-4 md:mb-16')}>{title}</h2>
      <ul className='grid grid-cols-1 gap-4 sml:grid-cols-2 md:grid-cols-3'>
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
        <Card
          src={PedroImage}
          title={'Pedro Migacz'}
          role={'BACKEND DEV'}
          delay={0.1}
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
        className='mb-2 rounded-2xl md:mb-1 md:max-w-full'
      />
      <h3 className='-mb-1 font-header text-xl font-extralight leading-header md:mb-0 md:text-2xl'>
        {title}
      </h3>
      <span className='font-body text-xs font-medium leading-header tracking-[3.2px] md:text-base'>
        {role}
      </span>
    </motion.li>
  );
};
