'use client';

import Image from 'next/image';
import { Project } from '@/generated';
import urlBuilder from '@/sanity/lib/sanity-image-builder';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import cn from 'clsx';
import { motion } from 'framer-motion';

import { project_section } from '@/components/design-system';

interface PortfolioDataLayerProps {
  project: Project;
  lang: 'pt' | 'en' | 'es';
}

const portable_text_components: Partial<PortableTextReactComponents> = {
  types: {
    image: (data) => {
      const { width, height } = getImageDimensions(data.value);
      return (
        <Image
          src={urlBuilder.image(data.value).url()}
          alt=''
          width={width}
          height={height}
          quality={100}
          className='mb-8'
        />
      );
    },
  },
  block: {
    h3: ({ children }) => {
      return (
        <h3
          className={cn(
            project_section,
            'font-header text-2xl font-normal leading-header md:text-[32px]',
          )}
        >
          {children}
        </h3>
      );
    },
    normal: ({ children }) => {
      return (
        <p
          className={cn(
            project_section,
            'mb-8 font-body text-lg font-light leading-body_tight md:text-xl',
          )}
        >
          {children}
        </p>
      );
    },
  },
};

export default function ProjectContent({
  project,
  lang,
}: PortfolioDataLayerProps) {
  const val =
    lang === 'pt'
      ? project.body?.ptRaw
      : lang === 'en'
        ? project.body?.enRaw
        : project.body?.esRaw;
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
      >
        <PortableText value={val} components={portable_text_components} />
      </motion.div>
      <div className='mb-4 grid gap-4 md:mb-8 md:grid-cols-2'>
        <ul className='flex flex-col gap-4'>
          {project.image_column_1?.map((image, i) => (
            <motion.li
              initial={{
                opacity: 0,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              key={`column_1_image_${i}`}
              className='overflow-hidden rounded-2xl'
            >
              <Image
                src={String(image?.asset?.url)}
                alt={''}
                width={504}
                height={504}
                quality={100}
              />
            </motion.li>
          ))}
        </ul>
        <ul className='flex flex-col gap-4'>
          {project.image_column_2?.map((image, i) => (
            <motion.li
              initial={{
                opacity: 0,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              key={`column_2_image_${i}`}
              className='overflow-hidden rounded-2xl'
            >
              <Image
                src={String(image?.asset?.url)}
                alt={''}
                width={504}
                height={504}
                quality={100}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
