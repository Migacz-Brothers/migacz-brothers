import { h1, section } from '@/components/design-system';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import cn from 'clsx';
import Image from 'next/image';

import MBAbout from '@/public/images/MBAbout.png';
import PlantAbout from '@/public/images/PlantAbout.png';
import PedroAbout from '@/public/images/PedroAbout.png';
import GustavoAbout from '@/public/images/GustavoAbout.png';
import MB2About from '@/public/images/MB2About.png';
import CharlieAbout from '@/public/images/CharlieAbout.png';

export default function AboutUsSection() {
  return (
    <section className={section}>
      <h1 className={cn(h1, 'md:mb-16 mb-4')}>About US</h1>
      <ul className='grid md:grid-cols-4 grid-cols-2 lg:gap-4 md:gap-3 gap-2'>
        <Card src={MBAbout} className='col-span-2' />
        <Card src={PlantAbout} className='md:inline-block hidden' />
        <Card src={PedroAbout} />
        <Card src={GustavoAbout} className='md:inline-block hidden' />
        <Card src={MB2About} className='col-span-2 md:inline-block hidden' />
        <Card src={CharlieAbout} />
      </ul>
    </section>
  );
}

interface CardProps {
  src: string | StaticImport;
  className?: string;
  alt?: string;
}

const Card = ({ src, className }: CardProps) => {
  return (
    <li className={className}>
      <Image
        src={src}
        alt={'Our Team Migacz Brothers.'}
        className={cn('rounded-[4px] w-full h-full object-cover')}
      />
    </li>
  );
};
