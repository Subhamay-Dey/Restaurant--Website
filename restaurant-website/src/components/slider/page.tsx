import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from "./style.module.scss"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import 'swiper/swiper-bundle.min.css';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import { IonIcon } from '@ionic/react';
import 'ionicons/icons';

import slide_img1 from "../../../public/images/img_1.jpg";
import slide_img2 from "../../../public/images/img_2.jpg";
import slide_img3 from "../../../public/images/img_3.jpg";
import slide_img4 from "../../../public/images/img_4.jpg";
import slide_img5 from "../../../public/images/img_5.jpg";
import slide_img6 from "../../../public/images/img_6.jpg";
import slide_img7 from "../../../public/images/img_7.jpg";

function Slider() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          // clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_img1.src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img2.src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img3.src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img4.src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img5.src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img6.src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img7.src} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <IonIcon name="arrow-back-outline" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <IonIcon name="arrow-forward-outline" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </Swiper>
    </div>
  )
}

export default Slider