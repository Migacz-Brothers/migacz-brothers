import styled from 'styled-components';
import {
  GenericSectionWrapper,
  GenericSection,
} from '../shared/sharedComponents';

const WeAreAnAgency = (): JSX.Element => {
  return (
    <WeAreAnAgencySectionWrapper>
      <WeAreAnAgencySection>
        <Title>
          We are an <strong>agency</strong>.
        </Title>
      </WeAreAnAgencySection>
    </WeAreAnAgencySectionWrapper>
  );
};

const WeAreAnAgencySectionWrapper = styled(GenericSectionWrapper)`
  background-color: var(--background-secondary);
  display: grid;
  place-items: center;
`;

const WeAreAnAgencySection = styled(GenericSection)`
  margin: 80px 0 180px 0;
`;

const Title = styled.h2`
  color: var(--text-primary);
  font-weight: bold;
  font-size: 96px;

  strong {
    background: linear-gradient(270.08deg, #00796b 52.27%, #004d3b 99.93%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  @media (max-width: 980px) {
    font-size: 40px;
    text-align: center;
  }
`;

export default WeAreAnAgency;
