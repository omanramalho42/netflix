import React, { useState } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import { CardMovie, Container } from './styled';

import Button from '../Button';
import Modal from '../Modal';

import './style.scss';

const MovieSlider:React.FC = () => {
  SwiperCore.use([Autoplay]);

  const [show, setShow] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(true);

  return (
    <div style={{ marginBottom: '3rem' }}>
      <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{delay: 3000}}
        >
          {[
            'https://images8.alphacoders.com/108/thumb-1920-1083765.jpg',
            'https://images3.alphacoders.com/678/thumb-1920-678085.jpg',
            'https://wallpaperaccess.com/full/496545.jpg'
          ].map((i) => (
            isActive && (
              <SwiperSlide 
                key={i}
              >
                <Container>
                  <Modal 
                    buttonText='Watch trailer'
                    children={<img src={i} alt='trailer' />}
                    show={show} 
                    onClick={() => {}}
                    onClose={() => setShow(false)}
                  />
                  <div
                    className={`hero-slide__item active`}
                    style={{ backgroundImage: `url(${i})`, opacity: `${show ? (0.2) : (1)}`}}
                  >
                      <div className="hero-slide__item__content container">
                        <div className="hero-slide__item__content__info">
                          <h2 className="title">Free guy</h2>
                          <div className="overview">
                            Um filme envolvendo açao do começo ao fim em busca de grandes 
                            aventuras e fugindo do perigo a todo momento, inspirado em gta
                            esste homem vive em um mundo virtual
                          </div>
                          <div className="btns">
                            <Button
                              title='Watch now'
                              color='effect'
                              onClick={() => {}}
                            />
                            <Button
                              title='Watch trailer'
                              color='secondary'
                              onClick={() => setShow(true)}
                            />
                          </div>
                        </div>
                        <CardMovie className="hero-slide__item__content__poster">
                          <img src={i} alt="" />
                        </CardMovie>
                      </div>
                  </div>
                </Container> 
              </SwiperSlide>
            )
          ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;