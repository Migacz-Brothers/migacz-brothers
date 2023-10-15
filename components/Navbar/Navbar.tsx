'use client';

import Link from 'next/link';
import NavbarIcon from '../svgs/NavbarIcon';

export default function Navbar() {
  return (
    <nav>
      <div className='max-w-[1264px] mx-auto lg:px-4 px-8 flex justify-between my'>
        <div className='cursor-pointer'>
          <NavbarIcon />
        </div>
        <ul className='flex items-center gap-12'>
          <NavLinks>Home</NavLinks>
          <NavLinks>About Us</NavLinks>
          <NavLinks>Portofolio</NavLinks>
          <Link
            href={''}
            className='w-[178px] h-10 nav-background grid place-items-center rounded text'
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </nav>
  );
}

interface NavLinksProps {
  children: string;
}

const NavLinks = ({ children }: NavLinksProps) => {
  return (
    <li>
      <Link
        href={''}
        className='text-[#ffffff] font-header hover:font-bold font-medium text-lg'
      >
        {children}
        <div className='h-[2px] w-full nav-background rounded-[50px]' />
      </Link>
    </li>
  );
};
