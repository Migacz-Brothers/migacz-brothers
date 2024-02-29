'use client';

import cn from 'clsx';
import { motion } from 'framer-motion';

import { h2, p, section } from '@/components/design-system';
import ScrollAnimated from '@/components/svgs/ScrollAnimated';

interface TldrProps {
  title: string;
  paragraph: string;
  paragraph_2: string;
}

export default function Tldr({ title, paragraph, paragraph_2 }: TldrProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={cn(section, 'mb-12 md:mb-64')}
    >
      <h2 className={cn(h2, 'mb-4 md:mb-6')}>{title}</h2>
      <p className={cn(p, 'mb-4 max-w-[514px]')}>{paragraph}</p>
      <p className={cn(p, 'flex max-w-[514px] gap-2')}>
        {paragraph_2}
        <ScrollAnimated />
      </p>
    </motion.section>
  );
}
