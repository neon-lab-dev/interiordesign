import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { ICONS, IMAGES } from "../../../assets/Assets";

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <p className="subHeading">Testimonial</p>
        <h3 className="heading">What Our Customer Says</h3>

        <div>
            
        </div>
      </div>


      <div className="testimonial-desc">
        {/* Swiper Component */}
        <Swiper
          spaceBetween={32}
          slidesPerView="auto"
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next', // Custom button selectors
            prevEl: '.swiper-button-prev',
          }}
          className="swiper-container"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2.5,
            },
          }}
        >
          {/* Slides */}
          <SwiperSlide>
            <div className="testimonial-desc">
              <p>
                “ At Spaceframe, they have assembled an exceptional team of interior
                designers, architects, engineers, and craftsmen to turn every vision
                into a stunning reality. Their commitment to excellence and innovation
                made my dream project come to life seamlessly. ”
              </p>
              <h3>Kabir Sah</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-desc">
              <p>
                “ Excellent service! The team was professional, and they made my
                interior design journey stress-free and enjoyable. ”
              </p>
              <h3>Priya Sharma</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-desc">
              <p>
                “ I was impressed with their creativity and attention to detail.
                Highly recommend them for any interior projects! ”
              </p>
              <h3>Rohan Mehta</h3>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <div className="d-flex gap-1 icons">
          <img
            src={ICONS.leftArrowDisabled}
            alt="Left Arrow"
            className="swiper-button-prev"
            style={{ transform: 'rotate(180deg)' }}
          />
          <img
            src={ICONS.rightArrowEnabled}
            alt="Right Arrow"
            className="swiper-button-next"
          />
        </div>
        </div>
      {/* <div className="testimonial-desc">
        <p>
          “ At Spaceframe, they have assembled an exceptional team of interior
          designers, architects, engineers, and craftsmen to turn every vision
          into a stunning reality. Their commitment to excellence and innovation
          made my dream project come to life seamlessly. ”
        </p>
        <h3>Kabir Sah</h3>
      </div> */}
    </div>
  );
};

export default Testimonials;

