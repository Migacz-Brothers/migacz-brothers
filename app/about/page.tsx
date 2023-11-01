import Navbar from '@/components/Navbar/Navbar';
import Values from './Values';
import Footer from '@/components/Footer/Footer';
import Team from './Team';

export default function AboutUs() {
  return (
    <div className='light-noise-background'>
      <Navbar />
      <main className=' py-20'>
        <Values />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
