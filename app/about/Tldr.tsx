'use client';

import { h2, p, section } from '@/components/design-system';
import ScrollAnimated from '@/components/svgs/ScrollAnimated';
import cn from 'clsx';
import { motion } from 'framer-motion';

export default function Tldr() {
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
      <h2 className={cn(h2, 'md:mb-6 mb-4')}>The tl;dr</h2>
      <p className={cn(p, 'max-w-[514px] mb-4')}>
        We know you are a busy person, so we&apos;ll get straight to the point.
        We&apos;re a cooperative of designers and software developers who united
        to create high-quality products that might otherwise be impracticable.
        Our team is global, with our company&apos;s main office located in South
        Brazil.
      </p>
      <p className={cn(p, 'flex gap-2 max-w-[514px]')}>
        If you wanna learn more, just keep scrolling <ScrollAnimated />
      </p>
    </motion.section>
  );
}
