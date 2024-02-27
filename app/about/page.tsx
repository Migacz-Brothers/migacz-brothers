import type { Metadata } from 'next';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import AboutUsHero from './AboutUsHero';
import Team from './Team';
import Tldr from './Tldr';
import Values from './Values';

export default function AboutUs() {
  return (
    <div>
      <Navbar
        homeButton='Home'
        aboutUsButton='About Us'
        portfolioButton='Portfolio'
        contactButton='Contact Us'
      />
      <main>
        <AboutUsHero title='About US' />
        <Tldr
          title='The tl;dr'
          paragraph="We know you are a busy person, so we'll get straight to the point. We're a cooperative of designers and software developers who united to create high-quality products that might otherwise be impracticable. Our team is global, with our main office located in South Brazil."
          paragraph_2='If you wanna learn more, just keep scrolling'
        />
        <Values
          title='The Values'
          subTitle_1='Get Real'
          paragraph_1='We believe the best and mot authentic work happens when everyone is free to speak about anything at anytime.'
          subTitle_2='Never drop a cliente'
          paragraph_2='We create everything with long-term maintenance in mind. Once you become our client, we make a commitment to never let you down.'
          subTitle_3='Be not afraid of the unknown'
          paragraph_3='Everything changes, and it happens faster on this industry. We say yes to projects even if we are not sure how to do some parts of it.'
          subTitle_4='Hold high standards'
          paragraph_4="Every product we create has to be approved by our team. We wanna be know for our quality, and that's our main goal."
        />
        <Team title='The Team' />
      </main>
      <Footer
        homeButton='Home'
        aboutUsButton='About Us'
        portfolioButton='Portfolio'
        contactUsButton='Contact Us'
      />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'About us | MigaczBrothers',
  description:
    "We're a cooperative of designers and software developers who united to create high-quality products that might otherwise be impracticable. Our team is global, with our main office located in South Brazil.",
  twitter: {
    images: ['https://migaczbrothers.com/meta_image_logoo.png'],
    title: 'About us | MigaczBrothers',
    card: 'summary',
    description:
      "We're a cooperative of designers and software developers who united to create high-quality products that might otherwise be impracticable. Our team is global, with our main office located in South Brazil.",
  },
  openGraph: {
    images: ['https://migaczbrothers.com/meta_image_logo.png'],
    title: 'About us | MigaczBrothers',
    url: 'https://migaczbrothers.com/about',
    description:
      "We're a cooperative of designers and software developers who united to create high-quality products that might otherwise be impracticable. Our team is global, with our main office located in South Brazil.",
  },
};
