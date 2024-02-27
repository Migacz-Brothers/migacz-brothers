'use client';

import { motion } from 'framer-motion';

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: 'translateX(-10%) translateY(-10%)', opacity: 0 }}
      animate={{
        transform: 'translateX(10%) translateY(10%)',
        opacity: 0.2,
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
        backgroundImage: 'url("/white_noise.png")',
      }}
      className='pointer-events-none absolute -inset-[100%] z-10 opacity-10'
    />
  );
};

export default FuzzyOverlay;
