import Image from 'next/image';
import { Locale } from '@/i18n.config';
import not_found from '@/public/images/not_found.gif';

import { getDictionary } from '@/lib/dictionary';
import { h1, section } from '@/components/design-system';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default async function NotFound({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    navigation,
    page: { not_found: _not_found },
  } = await getDictionary(lang);

  return (
    <>
      <Navbar
        basePath={`/${lang}`}
        homeButton={navigation.home}
        aboutUsButton={navigation.about}
        portfolioButton={navigation.portfolio}
        contactButton={navigation.contact}
      />
      <main>
        <section>
          <div className={section}>
            <div className='flex flex-col items-center gap-12 pb-44 pt-48 text-center'>
              <h1 className={h1}>
                {_not_found.title}
                <br />
                {_not_found.title2}
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
      </main>
      <Footer
        basePath={`/${lang}`}
        homeButton={navigation.home}
        aboutUsButton={navigation.about}
        portfolioButton={navigation.portfolio}
        contactButton={navigation.contact}
      />
    </>
  );
}
