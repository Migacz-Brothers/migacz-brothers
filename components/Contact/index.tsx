import styled from 'styled-components';
import { GenericSection } from '../shared/sharedComponents';
import ContactInfo from './ContactData';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Main>
      <GenericSection>
        <ContactInfo />
        <ContactForm />
      </GenericSection>
    </Main>
  );
};

const Main = styled.main`
  background-color: var(--background-primary);
  color: var(--light-primary);
  padding-top: 126px;
  padding-bottom: 180px;
`;

export default Contact;
