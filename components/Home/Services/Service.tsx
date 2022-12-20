import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

interface ServiceComponent {
  title: string;
  description: string;
  background: StaticImageData;
}

const ServiceComponent = ({
  title,
  description,
  background,
}: ServiceComponent): JSX.Element => {
  return (
    <Service>
      <CustomImage
        src={background}
        alt='product design ilustration'
        fill
        placeholder='blur'
      />
      <DataWrapper>
        <Tag>Services</Tag>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DataWrapper>
    </Service>
  );
};

const Service = styled.li`
  position: relative;
  border-radius: var(--rounded);
  overflow: hidden;
  color: var(--light-primary);

  img {
    transition: ease transform 0.4s;
    width: 100%;
    object-fit: cover;
  }

  :hover {
    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 980px) {
    min-width: 288px;
    width: 100%;
    max-width: 480px;
    min-height: 220px;
  }
`;

const CustomImage = styled(Image)`
  position: absolute;
`;

const DataWrapper = styled.div`
  position: absolute;
  height: 100%;
  padding: 200px 32px 0 32px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;

  box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: var(--rounded);

  @media (max-width: 1150px) {
    padding: 80px 16px 0 16px;
  }

  @media (max-width: 980px) {
    justify-content: center;
    padding: 0 16px 0 16px;
  }
`;

const Tag = styled.span`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 10px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 16px;

  @media (max-width: 980px) {
    font-size: 32px;
    margin-bottom: 8px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 24px;

  @media (max-width: 980px) {
    font-size: 16px;
  }
`;

export default ServiceComponent;
