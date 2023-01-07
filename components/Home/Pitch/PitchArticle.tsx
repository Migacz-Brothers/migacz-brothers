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
        <Aside>
          <CustomImage
            src={image}
            alt={`${title} ilustration`}
            quality={100}
            fill
            sizes='(max-width: 520px) 100vw,
                  489px'
            placeholder='blur'
          />
        </Aside>
      </ArticleInnerContainer>
    </Article>
  );
};

const Article = styled.article`
  max-width: var(--container-width);
  margin: 0 auto;
  margin-bottom: 160px;
  padding: 0 16px;

  @media (max-width: 980px) {
    margin-bottom: 100px;
  }
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

  @media (max-width: 980px) {
    gap: 48px;
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

const DataContainer = styled.div`
  /* @media (max-width: 980px) { */
  /* max-width: 600px; */
  /* } */
`;

const Title = styled.h2`
  color: var(--text-primary);
  font-size: 32px;
  /* line-height: 80px; */
  padding: 20px 0 21px 0;

  @media (max-width: 980px) {
    padding: 16px 0 16px 0;
    font-size: 28px;
  }

  /* @media (max-width: 700px) {
    text-align: center;
  } */
`;

const Paragraph = styled.p`
  color: var(--text-secondary);
  line-height: 150%;
  font-size: 22px;

  @media (max-width: 980px) {
    font-size: 18px;
  }

  /* @media (max-width: 700px) {
    text-align: center;
  } */
`;

const Aside = styled.aside`
  position: relative;
  min-width: 489px;
  display: inline-block;
  /* max-width: 50vw; */

  @media (max-width: 980px) {
    min-width: 380px;
  }

  @media (max-width: 700px) {
    min-width: calc(100vw - 32px);
  }
`;

const CustomImage = styled(Image)`
  position: relative !important;
`;

export default PitchArticle;
