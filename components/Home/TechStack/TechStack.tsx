import styled from 'styled-components';
import {
  GenericSection,
  GenericSectionWrapper,
} from '../../shared/sharedComponents';

import { Slider } from '.';

const TechStackComponent = (): JSX.Element => {
  return (
    <TechStackWrapper>
      <GenericSection>
        <Title>Tech stack we work with</Title>
      </GenericSection>
      <Slider />
    </TechStackWrapper>
  );
};

const TechStackWrapper = styled(GenericSectionWrapper)`
  padding-top: 52px;
  padding-bottom: 84px;
  max-width: 2080px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 50px;
`;

export default TechStackComponent;
