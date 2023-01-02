import Head from 'next/head';
import {
  FirstSection,
  AboutUs,
  WeAreAnAgency,
  CallToAction,
  PaymentMethods,
  Services,
  TechStack,
} from '.';

const Home = (): JSX.Element => {
  return (
    <main>
      <FirstSection />
      <AboutUs />
      <WeAreAnAgency />
      <TechStack />
      <Services />
      <PaymentMethods />
      <CallToAction />
    </main>
  );
};

export default Home;
