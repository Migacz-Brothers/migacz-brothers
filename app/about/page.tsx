import Navbar from '@/components/Navbar/Navbar';
import Values from './Values';
import Footer from '@/components/Footer/Footer';
import Team from './Team';
import AboutUsHero from './AboutUsHero';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className='py-20'>
        <AboutUsHero />
        <Values />
        <Team />
      </main>
      <Footer />
    </>
  );
}
