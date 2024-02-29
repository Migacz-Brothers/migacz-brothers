import './globals.css';

import { Inter, Sora } from 'next/font/google';
import { Metadata } from 'next/types';
import { i18n, Locale } from '@/i18n.config';
import { Analytics } from '@vercel/analytics/react';

import FuzzyOverlay from '@/components/FuzzyBg';

// fonts
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-header',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html className='scroll-smooth' lang={params.lang}>
      <body className={`${inter.variable} ${sora.variable}`}>
        <div className='max-w-full'>
          {children}
          <FuzzyOverlay />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://migaczbrothers.com'),
};
