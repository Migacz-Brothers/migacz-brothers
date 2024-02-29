'use client';

import white_noise_bg from '@/public/white_noise.png';
import { motion } from 'framer-motion';

const FuzzyOverlay = () => {
  return (
    <div className='pointer-events-none fixed top-0 z-[-1] h-screen w-full overflow-hidden'>
      <motion.div
        initial={{ transform: 'translateX(-10%) translateY(-10%)', opacity: 0 }}
        animate={{
          transform: 'translateX(10%) translateY(10%)',
          opacity: 0.1,
        }}
        transition={{
          transform: {
            repeat: Infinity,
            duration: 0.2,
            ease: 'linear',
            repeatType: 'mirror',
          },
          opacity: {
            duration: 0.5,
            repeat: 0,
          },
        }}
        style={{
          backgroundImage: `url("${white_noise_bg.src}")`,
        }}
        className='absolute -inset-[100%]'
      />
    </div>
  );
};

export default FuzzyOverlay;
