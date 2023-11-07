import { motion } from 'framer-motion';

export default function ShieldCheckIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-shield-check md:w-8 w-6'
    >
      <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10' />
      <motion.path
        d='m9 12 2 2 4-4'
        animate={{
          opacity: [1, 1, 1, 0, 0],
          pathLength: [0, 1, 1, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          times: [0, 0.3, 0.6, 0.7, 1],
          duration: 2,
        }}
      />
    </svg>
  );
}
