import styled from 'styled-components';
import LinkedinIcon from '../Icons/linkedin';
import MailIcon from '../Icons/mail';

const ContactInfo = (): JSX.Element => {
  return (
    <div>
      <Title>Contact Us</Title>
      <ContactInfoTitleWrapper>
        <ContactIconContainer>
          <LinkedinIcon />
        </ContactIconContainer>
        <ContactInfoTitle>Linkedin</ContactInfoTitle>
      </ContactInfoTitleWrapper>
      <ContactInfoContainer>Migacz Brothers</ContactInfoContainer>
      <ContactInfoTitleWrapper>
        <ContactIconContainer>
          <MailIcon />
        </ContactIconContainer>
        <ContactInfoTitle>Email</ContactInfoTitle>
      </ContactInfoTitleWrapper>
      <ContactInfoContainer>hello@migaczbrothers.com</ContactInfoContainer>
      <ContactInfoContainer>pedro@migaczbrothers.com</ContactInfoContainer>
    </div>
  );
};

const Title = styled.h1`
  font-size: 72px;
  margin-bottom: 38px;
`;

const ContactInfoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  &:not(:first-of-type) {
    margin-top: 34px;
  }
`;

const ContactIconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  background-color: var(--primary-20);
  border-radius: 50%;
  margin-right: 14px;
`;

const ContactInfoTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 2px;
  color: var(--primary);
`;

const ContactInfoContainer = styled.p`
  margin-left: 44px;
  margin-bottom: 15px;
  font-size: 18px;
`;

export default ContactInfo;
