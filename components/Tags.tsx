'use client';
import { motion } from 'framer-motion';

interface TagsProps {
  tagList: string[];
  title?: string;
}

export const Tags = ({ tagList, title = '' }: TagsProps) => (
  <ul className='flex gap-1 md:gap-2 flex-wrap'>
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
        <motion.span className='font-header text-main leading-header text-xs md:text-base px-[12px] md:px-[25px] py-[3px] md:py-[5px] rounded md:rounded-lg bg-tag backdrop-blur-xsm outline outline-1 md:outline-2 -outline-offset-1 md:-outline-offset-1 group-hover:bg-tag-hover duration-300'>
          {tag}
        </motion.span>
      </motion.li>
    ))}
  </ul>
);
