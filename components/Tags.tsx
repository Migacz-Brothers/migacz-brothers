'use client';

import { motion } from 'framer-motion';

interface TagsProps {
  tagList: string[];
  title?: string;
}

export const Tags = ({ tagList, title = '' }: TagsProps) => (
  <ul className='flex flex-wrap gap-1 md:gap-2'>
    {tagList.map((tag, i) => (
      <motion.li
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.05 + 0.1 * i }}
        key={`tag-${i}-${tag}-${title}`}
        className='flex'
      >
        <motion.span className='rounded bg-tag px-[12px] py-[3px] font-header text-xs leading-header text-main outline outline-1 -outline-offset-1 backdrop-blur-xsm duration-300 group-hover:bg-tag-hover md:rounded-lg md:px-[25px] md:py-[5px] md:text-base md:outline-2 md:-outline-offset-1'>
          {tag}
        </motion.span>
      </motion.li>
    ))}
  </ul>
);
