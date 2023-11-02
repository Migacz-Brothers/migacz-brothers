import Navbar from '@/components/Navbar/Navbar';
import Values from './Values';
import Footer from '@/components/Footer/Footer';
import Team from './Team';
import AboutUsHero from './AboutUsHero';
import Tldr from './Tldr';

export default function AboutUs() {
  return (
    <div className='light-noise-background'>
      <Navbar />
      <main className='py-20'>
        <AboutUsHero />
        <Tldr />
        <Values />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
