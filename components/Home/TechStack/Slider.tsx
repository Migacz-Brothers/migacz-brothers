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
      'NodeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discord bots, etc.',
    icon: NodeIcon,
    socialProof: [MediumIcon, NetflixIcon],
  },
  {
    title: 'PostgreSQL',
    paragraph:
      "PostgreSQL is a feature-rich, open-source database management system. It's popular for its support of complex SQL queries, full-text search, and powerful indexing options. We use it to store and manage data for your web apps.",
    icon: PostgreSqlIcon,
    socialProof: [RobinhoodIcon, NasaIcon],
  },
  {
    title: 'Next',
    paragraph:
      "NextJS is what makes our websites so blazing fast. It's our Server Side Rendering engine of choice for React. It offers automatic code splitting and optimized performance for fast, scalable web applications.",
    icon: NextIcon,
    socialProof: [TypeformIcon, NotionIcon],
  },
  {
    title: 'Sanity',
    paragraph:
      'Sanity is a flexible headless CMS that makes it easy to manage and deliver structured content. This technology allows us developers to create complex relationships while keeping it extremely simple for you (the client) to manage your content.',
    icon: SanityIcon,
    socialProof: [NetlifyIcon, NikeIcon],
  },
  {
    title: 'Figma',
    paragraph:
      'Figma is a powerful design and prototyping tool that helps us create, share, and collaborate on designs with you. With Figma, we can provide you with wireframes, prototypes, and fully-designed screens all in one place.',
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
  height: 520px;

  @media (max-width: 400px) {
    width: calc(100% - 32px);
  }
`;

export default TechStackSliderComponent;
