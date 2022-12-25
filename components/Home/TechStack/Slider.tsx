import { Swiper, SwiperSlide } from 'swiper/react';
import { TechItem } from '.';

import 'swiper/css';
import styled from 'styled-components';

const TechStackSliderComponent = (): JSX.Element => {
  return (
    <Swiper spaceBetween={32} slidesPerView={'auto'} centeredSlides loop>
      <CustomSwiperSlide>
        <TechItem />
      </CustomSwiperSlide>
      <CustomSwiperSlide>
        <TechItem />
      </CustomSwiperSlide>
      <CustomSwiperSlide>
        <TechItem />
      </CustomSwiperSlide>
      <CustomSwiperSlide>
        <TechItem />
      </CustomSwiperSlide>
      <CustomSwiperSlide>
        <TechItem />
      </CustomSwiperSlide>
    </Swiper>
  );
};

const CustomSwiperSlide = styled(SwiperSlide)`
  max-width: 384px;
  min-width: 300px;
  width: 100%;
`;

export default TechStackSliderComponent;
