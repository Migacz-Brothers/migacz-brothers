'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';
import cn from 'clsx';

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
        'rounded-[4px] font-body text-xs lg:text-base leading-[12px]',
        className
      )}
    >
      <Link
        href={href}
        className='w-full h-full flex flex-row gap-1 items-center rounded-[4px] hover:shadow-bright-sm hover:underline duration-300'
        target={samePage ? '' : '_blank'}
      >
        <div className='scale-75 xl:scale-100 w-10 h-10 xl:w-[54px] xl:h-[54px] grid place-items-center'>
          {children}
        </div>
        {text}
      </Link>
    </motion.li>
  );
};

export default SocialLink;
