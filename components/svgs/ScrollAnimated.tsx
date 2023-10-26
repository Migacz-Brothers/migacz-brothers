'use client';
import { motion } from 'framer-motion';

export default function ScrollAnimated() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-mouse'
    >
      <rect x='5' y='2' width='14' height='20' rx='7' />
      <motion.path
        d='M12 6v4'
        animate={{
          y: [0, 0, 6, 0, 0],
          opacity: [1, 1, 0, 0, 1],
        }}
        transition={{
          repeat: Infinity,
          times: [0, 0.5, 0.6, 0.8, 1],
          duration: 2,
        }}
      />
    </svg>
  );
}
