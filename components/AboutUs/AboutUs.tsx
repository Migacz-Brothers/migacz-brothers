import styled from 'styled-components';
import { Members } from '.';
import {
  GenericSection,
  GenericSectionWrapper,
} from '../shared/sharedComponents';

const AboutUsPage = (): JSX.Element => {
  return (
    <GenericSectionWrapper>
      <AboutUsSEction>
        <Title>Meet our team</Title>
        <SubHeader>
          Expert Team with a Global Reach and a Focus on Quality
        </SubHeader>
        <Paragraph>
          At Migacz Brothers, we are a global team of web development experts
          committed to delivering high-quality work. Our diverse skills and
          backgrounds allow us to handle projects of any size and complexity. We
          strive to exceed our clients&apos; expectations on every project.
        </Paragraph>
        <Members />
      </AboutUsSEction>
    </GenericSectionWrapper>
  );
};

const AboutUsSEction = styled(GenericSection)`
  text-align: center;
  margin-top: 128px;
`;

const Title = styled.h2`
  color: var(--text-primary);
  font-weight: bold;
  font-size: 48px;
  margin: 32px 0;

  @media (max-width: 980px) {
    font-size: 40px;
  }
`;

const SubHeader = styled.h2`
  color: var(--text-primary);
  font-size: 24px;
  margin-bottom: 24px;
`;

const Paragraph = styled.p`
  color: var(--text-tertiary);
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto 87px auto;
`;

export default AboutUsPage;
