import React from 'react';
import Img from 'components/ui/img';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.css';
import GamesModels from 'models/games-model';

type ImgSwiperProps = GamesModels;

const ImgSwiper: React.FC<ImgSwiperProps> = ({
  images,
}) => (
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    <SwiperSlide><Img src={images[0]} alt="" /></SwiperSlide>
    <SwiperSlide><Img src={images[1]} alt="" /></SwiperSlide>
    <SwiperSlide><Img src={images[2]} alt="" /></SwiperSlide>
  </Swiper>
);

export default ImgSwiper;
