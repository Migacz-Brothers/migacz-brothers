'use client';

import Image from 'next/image';
import { Project } from '@/generated';
import urlBuilder from '@/sanity/lib/sanity-image-builder';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';

interface PortfolioDataLayerProps {
  project: Project;
}

const portable_text_components: Partial<PortableTextReactComponents> = {
  types: {
    image: (data) => {
      const { width, height } = getImageDimensions(data.value);
      return (
        <h2>
          <Image
            src={urlBuilder.image(data.value).url()}
            alt=''
            width={width}
            height={height}
            quality={100}
          />
          data.value.asset. {JSON.stringify(urlBuilder.image(data.value).url())}
        </h2>
      );
    },
  },
};

export default function PortfolioDataLayer({
  project,
}: PortfolioDataLayerProps) {
  return (
    <>
      <PortableText
        value={project.body?.ptRaw}
        components={portable_text_components}
      />
      <div className='grid grid-cols-2 gap-4'>
        <ul className='flex flex-col gap-4'>
          {project.image_column_1?.map((image, i) => (
            <li
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
            </li>
          ))}
        </ul>
        <ul className='flex flex-col gap-4'>
          {project.image_column_2?.map((image, i) => (
            <li
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
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
