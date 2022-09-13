import React from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from './styled';

const MovieSlider:React.FC = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className='hero-slide'>
      <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          {[
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ORqg6KItb9pxQom0_taqJbr8jOowNe9ZZTyehlUhRPxju0RVhUmilKoRIso9lIOVyHU&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3r4iAyLGuTVH_1xYIMuzLEDDEympKj6Ya28eBALDugwjvH_5h1lC2A86_oHVHIA0dR0&usqp=CAU'
          ].map((i) => (
            <SwiperSlide key={i}>
              <img style={{ width: '100%', height: '650px' }} src={i} alt="" />  
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;