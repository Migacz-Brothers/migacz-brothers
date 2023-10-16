'use client';

import Link from 'next/link';
import NavbarIcon from '../svgs/NavbarIcon';

export default function Navbar() {
  return (
    <>
      {/* nav desktop */}
      <nav className='w-full bg-[#ffffff10] fixed z-50 top-0 left-0 py-6'>
        <div className='max-w-[1264px] mx-auto lg:px-4 px-8 flex justify-between'>
          <div className=''>
            <NavbarIcon />
          </div>
          <ul className='flex items-center gap-12'>
            <NavLinks>Home</NavLinks>
            <NavLinks>About Us</NavLinks>
            <NavLinks>Portofolio</NavLinks>
            <Link
              href={'#'}
              className='w-[178px] h-10 nav-background grid place-items-center rounded text-lg font-semibold'
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </nav>
      {/* nav desktop */}

      {/* nav mobile */}
      <div></div>
      {/* nav mobile */}
    </>
  );
}

interface NavLinksProps {
  children: string;
}

const NavLinks = ({ children }: NavLinksProps) => {
  return (
    <li>
      <Link
        href={'#'}
        className='inline-block text-[#ffffff] font-header font-medium text-lg group'
      >
        {children}
        <div className='h-[2px] w-full nav-background rounded-[50px] opacity-0 group-hover:opacity-100 duration-200' />
      </Link>
    </li>
  );
};
