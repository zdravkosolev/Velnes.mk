import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {
  spaceBetween: number;
  slidesPerView: number;
  children?: React.ReactNode[];
  sliderHeight?: number;
  parentMarginY?: number;
}

const DragSwiper = ({
  spaceBetween,
  slidesPerView,
  children,
  sliderHeight,
  parentMarginY = 50,
}: Props) => {
  return (
    <div style={{ margin: `${parentMarginY}px 0` }}>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        scrollbar={{ draggable: true }}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide
            style={{ height: `${sliderHeight}px`, margin: "0 auto" }}
            key={index}
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DragSwiper;
