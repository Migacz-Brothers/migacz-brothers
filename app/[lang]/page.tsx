import type { Metadata } from 'next';
import { Locale } from '@/i18n.config';

import { getDictionary } from '@/lib/dictionary';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs/ContactUs';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Portfolio from '@/components/Portfolio';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    navigation,
    page: { home },
  } = await getDictionary(lang);

  return (
    <>
      <Navbar
        home
        homeButton={navigation.home}
        aboutUsButton={navigation.about}
        portfolioButton={navigation.portfolio}
        contactButton={navigation.contact}
      />
      <main>
        <Hero
          alt='Gif with multiple images of selected projects'
          title={
            <>
              {home.hero.title.main}
              <strong className='gradient-bold'>{home.hero.title.bold}</strong>.
            </>
          }
          paragraph={
            <>
              {home.hero.description.main}{' '}
              <strong className='font-medium underline'>
                {home.hero.description.bold}
              </strong>
            </>
          }
          textButton={home.hero.cta}
        />
        <AboutUs
          title={home.about.title}
          subTitle={home.about.title_2}
          paragraph={home.about.description}
          text={home.about.cta}
        />
        <Portfolio
          title={home.showcase.title}
          title_1={
            <>
              <strong className='gradient-bold'>DietIt!</strong> A platform made
              for dieticians
            </>
          }
          title_2={
            <>
              <strong className='gradient-bold'>Dwight Capital</strong> Press
              releases page system
            </>
          }
          title_3={
            <>
              <strong className='gradient-bold'>Cordoce Stores</strong> branding
              project
            </>
          }
          title_4={
            <>
              <strong className='gradient-bold'>Knox Abstract</strong> website
            </>
          }
          title_5={
            <>
              <strong className='gradient-bold'>1up Systems</strong> website
            </>
          }
        />
        <ContactUs
          title={home.contact.title}
          paragraph={home.contact.description}
          textButton={home.contact.cta}
        />
      </main>
      <Footer
        home
        basePath={`/${lang}`}
        homeButton={navigation.home}
        aboutUsButton={navigation.about}
        portfolioButton={navigation.portfolio}
        contactButton={navigation.contact}
      />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Exceptionally Designed Interfaces and Software | MigaczBrothers',
  description:
    'Discover the art of exceptional design and software development with MigaczBrothers. We specialize in crafting remarkable user experiences to transform your vision into reality.',
  twitter: {
    images: ['https://migaczbrothers.com/meta_image_logoo.png'],
    title: 'Exceptionally Designed Interfaces and Software | MigaczBrothers',
    card: 'summary',
    description:
      'Discover the art of exceptional design and software development with MigaczBrothers. We specialize in crafting remarkable user experiences to transform your vision into reality.',
  },
  openGraph: {
    images: ['https://migaczbrothers.com/meta_image_logo.png'],
    title: 'Exceptionally Designed Interfaces and Software | MigaczBrothers',
    url: 'https://migaczbrothers.com',
    description:
      'Discover the art of exceptional design and software development with MigaczBrothers. We specialize in crafting remarkable user experiences to transform your vision into reality.',
  },
};
