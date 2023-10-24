'use client';

//////LibraryImports
import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import cn from 'clsx';
import { section } from '../design-system';

//////IconsImports
import CompanyLogo from '../svgs/CompanyLogo';
import BurguerMobileIcon from '../svgs/BurguerMobileIcon';
import BehanceMobileIcon from '../svgs/BehanceMobileIcon';
import LinkedinMobileIcon from '../svgs/LinkedinMobileIcon';
import DribbbleMobileIcon from '../svgs/DribbbleMobileIcon';
import InstagramMobileIcon from '../svgs/InstagramMobileIcon';
import Supernav from '../Supernav';

interface NavbarProps {
  home?: boolean;
}

export default function Navbar({ home = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrolled(latest > 0);
  });

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* nav desktop */}
      {!mobileOpen ? <Supernav /> : null}
      <nav
        className={cn(
          // 'w-full fixed top-0 left-0 py-6 z-[9999] duration-500',
          'w-full fixed top-0 left-0 z-[9999] duration-500 py-6',
          scrolled && !mobileOpen ? 'navbar-scrolled-bg' : ''
        )}
      >
        <motion.div
          className={cn(section, 'flex justify-between')}
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <a href={(home ? '' : '/') + '#home'} onClick={closeNavbar}>
            <CompanyLogo className='w-[72px] h-[31px] md:w-[90px] md:h-[38px]' />
          </a>

          <ul className='md:flex items-center gap-12 hidden'>
            <NavLink href={(home ? '' : '/') + '#home'}>Home</NavLink>
            <NavLink href={(home ? '' : '/') + '#about'}>About Us</NavLink>
            <NavLink href={(home ? '' : '/') + '#portfolio'}>
              Portofolio
            </NavLink>
            <li>
              <a
                href={(home ? '' : '/') + '#contact'}
                className='w-[178px] h-10 nav-background grid place-items-center rounded text-lg font-semibold'
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* nav mobile */}
          <button
            className={cn(
              'md:hidden flex burguer-menu',
              mobileOpen ? 'burguer-menu-open' : 'burguer-menu-closed'
            )}
            onClick={toggleMenu}
          >
            <BurguerMobileIcon />
          </button>
        </motion.div>
      </nav>
      {/* mobile navmenu */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className='fixed h-full w-full top-0 left-0 text-center bg-[#050505] flex flex-col z-50 justify-center md:hidden pt-[79px]'
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <ul className='flex flex-col gap-8 mb-10'>
              <NavMobileLink
                href={(home ? '' : '/') + '#home'}
                onClick={closeNavbar}
                delay={0.1}
              >
                Home
              </NavMobileLink>
              <NavMobileLink
                href={(home ? '' : '/') + '#about'}
                onClick={closeNavbar}
                delay={0.2}
              >
                About Us
              </NavMobileLink>
              <NavMobileLink
                href='#portfolio'
                onClick={closeNavbar}
                delay={0.3}
              >
                Portfolio
              </NavMobileLink>
              <NavMobileLink
                href={(home ? '' : '/') + '#contact'}
                onClick={closeNavbar}
                delay={0.3}
              >
                Contact Us
              </NavMobileLink>
              <li>
                <ul className='flex justify-center items-center'>
                  <motion.li
                    initial={{
                      y: 60,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                  >
                    <Link href='#' onClick={closeNavbar} target='_blank'>
                      <BehanceMobileIcon />
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{
                      y: 60,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                  >
                    <Link href='#' onClick={closeNavbar} target='_blank'>
                      <InstagramMobileIcon />
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{
                      y: 60,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.6,
                    }}
                  >
                    <Link href='#' onClick={closeNavbar} target='_blank'>
                      <LinkedinMobileIcon />
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{
                      y: 60,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.7,
                    }}
                  >
                    <Link href='#' onClick={closeNavbar} target='_blank'>
                      <DribbbleMobileIcon />
                    </Link>
                  </motion.li>
                </ul>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

interface NavLinkProps {
  children: string;
  href: string;
}

const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <li>
      <a
        href={href}
        className='inline-block text-[#ffffff] font-header font-medium text-lg group'
      >
        {children}
        <div className='h-[2px] w-full nav-background rounded-[50px] opacity-0 group-hover:opacity-100 duration-200' />
      </a>
    </li>
  );
};

interface NavMobileLinkProps {
  children: string;
  href: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
  delay: number;
}

const NavMobileLink = ({
  children,
  href,
  onClick,
  delay,
}: NavMobileLinkProps) => {
  return (
    <motion.li
      initial={{
        y: 60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: delay,
      }}
    >
      <a
        href={href}
        className='inline-block text-[#ffffff] font-header font-semibold text-[54px]'
        onClick={onClick}
      >
        {children}
      </a>
    </motion.li>
  );
};
