import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

import {
  GenericSection,
  GenericSectionWrapper,
} from '../shared/sharedComponents';

import AboutUsImage from '../../public/about-us/aboutUs.png';

const AboutUs = (): JSX.Element => {
  return (
    <SectionWrapper>
      <AboutUsWrapper>
        <DataWrapper>
          <PageTitle>About Us</PageTitle>
          <Paragraph>
            We develop solutions and web experience for our clients, meet our
            team
          </Paragraph>
          <CallToAction href='/about-us'>Get to know us more</CallToAction>
        </DataWrapper>
        <Media
          src={AboutUsImage}
          alt='company ilustration'
          layout='responsive'
        />
      </AboutUsWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled(GenericSectionWrapper)`
  background-color: var(--background-secondary);
  padding: 132px 0;
`;

const AboutUsWrapper = styled(GenericSection)`
  display: flex;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

const DataWrapper = styled.div`
  max-width: 725px;
  color: var(--text-primary);
  align-self: center;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 980px) {
    align-self: flex-start;
  }
`;

const PageTitle = styled.h1`
  font-size: 56px;
  font-weight: light;
  margin-bottom: 25px;
  color: var(--text-primary);

  @media (max-width: 980px) {
    font-size: 40px;
  }
`;

const Paragraph = styled.p`
  font-size: 24px;
  color: var(--text-secondary);
  margin-bottom: 35px;
`;

const CallToAction = styled(Link)`
  background-color: var(--primary);
  color: var(--light-primary);
  padding: 10px 34px;
  border-radius: var(--rounded);
`;

const Media = styled(Image)`
  margin-left: 16px;
  border-radius: var(--rounded);
  object-fit: cover;
  max-width: 488px;

  @media (max-width: 980px) {
    margin-left: 0px;
    margin-top: 38px;
  }
`;

export default AboutUs;
