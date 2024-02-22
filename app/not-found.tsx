import Image from 'next/image';
import Develpoment from '@/public/images/Develpoment.gif';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import { h1, section } from '../components/design-system';

export default function UnderDevelopmentPage() {
  return (
    <>
      <Navbar
        homeButton='Ínicio'
        aboutUsButton='Sobre nós'
        portfolioButton='Portfólio'
        contactButton='Contate-nos'
      />
      <main>
        <section>
          <div className={section}>
            <div className='flex flex-col items-center gap-12 pb-44 pt-48 text-center'>
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
      <Footer
        homeButton='Home'
        aboutUsButton='About Us'
        portfolioButton='Portfolio'
        contactUsButton='Contact Us'
      />
    </>
  );
}
