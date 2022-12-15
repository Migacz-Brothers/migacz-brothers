import Head from 'next/head';
import {
  FirstSection,
  AboutUs,
  WeAreAnAgency,
  CallToAction,
  PaymentMethods,
  Services,
} from '.';

const Home = (): JSX.Element => {
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
        <AboutUs />
        <WeAreAnAgency />
        <Services />
        <PaymentMethods />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
