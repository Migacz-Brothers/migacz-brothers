import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className='blue-noise-background h-96'>
        <h1 className='font-header'>Hello world</h1>
        <p className='font-body'>Hello world paragraph</p>
      </section>
    </main>
  );
}
