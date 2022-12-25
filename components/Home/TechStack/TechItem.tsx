import styled from 'styled-components';
import MediumIcon from '../../Icons/TechStack/companies/Medium';
import NetflixIcon from '../../Icons/TechStack/companies/Netflix';
import NodeIcon from '../../Icons/TechStack/Node';

const TechItemComponent = (): JSX.Element => {
  return (
    <TechItemContainer>
      <IconContainer>
        <NodeIcon />
      </IconContainer>
      <Title>Node</Title>
      <Paragraph>
        NodeJS is a powerful and reliable tool for writing backend code. This is
        the basis for many of our services including APIs, CMS, custom systems,
        Discord bots, etc.
      </Paragraph>
      <ShowcaseList>
        <li>
          <NetflixIcon />
        </li>
        <li>
          <MediumIcon />
        </li>
      </ShowcaseList>
    </TechItemContainer>
  );
};

const TechItemContainer = styled.div`
  background-color: var(--background-variant);

  border-radius: var(--rounded);
  height: 520px;
  max-width: 384px;
  min-width: 300px;
  width: 100%;
  padding: 34px 22px 38px 22px;
  color: var(--text-primary);

  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  height: 98px;
  margin-bottom: 17px;
`;

const Title = styled.h3`
  font-size: 40px;
  margin-bottom: 18px;
`;

const Paragraph = styled.p`
  color: var(--text-secondary);
  line-height: 140%;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: auto;
`;

const ShowcaseList = styled.ul`
  display: flex;
  gap: 22px;
`;

export default TechItemComponent;
