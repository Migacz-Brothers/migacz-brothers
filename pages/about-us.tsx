import AboutUsPage from '../components/AboutUs';
import { Seo } from '../components/shared';

const AboutUs = (): JSX.Element => {
  return (
    <>
      <Seo
        title='About Us | MigaczBrothers'
        description='Meet our team of specialists.'
      />
      <AboutUsPage />;
    </>
  );
};

export default AboutUs;
