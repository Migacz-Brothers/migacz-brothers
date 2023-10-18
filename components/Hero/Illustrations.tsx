'use client';

import { h1, p, section } from '@/components/design-system';
import cn from 'clsx';
import Image from 'next/image';

import hero1 from '@/public/hero/1.png';
import hero2 from '@/public/hero/2.png';
import hero3 from '@/public/hero/3.png';
import hero4 from '@/public/hero/4.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const imagesList = [hero1, hero2, hero3, hero4];

interface IllustrationsProps {
  className: string;
}

export default function Illustrations({ className }: IllustrationsProps) {
  const [current, setCurrent] = useState(0);
  const list = [...imagesList, ...imagesList];

  const nextIllustration = () => {
    setCurrent((curr) => (curr - 1) % 8);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextIllustration();
    }, 4000);

    return () => clearInterval(intervalId); //This is important
  }, []);

  return (
    <aside
      className={cn(
        'max-w-full w-[445px] md:h-[580px] md:aspect-auto aspect-[89/116] hero-background md:rounded-2xl rounded-lg grid place-items-center overflow-hidden',
        className
      )}
    >
      <ul className='relative w-[47.6%] h-full grid place-items-center'>
        <AnimatePresence>
          {list.map((image, key) => {
            const position = (key - current) % 8;

            if (position < 0 || position > 3) return null;

            const dislocation = 27 - position * 18;
            const darkness = position === 3 ? 100 : 40 + position * 10;

            return (
              <motion.li
                className='rounded-[4px] absolute overflow-hidden'
                initial={{
                  opacity: 0,
                  x: 300,
                  y: dislocation,
                  filter: `brightness(${darkness}%)`,
                  zIndex: 1,
                }}
                transition={{
                  delay: position === 0 ? 0.2 : 0,
                  type: 'linear',
                }}
                animate={{
                  x: dislocation,
                  y: dislocation,
                  filter: `brightness(${darkness}%)`,
                  opacity: 1,
                  zIndex: position,
                }}
                exit={{
                  y: -27,
                  opacity: 0,
                  x: -300,
                  zIndex: 20,
                  transition: {
                    ease: 'circOut',
                  },
                }}
                key={`hero_${key}`}
              >
                <Image
                  width={212}
                  height={458}
                  src={image}
                  alt='ASDOSDGFSD'
                  quality={100}
                  // onClick={() => {
                  // }}
                />
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </aside>
  );
}
