// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { ICONS } from "../../assets/Assets";
import Card from "../Card/Card";

const BestSellers = () => {
    return (
        <section className="home-sections d-flex flex-column bg-1">
            <div className="home-secitons-header d-flex align-items-center justify-content-between">
                <h2>Our Best Sellers</h2>
                <div className="d-flex align-items-start gap-1 icons">
                    <img src={ICONS.rightArrowEnabled} alt="Left Arrow" className="swiper-button-prev" style={{ 'transform': 'rotate(180deg)' }} />
                    <img src={ICONS.rightArrowEnabled} alt="Right Arrow" className="swiper-button-next" />
                </div>
            </div>

            <Swiper
                spaceBetween={32}
                slidesPerView="3.5"
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next', // Reference custom buttons
                    prevEl: '.swiper-button-prev',
                }}
                className="swiper-container"

                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide style={{ width: '320px' }}><Card /></SwiperSlide>
                <SwiperSlide style={{ width: '320px' }}><Card /></SwiperSlide>
                <SwiperSlide style={{ width: '320px' }}><Card /></SwiperSlide>
                <SwiperSlide style={{ width: '320px' }}><Card /></SwiperSlide>
                <SwiperSlide style={{ width: '320px' }}><Card /></SwiperSlide>
                <SwiperSlide style={{ width: '320px' }}><Card /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default BestSellers;
