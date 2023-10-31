import { h2, section } from '@/components/design-system';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import PedroImage from './images/PedroImage.png';
import GustavoImage from './images/GustavoImage.png';
import KarlaImage from './images/KarlaImage.png';
import ArthurImage from './images/ArthurImage.png';
import CharlieImage from './images/CharlieImage.png';

export default function Team() {
  return (
    <section className={section}>
      <h2 className={h2}>The Team</h2>
      <ul className='grid md:grid-cols-3 sml:grid-cols-2 grid-cols-1 gap-4'>
        <Card src={PedroImage} title={'Pedro Migacz'} role={'BACKEND DEV'} />
        <Card
          src={GustavoImage}
          title={'Gustavo Migacz'}
          role={'FRONTEND DEV'}
        />
        <Card
          src={KarlaImage}
          title={'Karla Machado'}
          role={'UX/UI DESIGNER'}
        />
        <Card
          src={ArthurImage}
          title={'Arthur Franceschini'}
          role={'MARKETING SPECIALIST'}
        />
        <Card src={CharlieImage} title={'Charlie'} role={'PET'} />
      </ul>
    </section>
  );
}

interface CardProps {
  src: string | StaticImport;
  title: string;
  role: string;
}

const Card = ({ src, title, role }: CardProps) => {
  return (
    <li>
      <Image src={src} alt={''} className='rounded-2xl mb-1 md:max-w-full' />
      <h3 className='font-header font-extralight leading-header md:text-2xl text-xl mb-2'>
        {title}
      </h3>
      <span className='font-body font-medium leading-header tracking-[3.2px] md:text-base text-xs'>
        {role}
      </span>
    </li>
  );
};
