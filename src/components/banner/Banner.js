import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

function Banner() {
  return (
    <div className="banner">
      <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
       loop={true} 
       navigation={true} 
       modules={[Navigation, Autoplay]} 
       className="mySwiper">
        <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/642ebc01b1144.png.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/641c393a31b9f.jpg.webp " alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/641d189a98df8.jpg.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/6411577c955a4.jpg.webp" alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
}
                                  
export default Banner;  