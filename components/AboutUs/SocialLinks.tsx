'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import cn from 'clsx';
import { motion } from 'framer-motion';

interface SocialLinkProps {
  children: ReactNode;
  className: string;
  text?: string;
  i: number;
  href: string;
  samePage?: boolean;
}

const SocialLink = ({
  children,
  className,
  text,
  i,
  href,
  samePage = false,
}: SocialLinkProps) => {
  return (
    <motion.li
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.05 + 0.1 * i }}
      key={`socialLink-${i}_${text}`}
      className={cn(
        'rounded-[4px] font-body text-xs leading-[12px] lg:text-base',
        className,
      )}
    >
      <Link
        href={href}
        className='flex h-full w-full flex-row items-center gap-1 rounded-[4px] duration-300 hover:underline hover:shadow-bright-sm'
        target={samePage ? '' : '_blank'}
        rel='noopener noreferrer'
      >
        <div className='grid h-10 w-10 scale-75 place-items-center xl:h-[54px] xl:w-[54px] xl:scale-100'>
          {children}
        </div>
        {text}
      </Link>
    </motion.li>
  );
};

export default SocialLink;
