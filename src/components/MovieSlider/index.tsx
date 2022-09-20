import React, { useState } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import { CardMovie, Container } from './styled';

import Button from '../Button';
import Modal from '../Modal';

import './style.scss';

interface MoviesProps {
  id: number;
  title: string;
  img: string;
  cardImg: string;
  description: string;
}

const MovieSlider:React.FC = () => {
  SwiperCore.use([Autoplay]);

  const [show, setShow] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(true);

  const movies: MoviesProps[] = [ 
    {
      title: 'The walking dead',
      cardImg: 'https://cutewallpaper.org/21/walking-dead-wallpaper-for-android/The-walking-dead-wallpaper-for-android-Group-Walking-dead-.jpg',
      description: 'Os mortos voltam a vida e rick tem q salvar o mundo ou apenas tentar sobreviver.',
      id: 0,
      img: 'https://i.pinimg.com/originals/d7/b6/36/d7b636f3c6e99c231cf6018c872dd3db.jpg'
    },
    {
      title: 'Free guy',
      cardImg: 'https://rare-gallery.com/mocahbig/1386539-Free-Guy-Movie-Ryan-Reynolds-Jodie-Comer.jpg',
      description: `Um filme envolvendo açao do começo ao fim em busca de grandes 
      aventuras e fugindo do perigo a todo momento, inspirado em gta
      esste homem vive em um mundo virtual`,
      id: 1,
      img: 'https://images8.alphacoders.com/108/thumb-1920-1083765.jpg',
    }
  ];

  return (
    <div style={{ marginBottom: '3rem' }}>
      <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          // autoplay={{ delay: 3000 }}
        >
          {movies.map(({ title, description, img, cardImg, id }, index) => (
            isActive && (
              <SwiperSlide 
                key={index}
              >
                <Container>
                  <Modal 
                    buttonText='Watch trailer'
                    children={<img src={img} alt='trailer' />}
                    show={show} 
                    onClick={() => {}}
                    onClose={() => setShow(false)}
                  />
                  <div
                    className={`hero-slide__item active`}
                    style={{ backgroundImage: `url(${img})`, opacity: `${show ? (0.2) : (1)}`}}
                  >
                      <div className="hero-slide__item__content container">
                        <div className="hero-slide__item__content__info">
                          <h2 className="title">{ title }</h2>
                          <div className="overview">
                            { description }
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
                          <img src={cardImg} alt='Card image trailer' />
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