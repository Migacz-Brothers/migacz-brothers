'use client';

//////LibraryImports
import { MouseEventHandler, useState } from 'react';
import Link from 'next/link';
import cn from 'clsx';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';

import { section } from '../design-system';
import Supernav from '../Supernav';
import BehanceMobileIcon from '../svgs/BehanceMobileIcon';
import BurguerMobileIcon from '../svgs/BurguerMobileIcon';
//////IconsImports
import CompanyLogo from '../svgs/CompanyLogo';
import DribbbleMobileIcon from '../svgs/DribbbleMobileIcon';
import InstagramMobileIcon from '../svgs/InstagramMobileIcon';
import LinkedinMobileIcon from '../svgs/LinkedinMobileIcon';

interface NavbarProps {
  home?: boolean;
  homeButton: string;
  aboutUsButton: string;
  portfolioButton: string;
  contactButton: string;
}

export default function Navbar({
  home = false,
  homeButton,
  aboutUsButton,
  portfolioButton,
  contactButton,
}: NavbarProps) {
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
          'fixed left-0 top-0 z-[9999] w-full py-6 duration-500',
          scrolled && !mobileOpen ? 'navbar-scrolled-bg' : '',
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
            <CompanyLogo className='h-[31px] w-[72px] md:h-[38px] md:w-[90px]' />
          </a>

          <ul className='hidden items-center gap-12 md:flex'>
            <NavLink href={(home ? '' : '/') + '#home'}>{homeButton}</NavLink>
            <NavLink href={(home ? '' : '/') + '#about'}>
              {aboutUsButton}
            </NavLink>
            <NavLink href={(home ? '' : '/') + '#portfolio'}>
              {portfolioButton}
            </NavLink>
            <li>
              <a
                href={(home ? '' : '/') + '#contact'}
                className='nav-background grid h-10 w-[178px] place-items-center rounded text-lg font-semibold'
              >
                {contactButton}
              </a>
            </li>
          </ul>

          {/* nav mobile */}
          <button
            className={cn(
              'burguer-menu flex md:hidden',
              mobileOpen ? 'burguer-menu-open' : 'burguer-menu-closed',
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
            className='fixed left-0 top-0 z-50 flex h-full w-full flex-col justify-center bg-[#050505] pt-[79px] text-center md:hidden'
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
            <ul className='mb-10 flex flex-col gap-8'>
              <NavMobileLink
                href={(home ? '' : '/') + '#home'}
                onClick={closeNavbar}
                delay={0.1}
              >
                {homeButton}
              </NavMobileLink>
              <NavMobileLink
                href={(home ? '' : '/') + '#about'}
                onClick={closeNavbar}
                delay={0.2}
              >
                {aboutUsButton}
              </NavMobileLink>
              <NavMobileLink
                href={(home ? '' : '/') + '#portfolio'}
                onClick={closeNavbar}
                delay={0.3}
              >
                {portfolioButton}
              </NavMobileLink>
              <NavMobileLink
                href={(home ? '' : '/') + '#contact'}
                onClick={closeNavbar}
                delay={0.3}
              >
                {contactButton}
              </NavMobileLink>
              <li>
                <ul className='flex items-center justify-center'>
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
        className='group inline-block font-header text-lg font-medium text-[#ffffff]'
      >
        {children}
        <div className='nav-background h-[2px] w-full rounded-[50px] opacity-0 duration-200 group-hover:opacity-100' />
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
        className='inline-block font-header text-[54px] font-semibold text-[#ffffff]'
        onClick={onClick}
      >
        {children}
      </a>
    </motion.li>
  );
};
