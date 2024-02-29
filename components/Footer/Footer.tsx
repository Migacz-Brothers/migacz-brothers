'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'clsx';
import { motion } from 'framer-motion';
import { Dribbble, Instagram, Linkedin } from 'lucide-react';

import { section } from '../design-system';
import BehanceIcon from '../svgs/BehanceIcon';
import CompanyLogo from '../svgs/CompanyLogo';

interface FooterProps {
  home?: boolean;
  homeButton: string;
  aboutUsButton: string;
  portfolioButton: string;
  contactButton: string;
  basePath?: string;
}

export default function Footer({
  home = false,
  homeButton,
  aboutUsButton,
  portfolioButton,
  contactButton,
  basePath = '',
}: FooterProps) {
  const pathname = usePathname();

  return (
    <footer className='my-5 pb-18'>
      <motion.div
        className={section}
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className='mb-6 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center'>
          <a
            href={basePath + (home ? '' : '/') + '#home'}
            className='order-none'
          >
            <CompanyLogo className='h-[41px] w-[99px]' />
          </a>
          <ul className='order-3 flex gap-8 lg:order-none'>
            <li>
              <Link
                href='https://www.instagram.com/migaczbrothers/'
                target='_blank'
                className='grid h-6 w-6 place-items-center'
                rel='noopener noreferrer'
              >
                <Instagram strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.behance.net/MigaczBrothers'
                target='_blank'
                className='grid h-6 w-6 place-items-center'
                rel='noopener noreferrer'
              >
                <BehanceIcon strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.linkedin.com/company/migacz-brothers/'
                target='_blank'
                className='grid h-6 w-6 place-items-center'
                rel='noopener noreferrer'
              >
                <Linkedin strokeWidth={1.5} />
              </Link>
            </li>
            <li>
              <Link
                href='https://dribbble.com/MigaczBrothers'
                target='_blank'
                className='grid h-6 w-6 place-items-center'
                rel='noopener noreferrer'
              >
                <Dribbble strokeWidth={1.5} />
              </Link>
            </li>
          </ul>
          <ul className='order-2 flex gap-8 font-header text-lg lg:order-none'>
            <LanguageLink
              href={
                '/en' +
                  pathname
                    .replace('/pt', '')
                    .replace('/es', '')
                    .replace('/en', '') || '/'
              }
              current={basePath === '/en'}
            >
              EN
            </LanguageLink>
            <LanguageLink
              href={
                '/pt' +
                pathname
                  .replace('/pt', '')
                  .replace('/es', '')
                  .replace('/en', '')
              }
              current={basePath === '/pt'}
            >
              PT
            </LanguageLink>
            <LanguageLink
              href={
                '/es' +
                pathname
                  .replace('/pt', '')
                  .replace('/es', '')
                  .replace('/en', '')
              }
              current={basePath === '/es'}
            >
              ES
            </LanguageLink>
          </ul>
          <ul className='order-1 flex flex-col gap-4 lg:order-none lg:flex-row lg:gap-8'>
            <FooterLink href={basePath + (home ? '' : '/') + '#home'}>
              {homeButton}
            </FooterLink>
            <FooterLink href={basePath + (home ? '' : '/') + '#about'}>
              {aboutUsButton}
            </FooterLink>
            <FooterLink href={basePath + (home ? '' : '/') + '#portfolio'}>
              {portfolioButton}
            </FooterLink>
            <FooterLink href={basePath + (home ? '' : '/') + '#contact'}>
              {contactButton}
            </FooterLink>
          </ul>
        </div>
        <motion.hr
          className='horizontal-background mb-6 inline-block h-[2px] w-full border-0'
          initial={{
            width: 0,
          }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <div className='text-start font-body text-sm lg:text-right'>
          <div className='mb-1 font-body text-main'>
            MigaczBrothers © All rights reserved.
          </div>
          <div className='text-[#7C7C7C]'>CNPJ 48.546.424/0001-82</div>
        </div>
      </motion.div>
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
        className='group inline-block font-header text-sm text-main md:text-lg'
      >
        {children}
        <div className='nav-background h-[2px] w-full rounded-[50px] opacity-0 duration-200 group-hover:opacity-100' />
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
        className='gradient-language-bold font group inline-block duration-300'
      >
        {children}
        <div
          className={cn(
            'nav-background h-[2px] w-full rounded-[50px] opacity-0 duration-300 group-hover:opacity-100',
            current ? 'opacity-100' : '',
          )}
        />
      </Link>
    </li>
  );
};
