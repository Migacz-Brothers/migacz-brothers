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
    <main>
      <FirstSection />
      <AboutUs />
      <WeAreAnAgency />
      <Services />
      <PaymentMethods />
      <CallToAction />
    </main>
  );
};

export default Home;
