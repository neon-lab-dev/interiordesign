import { useState, useRef } from "react";
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
        "“We recently worked with Spaceframe to design our dream home, and the experience was truly exceptional. From the initial consultation to the final walk-through, their team was knowledgeable, responsive, and passionate about their work. The design they created for us is not only beautiful but also functional and tailored to our lifestyle. We're so grateful to have found Spaceframe - they truly are the best in the business!”",
      author: "Aishwarya Mathur",
    },
    {
      content:
        "“Fantastic experience with this interior design firm! Their creativity and attention to detail transformed my space into something truly stunning. The team was professional, communicative, and delivered on time. Highly recommend for anyone looking to elevate their home or office design!”",
      author: "Mayank Kaushik",
    },
    {
      content:
        "“Was looking for renovating my interiors especially wardrobes, and I found the team really professional and wonderful. Was satisfied with the timely finishing of the work with accurate executions of our chosen interiors. I am happy to recommend Mr Laskhay and team for interiors.”",
      author: "Mohit Naroune",
    },
    {
      content:
        "Exceptional service and outstanding designs! The team truly understood my vision and brought it to life with elegance and style. Their professionalism and expertise are unmatched. Highly recommend!",
      author: "Pramod Srivastav",
    },
    {
      content:
        "Absolutely loved working with this interior design firm! They transformed my space into a beautiful, functional masterpiece. Attention to detail and personalized touches were spot on. Couldn’t be happier!",
      author: "Jivish Yadav",
    },
    {
      content:
        "5 stars! Spaceframe did an amazing job designing my home. Their team is professional, creative, and attentive to detail. Highly recommend!",
      author: "Infinity Enterprises",
    },
    {
      content:
        "The perfect blend of innovation and practicality! They turned my ideas into reality with impeccable taste and professionalism. Thrilled with the results!",
      author: "Prachi Bhardwaj",
    },
    {
      content:
        "Best service providers 👍👍",
      author: "iWORKK Coworking",
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

      <div className="slider-container">
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