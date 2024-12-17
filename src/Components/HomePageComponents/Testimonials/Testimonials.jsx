import React, { useState, useRef } from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ICONS } from "../../../assets/Assets";

const Testimonials = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const testimonials = [
    {
      content:
        "“ At Spaceframe, they have assembled an exceptional team of interior designers, architects, engineers, and craftsmen to turn every vision into a stunning reality. Their commitment to excellence and innovation made my dream project come to life seamlessly. ”",
      author: "Kabir Sah",
    },
    {
      content:
        "“ I was impressed with their creativity and attention to detail. Highly recommend them for any interior projects! ”",
      author: "Rohan Mehta",
    },
  ];

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <p className="subHeading">Testimonial</p>
        <h3 className="heading">What Our Customer Says</h3>

        <div className="custom-navigation">
          <img
            src={isBeginning ? ICONS.SimpleArrowLeftDisable : ICONS.SimpleArrowLeftEnable}
            alt="custom-prev"
            className={`custom-prev ${isBeginning ? "disabled" : ""}`}
            onClick={() => !isBeginning && swiperRef.current?.slidePrev()}
          />
          <img
            src={isEnd ? ICONS.SimpleArrowRightDisable : ICONS.SimpleArrowRightEnable}
            alt="custom-next"
            className={`custom-next ${isEnd ? "disabled" : ""}`}
            onClick={() => !isEnd && swiperRef.current?.slideNext()}
          />
        </div>
      </div>

      <div className="testimonial-desc">
        <Swiper
          
          spaceBetween={32}
          slidesPerView={1}
          loop={false}
          modules={[Navigation]}
          onInit={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="swiper-container-testimonial"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-desc">
                <p>{testimonial.content}</p>
                <h3>{testimonial.author}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-navigation-small">
          <img
            src={isBeginning ? ICONS.SimpleArrowLeftDisable : ICONS.SimpleArrowLeftEnable}
            alt="custom-prev"
            className={`custom-prev ${isBeginning ? "disabled" : ""}`}
            onClick={() => !isBeginning && swiperRef.current?.slidePrev()}
          />
          <img
            src={isEnd ? ICONS.SimpleArrowRightDisable : ICONS.SimpleArrowRightEnable}
            alt="custom-next"
            className={`custom-next ${isEnd ? "disabled" : ""}`}
            onClick={() => !isEnd && swiperRef.current?.slideNext()}
          />
        </div>
    </div>
  );
};

export default Testimonials;