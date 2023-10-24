import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Portfolio from '@/components/Portfolio';
import ContactUs from '@/components/ContactUs/ContactUs';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar home />
      <Hero />
      <AboutUs />
      <Portfolio />
      <ContactUs />
      <Footer home />
    </main>
  );
}
