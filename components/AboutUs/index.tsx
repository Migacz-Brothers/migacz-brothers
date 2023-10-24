'use client';

////////////Images and Svgs
import AboutUsImage from '@/public/images/AboutUsImage.png';
import { BookOpen, Dribbble, Instagram, Linkedin } from 'lucide-react';
import BehanceIcon from '@/components/svgs/BehanceIcon';

////////////Images and Svgs
import Image from 'next/image';
import cn from 'clsx';
import { h2, p, section } from '../design-system';
import SocialLink from './SocialLinks';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <div className='light-noise-background md:pb-16 pb-9'>
      <span className='opacity-0 h-0 w-0 relative bottom-[136px]' id='about' />
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
          'flex lg:flex-row flex-col justify-between ld:gap-8 gap-4 items-start lg:items-center lg:w-full'
        )}
      >
        <Image
          src={AboutUsImage}
          alt={'Migacz Borthers team during a meeting'}
          className='md:rounded-2xl rounded-lg transition-all duration-300 w-full max-w-[655px] grayscale hover:grayscale-0 hover:scale-[1.01]'
          quality={100}
        />
        <div className='max-w-[445px]'>
          <div>
            <h2 className={cn(h2, '-mb-[2px]')}>About Us</h2>
            <h3
              className={
                'font-header text-main leading-header text-base md:text-lg'
              }
            >
              Design & Code
            </h3>
            <p className={cn(p, 'mt-2 lg:mt-[24px] lg:mb-[41px] ')}>
              We are a small cooperative company from South Brazil with an
              international team of professionals who have joined forces to
              create unique products for the web.
            </p>
          </div>

          <ul className='flex lg:gap-2 gap-[6px] pt-2'>
            <SocialLink className='bg-[#3367CC]' i={1} href=''>
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
            <SocialLink className='bg-[#B35598]' i={4} href=''>
              <Dribbble size={32} strokeWidth={1.5} />
            </SocialLink>
            <SocialLink
              className='bg-[#F4F4F4] text-[#121212] pr-2 flex-1'
              text='Or read more'
              i={5}
              href='/about'
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
