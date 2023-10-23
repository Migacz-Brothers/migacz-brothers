'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import cn from 'clsx';

import { Tags } from '@/components/Tags';
import { h3 } from '@/components/design-system';

interface ProjectProps {
  expand?: boolean;
  name: JSX.Element;
  children: JSX.Element;
  key: number;
}

const Project = ({ expand = false, name, children, key }: ProjectProps) => {
  return (
    <motion.li
      className={expand ? 'md:col-span-2 col-span-1' : ''}
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <Link href='#' className='flex flex-col md:gap-4 gap-2 group max-h-full'>
        <h3 className={cn(h3, 'group-hover:underline')}>{name}</h3>

        {children}
        <Tags tagList={['UI/UX', 'Mobile App', 'Search engine']} key={key} />
      </Link>
    </motion.li>
  );
};

export default Project;
