import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ICONS } from "../../assets/Assets";
import Card from "../Card/Card";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetch(
          "https://interior-design-backend-nine.vercel.app/api/v1/products"
        );
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching best sellers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <section className="home-sections d-flex flex-column bg-1">
      <div className="home-sections-header d-flex align-items-center justify-content-between">
        <h2>Our Best Sellers</h2>
        <div className="d-flex gap-2 icons">
          <img
            src={ICONS.rightArrowEnabled}
            alt="Previous"
            className="swiper-button-prev"
            style={{ transform: "rotate(180deg)", cursor: "pointer" }}
          />
          <img
            src={ICONS.rightArrowEnabled}
            alt="Next"
            className="swiper-button-next"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {loading ? (
        <div class="spinner-border mx-auto" role="status">
          <span class="sr-only"></span>
        </div>
      ) : (
        <Swiper
          spaceBetween={24}
          slidesPerView="auto"
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="swiper-container"
          breakpoints={{
            380: { slidesPerView: 1 },
            400: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.4 },
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.2 },
            940: { slidesPerView: 2.5 },
            1100: { slidesPerView: 2.8 },
            1280: { slidesPerView: 3.5 },
            1920: { slidesPerView: 5 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id} style={{ width: "auto" }}>
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default BestSellers;
