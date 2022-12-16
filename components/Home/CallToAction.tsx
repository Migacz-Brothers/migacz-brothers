import Link from 'next/link';
import styled from 'styled-components';
import {
  GenericSectionWrapper,
  GenericSection,
} from '../shared/sharedComponents';

const CallToAction = (): JSX.Element => {
  return (
    <CallToActionSectionWrapper>
      <CallToActionSection>
        <Title>
          Interested? <span>Call us</span>
        </Title>
        <Paragraph>We’d love to help you grow!</Paragraph>

        <LinksContainet>
          <ContactButton href='/contact'>Contact us</ContactButton>
          or
          <EmailLink href='mailto:hello@migaczbrothers.com'>
            hello@migaczbrothers.com
          </EmailLink>
        </LinksContainet>
      </CallToActionSection>
    </CallToActionSectionWrapper>
  );
};

const CallToActionSectionWrapper = styled(GenericSectionWrapper)`
  background-color: var(--background-primary);
  color: var(--text-primary);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CallToActionSection = styled(GenericSection)`
  margin: 80px 0 180px 0;
`;

const Title = styled.h2`
  font-size: 40px;
  text-align: center;

  margin-bottom: 33px;

  span {
    white-space: nowrap;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  text-align: center;

  margin-bottom: 58px;
`;

// Links

const LinksContainet = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const ContactButton = styled(Link)`
  background-color: var(--primary);

  padding: 10px 64px;
  margin-right: 22px;
  border-radius: var(--rounded);
  color: var(--light-primary);

  @media (max-width: 500px) {
    margin-right: 0;
  }
`;

const EmailLink = styled(Link)`
  color: var(--primary);
  text-decoration: underline;
  margin-left: 12px;
  border-radius: var(--rounded);

  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

export default CallToAction;
