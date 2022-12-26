import styled from 'styled-components';
import { ServicesList } from '.';
import {
  GenericSection,
  GenericSectionWrapper,
} from '../../shared/sharedComponents';

const ServicesComponent = (): JSX.Element => {
  return (
    <ServicesWrapper id='services'>
      <GenericSection>
        <Title>We take care of it all</Title>
        <ServicesList />
      </GenericSection>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled(GenericSectionWrapper)`
  background-color: var(--background-secondary);
  padding-bottom: 40px;
`;

const Title = styled.h2`
  color: var(--text-secondary);
  text-align: center;
  font-size: 40px;
  margin-bottom: 70px;
  padding-top: 100px;
`;

export default ServicesComponent;
