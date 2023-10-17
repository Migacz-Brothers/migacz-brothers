'use client';

//////LibraryImports
import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';
//////LibraryImports

//////IconsImports
import NavbarIcon from '../svgs/NavbarIcon';
import BurguerMobileIcon from '../svgs/BurguerMobileIcon';
import BehanceMobileIcon from '../svgs/BehanceMobileIcon';
import LinkedinMobileIcon from '../svgs/LinkedinMobileIcon';
import DribbbleMobileIcon from '../svgs/DribbbleMobileIcon';
import InstagramMobileIcon from '../svgs/InstagramMobileIcon';
//////IconsImports

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* nav desktop */}
      <nav className='w-full bg-[#ffffff10] fixed top-0 left-0 py-6 z-[9999]'>
        <div className='max-w-[1264px] mx-auto lg:px-4 px-8 flex justify-between'>
          <Link href={'#'}>
            <NavbarIcon />
          </Link>

          <ul className='md:flex items-center gap-12 hidden'>
            <NavLinks href='#' onClick={closeNavbar}>
              Home
            </NavLinks>
            <NavLinks href='#' onClick={closeNavbar}>
              About Us
            </NavLinks>
            <NavLinks href='#' onClick={closeNavbar}>
              Portofolio
            </NavLinks>
            <Link
              href={'#'}
              className='w-[178px] h-10 nav-background grid place-items-center rounded text-lg font-semibold'
            >
              Contact Us
            </Link>
          </ul>
          {/* nav desktop */}

          {/* nav mobile */}
          <button className='md:hidden flex' onClick={toggleMenu}>
            <BurguerMobileIcon />
          </button>
          {/* nav mobile */}
        </div>
      </nav>

      {/* mobile navmenu */}
      <div>
        {mobileOpen ? (
          <div className='fixed h-full w-full top-0 left-0 text-center bg-[#050505] flex flex-col z-50 justify-center md:hidden'>
            <ul className='flex flex-col gap-8 mb-10'>
              <NavMobileLinks href='#' onClick={closeNavbar}>
                Home
              </NavMobileLinks>
              <NavMobileLinks href='#' onClick={closeNavbar}>
                About Us
              </NavMobileLinks>
              <NavMobileLinks href='#' onClick={closeNavbar}>
                Portfolio
              </NavMobileLinks>
            </ul>
            <ul>
              <li className='flex justify-center items-center'>
                <Link href='#'>
                  <BehanceMobileIcon />
                </Link>
                <Link href='#'>
                  <InstagramMobileIcon />
                </Link>
                <Link href='#'>
                  <LinkedinMobileIcon />
                </Link>
                <Link href='#'>
                  <DribbbleMobileIcon />
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      {/* mobile navmenu */}
    </>
  );
}

interface NavLinksProps {
  children: string;
  href: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

const NavLinks = ({ children, href, onClick }: NavLinksProps) => {
  return (
    <li>
      <Link
        href={href}
        className='inline-block text-[#ffffff] font-header font-medium text-lg group'
        onClick={onClick}
      >
        {children}
        <div className='h-[2px] w-full nav-background rounded-[50px] opacity-0 group-hover:opacity-100 duration-200' />
      </Link>
    </li>
  );
};

interface NavMobileLinksProps {
  children: string;
  href: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

const NavMobileLinks = ({ children, href, onClick }: NavMobileLinksProps) => {
  return (
    <li>
      <Link
        href={href}
        className='inline-block text-[#ffffff] font-header font-semibold text-[54px]'
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};
