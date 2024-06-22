import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/swiper-bundle.min.css';

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
import Image from 'next/image';


function Slider() {
  return (
    <div className="container">
      <h1 className='heading'>Slider</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }
        }
        className='swiper_container'
      >
        <SwiperSlide>
          <Image src={slide_img1} alt='slide_image'/>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={slide_img2} alt='slide_image'/>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={slide_img3} alt='slide_image'/>
        </SwiperSlide>
        
        <SwiperSlide>
          <Image src={slide_img4} alt='slide_image'/>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={slide_img5} alt='slide_image'/>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={slide_img6} alt='slide_image'/>
        </SwiperSlide>

        <SwiperSlide>
          <Image src={slide_img7} alt='slide_image'/>
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev">
            <ion-icon name=""></ion-icon>
          </div>
        </div>

      </Swiper>
    </div>
  )
}

export default Slider