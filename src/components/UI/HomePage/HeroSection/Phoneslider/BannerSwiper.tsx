/* eslint-disable react/jsx-no-undef */
// Import necessary dependencies
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface BannerSwiperProps {}

const BannerSwiper: React.FC<BannerSwiperProps> = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="w-full mx-auto h-[200px]"
            src="https://png.pngtree.com/png-clipart/20240109/original/pngtree-flat-smart-digital-product-ipad-png-image_14060583.png"
            alt="Digital Product iPad"
            width={500}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full mx-auto h-[200px]"
            src="https://www.hillelementary.com/wp-content/uploads/2018/05/tumblr_static_91vdj50dmn8k88gcw4k8w4w4c.png"
            alt="Educational Graphic"
            width={500}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full mx-auto h-[200px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_J3iYG6jto1wg0tmaAw0VcJ0fgxXKOS9Z3xqfPEuAmZEtuhJiMmS0cXcrFIGLy7r6Tg&usqp=CAU"
            alt="Business Concept"
            width={500}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full mx-auto h-[200px]"
            src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-company-business-valuation-vector-concept-color-png-image_11901975.png"
            alt="Company Valuation"
            width={500}
            height={200}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
