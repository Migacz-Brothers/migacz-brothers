import { h1, h2, h3, p } from '@/components/typography';

export default function Home() {
  return (
    <main className='light-noise-background'>
      <section className='max-w-[1232px] md:px-4 px-8 mx-auto'>
        <h1 className={h1}>
          Header1: Helping companies create unique{' '}
          <strong className='gradient-bold'>digital products</strong>.
        </h1>
        <p className={p}>
          Paragraph: Get access to high-end designers, frontend and backend
          developers, branding specialists, and much more in a single place!
        </p>
        <h2 className={h2}>Header2: About Us</h2>
        <h3 className={h3}>DietIt Project</h3>
      </section>
    </main>
  );
}
