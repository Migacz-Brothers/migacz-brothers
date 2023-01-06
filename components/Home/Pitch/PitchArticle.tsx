import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

interface PitchArticleProps {
  title: string;
  description: string;
  image: StaticImageData;
  reversed?: boolean;
}

const PitchArticle = ({
  title,
  description,
  image,
  reversed = false,
}: PitchArticleProps): JSX.Element => {
  return (
    <Article>
      <ArticleInnerContainer $reversed={reversed}>
        <DataContainer>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </DataContainer>
        <aside>
          <Image src={image} alt={`${title} ilustration`} quality={100} />
        </aside>
      </ArticleInnerContainer>
    </Article>
  );
};

const Article = styled.article`
  max-width: var(--container-width);
  margin: 0 auto;
  margin-bottom: 160px;
  padding: 0 16px;
`;

interface ArticleInnerContainerProps {
  $reversed: boolean;
}

const ArticleInnerContainer = styled.div<ArticleInnerContainerProps>`
  display: flex;
  flex-direction: ${({ $reversed }) => ($reversed ? 'row-reverse' : 'row')};
  gap: 100px;
  justify-content: space-between;
  align-items: center;
`;

const DataContainer = styled.div`
  /* max-width: 600px; */
`;

const Title = styled.h2`
  color: var(--text-primary);
  font-size: 32px;
  /* line-height: 80px; */
  padding: 20px 0 21px 0;
`;

const Paragraph = styled.p`
  color: var(--text-secondary);
  line-height: 150%;
  font-size: 22px;
`;

export default PitchArticle;
