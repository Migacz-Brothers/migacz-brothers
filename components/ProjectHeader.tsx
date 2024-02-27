'use client';

import Link from 'next/link';
import cn from 'clsx';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

import { project_section } from '@/components/design-system';

interface ProjectHeaderProps {
  title: string;
  description: string;
  executed_at: string;
  read_time: string;
  link?: string | null;
}

const ProjectHeader = ({
  title,
  description,
  executed_at,
  read_time,
  link,
}: ProjectHeaderProps) => {
  return (
    <motion.div
      className={cn(project_section, 'mb-8')}
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h1 className='font-header text-3xl font-semibold leading-header md:text-5xl'>
        {title}
      </h1>
      <p className='font-header text-lg leading-header md:text-4xl'>
        {description}
      </p>
      <p className='flex gap-3 text-sm font-light md:text-base'>
        <span>{executed_at}</span>•<span>{read_time}</span>
      </p>
      {link ? (
        <Link
          href={link}
          className='mt-2 inline-flex gap-2 rounded-md bg-[#ffffff] px-3 py-2 font-body text-sm font-medium text-cta md:text-base'
          target='_blank'
          rel='noopener noreferrer'
        >
          Acesse a página <LogIn strokeWidth={1.5} />
        </Link>
      ) : null}
    </motion.div>
  );
};

export default ProjectHeader;
