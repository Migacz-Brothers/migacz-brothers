import Navbar from '@/components/Navbar/Navbar';
import Values from './Values';
import Footer from '@/components/Footer/Footer';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className='py-20'>
        <Values />
      </main>
      <Footer />
    </>
  );
}
