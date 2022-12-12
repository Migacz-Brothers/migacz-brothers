import Head from 'next/head';
import { FirstSection } from '../components/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Migacz Brothers company</title>
        <meta
          name='description'
          content='A software company that cares about design as art and science!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <FirstSection />
      </main>
    </>
  );
}
