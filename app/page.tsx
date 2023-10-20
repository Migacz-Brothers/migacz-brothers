import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Portfolio from '@/components/Portfolio';
import ContactUs from '@/components/ContactUs/ContactUs';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Portfolio />
      <ContactUs />
    </main>
  );
}
