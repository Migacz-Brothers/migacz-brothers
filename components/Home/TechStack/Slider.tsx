import { Swiper, SwiperSlide } from 'swiper/react';
import { TechItem } from '.';

import 'swiper/css';
import styled from 'styled-components';

import MediumIcon from '../../Icons/TechStack/companies/Medium';
import NetflixIcon from '../../Icons/TechStack/companies/Netflix';
import NodeIcon from '../../Icons/TechStack/Node';

import FigmaIcon from '../../Icons/TechStack/Figma';
import AirbnbIcon from '../../Icons/TechStack/companies/Airbnb';
import ZoomIcon from '../../Icons/TechStack/companies/Zoom';

import PostgreSqlIcon from '../../Icons/TechStack/PostgreSql';
import NasaIcon from '../../Icons/TechStack/companies/Nasa';
import RobinhoodIcon from '../../Icons/TechStack/companies/Robinhood';

import NextIcon from '../../Icons/TechStack/Next';
import TypeformIcon from '../../Icons/TechStack/companies/Typeform';
import NotionIcon from '../../Icons/TechStack/companies/Notion';

import SanityIcon from '../../Icons/TechStack/Sanity';
import NetlifyIcon from '../../Icons/TechStack/companies/Netlify';
import NikeIcon from '../../Icons/TechStack/companies/Nike';

const TechStackList = [
  {
    title: 'Node',
    paragraph:
      'odeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discord bots, etc.',
    icon: NodeIcon,
    socialProof: [MediumIcon, NetflixIcon],
  },
  {
    title: 'PostgreSQL',
    paragraph:
      'NodeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discod bots, etc.',
    icon: PostgreSqlIcon,
    socialProof: [RobinhoodIcon, NasaIcon],
  },
  {
    title: 'Next',
    paragraph:
      'NodeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discod bots, etc.',
    icon: NextIcon,
    socialProof: [TypeformIcon, NotionIcon],
  },
  {
    title: 'Sanity',
    paragraph:
      'NodeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discod bots, etc.',
    icon: SanityIcon,
    socialProof: [NetlifyIcon, NikeIcon],
  },
  {
    title: 'Figma',
    paragraph:
      'NodeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discod bots, etc.',
    icon: FigmaIcon,
    socialProof: [AirbnbIcon, ZoomIcon],
  },
];

const TechStackSliderComponent = (): JSX.Element => {
  return (
    <Swiper spaceBetween={32} slidesPerView={'auto'} centeredSlides loop>
      {TechStackList.map((tech, key) => (
        <CustomSwiperSlide key={`tech_${tech.title + key}`}>
          <TechItem
            title={tech.title}
            paragraph={tech.paragraph}
            Icon={tech.icon}
            socialProof={tech.socialProof}
          />
        </CustomSwiperSlide>
      ))}
    </Swiper>
  );
};

const CustomSwiperSlide = styled(SwiperSlide)`
  max-width: 384px;
  min-width: 300px;
  width: 100%;

  @media (max-width: 400px) {
    width: calc(100% - 32px);
  }
`;

export default TechStackSliderComponent;
