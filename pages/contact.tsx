import ContactPage from '../components/Contact';
import { Seo } from '../components/shared';

const Contact = () => {
  return (
    <>
      <Seo
        title='Contact Us | MigaczBrothers'
        description='We would love to help develop your next project!'
      />
      <ContactPage />;
    </>
  );
};

export default Contact;
