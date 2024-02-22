'use client';

import Link from 'next/link';
import cn from 'clsx';
import { motion } from 'framer-motion';

import { h3 } from '@/components/design-system';
import { Tags } from '@/components/Tags';

interface ProjectProps {
  expand?: boolean;
  name: JSX.Element;
  children: JSX.Element;
  key: number;
  tagList: string[];
  href: string;
}

const Project = ({
  expand = false,
  name,
  children,
  key,
  tagList,
  href,
}: ProjectProps) => {
  return (
    <motion.li
      className={expand ? 'col-span-1 md:col-span-2' : ''}
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <Link
        href={href}
        className='group flex max-h-full flex-col gap-2 md:gap-4'
      >
        <h3 className={cn(h3, 'group-hover:underline')}>{name}</h3>

        {children}
        <Tags tagList={tagList} key={key} />
      </Link>
    </motion.li>
  );
};

export default Project;
