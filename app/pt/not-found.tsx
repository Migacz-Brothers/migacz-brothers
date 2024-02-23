import Image from 'next/image';
import not_found from '@/public/images/not_found.gif';

import { h1, section } from '@/components/design-system';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

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
                404 - Página Não Encontrada
                <br />
                Desculpe, não há nada aqui!
              </h1>
              <div>
                <Image
                  src={not_found}
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
