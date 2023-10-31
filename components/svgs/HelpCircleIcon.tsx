import { motion } from 'framer-motion';

export default function HelpCircleIcon() {
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
      className='lucide lucide-help-circle md:w-8 w-6'
    >
      <circle cx='12' cy='12' r='10' />
      <motion.path
        d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'
        animate={{
          opacity: [1, 1, 1, 0, 0],
          pathLength: [0, 1, 1, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          times: [0, 0.3, 0.85, 0.9, 1],
          duration: 2,
        }}
      />
      <motion.path
        d='M12 17h.01'
        animate={{
          opacity: [0, 0, 1, 0, 0],
        }}
        transition={{
          repeat: Infinity,
          times: [0, 0.3, 0.85, 0.9, 1],
          duration: 2,
        }}
      />
    </svg>
  );
}
