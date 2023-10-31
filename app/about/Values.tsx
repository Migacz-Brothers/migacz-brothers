'use client';

import cn from 'clsx';
import { motion } from 'framer-motion';

import { h2, p, section } from '@/components/design-system';
import HeartHandShakeIcon from '@/components/svgs/HeartHandShakeIcon';
import HelpCircleIcon from '@/components/svgs/HelpCircleIcon';
import ShieldCheckIcon from '@/components/svgs/ShieldCheckIcon';
import SpeetchIcon from '@/components/svgs/SpeetchIcon';

export default function Values() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={cn(section, 'flex flex-col items-start !max-w-[916px]')}
    >
      <h2 className={cn(h2, 'md:mb-16 mb-4')}>The Values</h2>
      <ul className='grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-6 '>
        <IndividualValue
          icon={<SpeetchIcon />}
          title={'Get Real'}
          paragraph={
            'We believe the best and mot authentic work happens when everyone is free to speak about anything at anytime.'
          }
          delay={0.2}
        />
        <IndividualValue
          icon={<HeartHandShakeIcon />}
          title={'Never drop a cliente'}
          paragraph={
            'We create everything with long-term maintenance in mind. Once you become our client, we make a commitment to never let you down.'
          }
          delay={0.3}
        />
        <IndividualValue
          icon={<HelpCircleIcon />}
          title={'Be not afraid of the unknown'}
          paragraph={
            'Everything changes, and it happens faster on this industry. We say yes to projects even if we are not sure how to do some parts of it.'
          }
          delay={0.4}
        />
        <IndividualValue
          icon={<ShieldCheckIcon />}
          title={'We have high standards'}
          paragraph={
            'Every product we create has to be approved by our team. We wanna be know for our quality, and that`s our main goal.'
          }
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
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: delay }}
    >
      <div className='grid place-items-center hero-background rounded-lg mb-4 md:mb-8 w-[50px] md:w-16 h-[50px] md:h-16'>
        {icon}
      </div>
      <h3 className='md:text-[32px] text-xl font-semibold font-body md:mb-6 mb-2 leading-header'>
        {title}
      </h3>
      <p className={cn(p, '!text-main-foreground font-medium leading-body')}>
        {paragraph}
      </p>
    </motion.li>
  );
};
