import type { Metadata } from 'next';
import { Locale } from '@/i18n.config';
import meta_image_logo from '@/public/meta_image_logo.png';

import { getDictionary } from '@/lib/dictionary';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import AboutUsHero from './AboutUsHero';
import Team from './Team';
import Tldr from './Tldr';
import Values from './Values';

export default async function AboutUs({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    navigation,
    page: { about },
  } = await getDictionary(lang);

  return (
    <div>
      <Navbar
        basePath={`/${lang}`}
        homeButton={navigation.home}
        aboutUsButton={navigation.about}
        portfolioButton={navigation.portfolio}
        contactButton={navigation.contact}
      />
      <main>
        <AboutUsHero title={about.title} />
        <Tldr
          title={about.tldr.title}
          paragraph={about.tldr.description}
          paragraph_2={about.tldr.trailing}
        />
        <Values
          title={about.values.title}
          subTitle_1={about.values.values[0].title}
          paragraph_1={about.values.values[0].description}
          subTitle_2={about.values.values[1].title}
          paragraph_2={about.values.values[1].description}
          subTitle_3={about.values.values[2].title}
          paragraph_3={about.values.values[2].description}
          subTitle_4={about.values.values[3].title}
          paragraph_4={about.values.values[3].description}
        />
        <Team title={about.team.title} />
      </main>
      <Footer
        basePath={`/${lang}`}
        homeButton={navigation.home}
        aboutUsButton={navigation.about}
        portfolioButton={navigation.portfolio}
        contactButton={navigation.contact}
      />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'About us | MigaczBrothers',
  description:
    "We're a cooperative of designers and software developers who united to create high-quality products that might otherwise be impracticable. Our team is global, with our main office located in South Brazil.",
  twitter: {
    images: [meta_image_logo.src],
    title: 'About us | MigaczBrothers',
    card: 'summary',
    description:
      "We're a cooperative of designers and software developers who united to create high-quality products that might otherwise be impracticable. Our team is global, with our main office located in South Brazil.",
  },
  openGraph: {
    images: [meta_image_logo.src],
    title: 'About us | MigaczBrothers',
    url: 'https://migaczbrothers.com/about',
    description:
      "We're a cooperative of designers and software developers who united to create high-quality products that might otherwise be impracticable. Our team is global, with our main office located in South Brazil.",
  },
};
