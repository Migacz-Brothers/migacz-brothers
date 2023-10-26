import { h1, h2, h3, p, section } from '@/components/design-system';
import cn from 'clsx';
import { Tags } from '@/components/Tags';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ScrollAnimated from '@/components/svgs/ScrollAnimated';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='light-noise-background py-20'>
        <section className={cn(section, 'mb-32')}>
          <h1 className={h1}>
            Header1: Helping companies create unique{' '}
            <strong className='gradient-bold'>digital products</strong>.
          </h1>
          <p className={cn(p, 'max-w-[345px]')}>
            Paragraph: Get access to high-end designers, frontend and backend
            developers, branding specialists, and much more in a single place!
          </p>
          <h2 className={h2}>Header2: About Us</h2>
          <h3 className={h3}>DietIt Project</h3>
        </section>
        <section className={section}>
          <Tags
            tagList={[
              'NextJs',
              'Figma',
              'Branding',
              'Backend',
              'PostgreSQL',
              'Redis',
            ]}
          />
        </section>
        <section className={section}>
          <ScrollAnimated />
        </section>
      </main>
      <Footer />
    </>
  );
}
