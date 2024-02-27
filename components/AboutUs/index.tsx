'use client';

////////////Images and Svgs
////////////Images and Svgs
import Image from 'next/image';
import AboutUsImage from '@/public/images/AboutUsImage.png';
import cn from 'clsx';
import { motion } from 'framer-motion';
import { BookOpen, Dribbble, Instagram, Linkedin } from 'lucide-react';

import BehanceIcon from '@/components/svgs/BehanceIcon';

import { h2, p, section } from '../design-system';
import SocialLink from './SocialLinks';

interface AboutUsProps {
  title: string;
  subTitle: string;
  paragraph: string;
  text: string;
  basePath?: string;
}

export default function AboutUs({
  title,
  subTitle,
  paragraph,
  text,
  basePath = '',
}: AboutUsProps) {
  return (
    <div className='pb-9 md:pb-16'>
      <span className='relative bottom-[136px] h-0 w-0 opacity-0' id='about' />
      <motion.section
        initial={{
          opacity: 0,
          y: -50,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={cn(
          section,
          'ld:gap-8 flex flex-col items-start justify-between gap-4 lg:w-full lg:flex-row lg:items-center',
        )}
      >
        <Image
          src={AboutUsImage}
          alt={'Migacz Borthers team during a meeting'}
          className='w-full max-w-[655px] rounded-lg grayscale transition-all duration-300 hover:scale-[1.01] hover:grayscale-0 md:rounded-2xl'
          quality={100}
        />
        <div className='max-w-[445px]'>
          <div>
            <h2 className={cn(h2, '-mb-[2px]')}>{title}</h2>
            <h3
              className={
                'font-header text-base leading-header text-main md:text-lg'
              }
            >
              {subTitle}
            </h3>
            <p className={cn(p, 'mt-2 lg:mb-[41px] lg:mt-[24px] ')}>
              {paragraph}
            </p>
          </div>

          <ul className='flex gap-[6px] pt-2 lg:gap-2'>
            <SocialLink
              className='bg-[#3367CC]'
              i={1}
              href='https://www.behance.net/MigaczBrothers'
            >
              <BehanceIcon strokeWidth={1.5} />
            </SocialLink>
            <SocialLink
              className='bg-[#2966A3]'
              i={2}
              href='https://www.linkedin.com/company/migacz-brothers'
            >
              <Linkedin size={32} strokeWidth={1.5} />
            </SocialLink>
            <SocialLink
              className='bg-[#7F55B6]'
              i={3}
              href='https://www.instagram.com/migaczbrothers/'
            >
              <Instagram size={32} strokeWidth={1.5} />
            </SocialLink>
            <SocialLink
              className='bg-[#B35598]'
              i={4}
              href='https://dribbble.com/MigaczBrothers'
            >
              <Dribbble size={32} strokeWidth={1.5} />
            </SocialLink>
            <SocialLink
              className='flex-1 bg-[#F4F4F4] pr-2 text-[#121212]'
              text={text}
              i={5}
              href={basePath + '/about'}
              samePage
            >
              <BookOpen size={32} strokeWidth={1.5} />
            </SocialLink>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
