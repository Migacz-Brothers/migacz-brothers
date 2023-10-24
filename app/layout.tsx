import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import './globals.css';
// import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: 'Exceptionally Designed Interfaces and Software | MigaczBrothers',
  description:
    'Discover the art of exceptional design and software development with MigaczBrothers. We specialize in crafting remarkable user experiences to transform your vision into reality.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        {/* favicon */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        {/* favicon */}
      </head>
      <body className={`${inter.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
