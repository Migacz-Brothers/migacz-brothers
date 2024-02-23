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
          alt='Gif with multiple images of selected projects'
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
        <Portfolio
          title='Our Projects Showcase'
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
          title='Wanna Talk? Send us a message!'
          paragraph='Our team is excited to connect with you. Reach out to discuss your software needs today!'
          textButton='Contact us at'
        />
      </main>
      <Footer
        home
        homeButton='Home'
        aboutUsButton='About Us'
        portfolioButton='Portfolio'
        contactUsButton='Contact Us'
      />
    </>
  );
}
