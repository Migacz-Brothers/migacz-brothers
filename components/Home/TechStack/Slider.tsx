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

import NextIcon from '../../Icons/TechStack/Next';
import PostgreSqlIcon from '../../Icons/TechStack/PostgreSql';

import SanityIcon from '../../Icons/TechStack/Sanity';
import NikeIcon from '../../Icons/TechStack/companies/Nike';
import CloudflareIcon from '../../Icons/TechStack/companies/Cloudflare';

const TechStackList = [
  {
    title: 'Node',
    paragraph:
      'NodeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discod bots, etc.',
    icon: NodeIcon,
    socialProof: [NetflixIcon, MediumIcon],
  },
  {
    title: 'PostgreSQL',
    paragraph:
      'NodeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discod bots, etc.',
    icon: PostgreSqlIcon,
    socialProof: [NetflixIcon, MediumIcon],
  },
  {
    title: 'Next',
    paragraph:
      'NodeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discod bots, etc.',
    icon: NextIcon,
    socialProof: [NetflixIcon, MediumIcon],
  },
  {
    title: 'Sanity',
    paragraph:
      'NodeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discod bots, etc.',
    icon: SanityIcon,
    socialProof: [CloudflareIcon, NikeIcon],
  },
  {
    title: 'Figma',
    paragraph:
      'NodeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discod bots, etc.',
    icon: FigmaIcon,
    socialProof: [ZoomIcon, AirbnbIcon],
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
`;

export default TechStackSliderComponent;
