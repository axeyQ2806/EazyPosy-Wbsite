import { Swiper, SwiperSlide } from "swiper/react";
// import IMG1 from "../../../assets/beautiful-smiling-young-brunette-chef-white-shirt-blank-white-apron-restaurant-background.webp";

import "./SwiperSlider.css";
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[EffectFade, Autoplay]}
      className='mySwiper'
    >
      <SwiperSlide>
        <div className='swiper-img bgIMG1' />
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper-img bgIMG2' />
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper-img bgIMG3' />
      </SwiperSlide>
      <SwiperSlide>
        <div className='swiper-img bgIMG4' />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
