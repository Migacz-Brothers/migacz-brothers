import Link from 'next/link';
import CompanyLogo from '../svgs/CompanyLogo';
import { Dribbble, Instagram, Linkedin } from 'lucide-react';
import BehanceIcon from '../svgs/BehanceIcon';
import cn from 'clsx';
import { section } from '../design-system';

export default function Footer() {
  return (
    <footer className='my-5'>
      <div className={section}>
        <div className='flex lg:flex-row flex-col justify-between lg:items-center items-start mb-6 gap-8'>
          <a href={'/#home'} className='order-none'>
            <CompanyLogo className='w-[99px] h-[41px]' />
          </a>
          <ul className='flex gap-8 lg:order-none order-3'>
            <li>
              <Link
                href='#'
                target='_blank'
                className='grid place-items-center w-6 h-6'
              >
                <Instagram strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href='#'
                target='_blank'
                className='grid place-items-center w-6 h-6'
              >
                <BehanceIcon strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href='#'
                target='_blank'
                className='grid place-items-center w-6 h-6'
              >
                <Linkedin strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href='#'
                target='_blank'
                className='grid place-items-center w-6 h-6'
              >
                <Dribbble strokeWidth={1.5} />
              </Link>
            </li>
          </ul>
          <ul className='flex gap-8 font-header text-lg lg:order-none order-2'>
            <LanguageLink current href='#'>
              EN
            </LanguageLink>
            <LanguageLink href='/pt'>PT</LanguageLink>
            <LanguageLink href='/es'>ES</LanguageLink>
          </ul>
          <ul className='flex lg:gap-8 gap-4 lg:flex-row flex-col lg:order-none order-1'>
            <FooterLink href='#home'>Home</FooterLink>
            <FooterLink href='#about'>About Us</FooterLink>
            <FooterLink href='#portfolio'>Portofolio</FooterLink>
            <FooterLink href='#portfolio'>Contact Us</FooterLink>
          </ul>
        </div>
        <hr className='h-[2px] inline-block w-full border-0 horizontal-background mb-6' />
        <div className='lg:text-right text-start font-body text-sm'>
          <div className='font-body text-main mb-1'>
            Migacz Brothers © Todos os direitos reservados.
          </div>
          <div className='text-[#7C7C7C]'>CNPJ 48.546.424/0001-82</div>
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
        className='inline-block text-main font-header md:text-lg text-sm group'
      >
        {children}
        <div className='h-[2px] w-full nav-background rounded-[50px] opacity-0 group-hover:opacity-100 duration-200' />
      </Link>
    </li>
  );
};

interface LanguageLinkProps {
  children: string;
  href: string;
  current?: boolean;
  className?: string;
}

const LanguageLink = ({
  children,
  href,
  current = false,
  className = '',
}: LanguageLinkProps) => {
  return (
    <li className={className}>
      <Link
        href={href}
        className='gradient-language-bold duration-300 inline-block group font'
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
