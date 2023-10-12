import { h1, h2, h3 } from '@/components/typography';

export default function Home() {
  return (
    <main className='light-noise-background'>
      <h1 className={h1}>
        Header1: Helping companies create unique digital products.
      </h1>
      <p className='font-body text-main text-sm md:text-base leading-body'>
        Paragraph: Get access to high-end designers, frontend and backend
        developers, branding specialists, and much more in a single place!
      </p>
      <h2 className={h2}>Header2: About Us</h2>
      <h3 className={h3}>DietIt Project</h3>
    </main>
  );
}
