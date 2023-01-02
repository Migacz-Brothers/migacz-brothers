import dynamic from 'next/dynamic';
import {
  FirstSection,
  AboutUs,
  WeAreAnAgency,
  CallToAction,
  PaymentMethods,
  Services,
} from '.';

const TechStack = dynamic(() => import('./TechStack'), {
  suspense: true,
});

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
