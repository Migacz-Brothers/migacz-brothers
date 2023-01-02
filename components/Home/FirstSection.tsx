import Link from 'next/link';
import styled from 'styled-components';

import {
  GenericSection,
  GenericSectionWrapper,
} from '../shared/sharedComponents';

import ArrowIcon from '../Icons/arrow';
import FirstSectionIlustration from '../Icons/FirstSectionIlustration';

const FirstSectionComponent = (): JSX.Element => {
  return (
    <SectionWrapper>
      <FirstSection>
        <DataWrapper>
          <Greetings>Welcome! 👋</Greetings>
          <PageTitle>
            We design <Strong>experience</Strong> and develop{' '}
            <Strong>solutions</Strong>.
          </PageTitle>
          <Paragraph>Let’s build something together!</Paragraph>
          <CallToAction href='/contact'>
            Give us a call! <ArrowIcon />
          </CallToAction>
        </DataWrapper>
        <MediaWrapper>
          <FirstSectionIlustration />
        </MediaWrapper>
      </FirstSection>
    </SectionWrapper>
  );
};

const SectionWrapper = styled(GenericSectionWrapper)`
  background-color: var(--background-primary);
  padding: 132px 0;
`;

const FirstSection = styled(GenericSection)`
  display: flex;
  justify-content: space-between;
`;

const DataWrapper = styled.div`
  max-width: 725px;
  color: var(--text-primary);
`;

const Greetings = styled.p`
  color: var(--primary);
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 14px;
  color: var(--text-primary);

  @media (max-width: 780px) {
    font-size: 40px;
    max-width: 500px;
  }
`;

const Strong = styled.strong`
  color: var(--primary);
`;

const Paragraph = styled.p`
  font-size: 24px;
  color: var(--text-secondary);
  margin-bottom: 65px;
`;

const CallToAction = styled(Link)`
  text-decoration: underline;

  svg {
    margin-left: 20px;
    transform: translateY(4px);
  }
`;

const MediaWrapper = styled.aside`
  margin-left: 16px;

  @media (max-width: 980px) {
    display: none;
  }
`;

export default FirstSectionComponent;
