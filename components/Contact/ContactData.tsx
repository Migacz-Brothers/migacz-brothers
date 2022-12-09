import styled from 'styled-components';
import LinkedinIcon from '../Icons/linkedin';
import MailIcon from '../Icons/mail';

const ContactInfo = (): JSX.Element => {
  return (
    <ContactInfoWrapper>
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
    </ContactInfoWrapper>
  );
};

const ContactInfoWrapper = styled.div`
  @media (max-width: 700px) {
    padding-bottom: 120px;
  }
`;

const Title = styled.h1`
  font-size: 72px;
  margin-bottom: 38px;
  color: var(--text-primary);

  @media (max-width: 980px) {
    font-size: 40px;
  }
  @media (max-width: 700px) {
    margin-bottom: 60px;
  }
`;

const ContactInfoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  &:not(:first-of-type) {
    margin-top: 34px;
  }

  @media (max-width: 700px) {
    margin-bottom: 9px;
    flex-direction: column;

    &:not(:first-of-type) {
      margin-top: 40px;
    }
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

  @media (max-width: 700px) {
    margin-right: 0;
    margin-bottom: 14px;
  }
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
  color: var(--text-secondary);

  @media (max-width: 700px) {
    text-align: center;
    margin-left: 0;
    margin-bottom: 14px;
  }
`;

export default ContactInfo;
