import styled from 'styled-components';
import { GenericSection } from '../shared/sharedComponents';
import ContactInfo from './ContactData';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Main>
      <ContactSection>
        <ContactInfo />
        <ContactForm />
      </ContactSection>
    </Main>
  );
};

const Main = styled.main`
  background-color: var(--background-primary);
  color: var(--white);
  padding-top: 126px;
  padding-bottom: 180px;
`;

const ContactSection = styled(GenericSection)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Contact;
