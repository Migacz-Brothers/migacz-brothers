import Link from 'next/link';
import NavbarIcon from '../svgs/NavbarIcon';
import { Dribbble, Instagram, Linkedin } from 'lucide-react';
import BehanceIcon from '../svgs/BehanceIcon';
import cn from 'clsx';

export default function Footer() {
  return (
    <footer className='my-5'>
      <div className='max-w-[1232px] mx-auto md:px-4 px-8 '>
        <div className='flex lg:flex-row flex-col justify-between lg:items-center items-start mb-6 gap-8'>
          <a href={'#'} className='order-none'>
            <NavbarIcon className='w-[99px] h-[41px]' />
          </a>
          <ul className='flex gap-8 lg:order-none order-3'>
            <li>
              <Link
                href='#'
                target='_blank'
                className='grid place-items-center w-full h-full'
              >
                <Instagram strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href='#'
                target='_blank'
                className='grid place-items-center w-full h-full'
              >
                <BehanceIcon strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href='#'
                target='_blank'
                className='grid place-items-center w-full h-full'
              >
                <Linkedin strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href='#'
                target='_blank'
                className='grid place-items-center w-full h-full'
              >
                <Dribbble strokeWidth={1.5} />
              </Link>
            </li>
          </ul>
          <ul className='flex gap-8 font-header text-lg lg:order-none order-2'>
            <LangagueButton current href='#'>
              EN
            </LangagueButton>
            <LangagueButton href='/pt'>PT</LangagueButton>
          </ul>
          <ul className='flex gap-8 lg:flex-row flex-col lg:order-none order-1'>
            <FooterLink href='#home'>Home</FooterLink>
            <FooterLink href='#about'>About Us</FooterLink>
            <FooterLink href='#portfolio'>Portofolio</FooterLink>
            <FooterLink href='#portfolio'>Contact Us</FooterLink>
          </ul>
        </div>
        <div>
          <hr className='h-[2px] inline-block w-full border-0 horizontal-background mb-6' />
          <div className='lg:text-right text-start font-body text-sm'>
            <a href='' className='font-body text-[#FAFAFA] mb-1'>
              Migacz Brothers © Todos os direitos reservados.
            </a>
            <h3 className='text-accent_white'>CNPJ 48.546.424/0001-82</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  children: string;
  href: string;
}

const FooterLink = ({ children, href }: FooterLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className='inline-block text-accent_white font-header font-medium md:text-lg text-sm group'
      >
        {children}
        <div className='h-[2px] w-full nav-background rounded-[50px] opacity-0 group-hover:opacity-100 duration-200' />
      </Link>
    </li>
  );
};

interface LangagueButtonProps {
  children: string;
  href: string;
  current?: boolean;
}

const LangagueButton = ({
  children,
  href,
  current = false,
}: LangagueButtonProps) => {
  return (
    <li>
      <Link
        href={href}
        className='gradient-language-bold duration-300 inline-block group'
      >
        {children}
        <div
          className={cn(
            'h-[2px] w-full nav-background rounded-[50px] opacity-0 group-hover:opacity-100 duration-300',
            current ? 'opacity-100' : ''
          )}
        />
      </Link>
    </li>
  );
};
