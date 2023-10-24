import { h1, section } from '../components/design-system';
import Image from 'next/image';
import Develpoment from '@/public/images/Develpoment.gif';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function UnderDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <div className={section}>
            <div className='flex flex-col items-center text-center pt-48 pb-44 gap-12'>
              <h1 className={h1}>
                Sorry! This page is under construction. Please come back later.
              </h1>
              <div>
                <Image
                  src={Develpoment}
                  alt={'Development gif'}
                  className='rounded-2xl'
                />
              </div>
            </div>
          </div>
        </section>
      </main>{' '}
      <Footer />
    </>
  );
}
