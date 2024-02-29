'use client';

import cn from 'clsx';
import { motion } from 'framer-motion';

import { h2, p, section } from '@/components/design-system';
import HeartHandShakeIcon from '@/components/svgs/HeartHandShakeIcon';
import HelpCircleIcon from '@/components/svgs/HelpCircleIcon';
import ShieldCheckIcon from '@/components/svgs/ShieldCheckIcon';
import SpeetchIcon from '@/components/svgs/SpeetchIcon';

interface ValuesProps {
  title: string;
  subTitle_1: string;
  subTitle_2: string;
  subTitle_3: string;
  subTitle_4: string;
  paragraph_1: string;
  paragraph_2: string;
  paragraph_3: string;
  paragraph_4: string;
}

export default function Values({
  title,
  subTitle_1,
  subTitle_2,
  subTitle_3,
  subTitle_4,
  paragraph_1,
  paragraph_2,
  paragraph_3,
  paragraph_4,
}: ValuesProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={cn(
        section,
        'mb-12 flex !max-w-[916px] flex-col items-start md:mb-64',
      )}
    >
      <h2 className={cn(h2, 'mb-4 md:mb-16')}>{title}</h2>
      <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 '>
        <IndividualValue
          icon={<SpeetchIcon />}
          title={subTitle_1}
          paragraph={paragraph_1}
          delay={0.2}
        />
        <IndividualValue
          icon={<ShieldCheckIcon />}
          title={subTitle_4}
          paragraph={paragraph_4}
          delay={0.3}
        />
        <IndividualValue
          icon={<HelpCircleIcon />}
          title={subTitle_3}
          paragraph={paragraph_3}
          delay={0.4}
        />
        <IndividualValue
          icon={<HeartHandShakeIcon />}
          title={subTitle_2}
          paragraph={paragraph_2}
          delay={0.5}
        />
      </ul>
    </motion.section>
  );
}

interface IndividualValueProps {
  icon: JSX.Element;
  title: string;
  paragraph: string;
  delay: number;
}

const IndividualValue = ({
  icon,
  title,
  paragraph,
  delay,
}: IndividualValueProps) => {
  return (
    <motion.li
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: delay }}
    >
      <div className='hero-background mb-4 grid h-[50px] w-[50px] place-items-center rounded-lg md:mb-8 md:h-16 md:w-16'>
        {icon}
      </div>
      <h3 className='mb-2 font-body text-xl font-semibold leading-header md:mb-6 md:text-[32px]'>
        {title}
      </h3>
      <p className={cn(p, '!text-main-foreground font-medium leading-body')}>
        {paragraph}
      </p>
    </motion.li>
  );
};
