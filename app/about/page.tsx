import Navbar from '@/components/Navbar/Navbar';
import Values from './Values';
import Footer from '@/components/Footer/Footer';
import Team from './Team';
import AboutUsSection from './AboutUs';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className='py-20'>
        <AboutUsSection />
        <Values />
        <Team />
      </main>
      <Footer />
    </>
  );
}
