import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main>
      <section className='light-noise-background bg-repeat h-96'>
        <h1 className='font-header'>Hello world</h1>
        <p className='font-body'>Hello world paragraph</p>
      </section>
      <section className='blue-noise-background h-96'>
        <h1 className='font-header'>Hello world</h1>
        <p className='font-body'>Hello world paragraph</p>
      </section>
      <AboutUs />
    </main>
  );
}
