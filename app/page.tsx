import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs/ContactUs';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <>
      <Navbar
        home
        homeButton='Home'
        aboutUsButton='About Us'
        portfolioButton='Portfolio'
        contactButton='Contact Us'
      />
      <main>
        <Hero
          title={
            <>
              Helping companies create unique{' '}
              <strong className='gradient-bold'>digital products</strong>.
            </>
          }
          paragraph={
            <>
              Get access to high-end designers, frontend and backend developers,
              branding specialists, and much more in a{' '}
              <strong className='font-medium underline'>single place</strong>
            </>
          }
          textButton='Contact us at'
        />
        <AboutUs
          title='About Us'
          subTitle='Design & Code'
          paragraph='We are a small cooperative company from South Brazil with an international team of professionals who have joined forces to create unique products for the web.'
          text='Or read more'
        />
        <Portfolio />
        <ContactUs />
      </main>
      <Footer home />
    </>
  );
}
