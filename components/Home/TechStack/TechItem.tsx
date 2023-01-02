import styled from 'styled-components';

interface TechItemProps {
  title: string;
  paragraph: string;
  Icon: () => JSX.Element;
  socialProof: (() => JSX.Element)[];
}

const TechItemComponent = ({
  title,
  paragraph,
  Icon,
  socialProof,
}: TechItemProps): JSX.Element => {
  return (
    <TechItemContainer>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      <ShowcaseList>
        {socialProof.map((SocialProofIcon, key) => (
          <SocialProofIconWrapper key={`SocialProofIcon_${key}`}>
            <SocialProofIcon />
          </SocialProofIconWrapper>
        ))}
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
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
`;

const SocialProofIconWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-self: flex-start;
`;

export default TechItemComponent;
