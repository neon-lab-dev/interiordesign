import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ICONS } from "../../assets/Assets"
import Card from '../Card/Card';

const CategorizedProducts = ({sectionTitle, bgColor = ""}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBestSellers = async () => {
            try {
                const response = await fetch('https://interior-design-backend-nine.vercel.app/api/v1/products');
                const data = await response.json();
                if (data.success) {
                    setProducts(data.products);
                }
            } catch (error) {
                console.error('Error fetching best sellers:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBestSellers();
    }, []);

    return (
        <section className="home-sections d-flex flex-column bg-1" style={{backgroundColor : bgColor}}>
            <div className="home-sections-header d-flex align-items-center justify-content-between">
                <h2>{sectionTitle}</h2>
                <div className="d-flex gap-2 icons">
                    <img
                        src={ICONS.rightArrowEnabled}
                        alt="Previous"
                        className="swiper-button-prev"
                        style={{ transform: 'rotate(180deg)', cursor: 'pointer' }}
                    />
                    <img
                        src={ICONS.rightArrowEnabled}
                        alt="Next"
                        className="swiper-button-next"
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <Swiper
                    spaceBetween={24}
                    slidesPerView="auto"
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className="swiper-container"
                    breakpoints={{
                        320: { slidesPerView: 1.2 },
                        480: { slidesPerView: 1.6 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 3.5 },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product._id} style={{ width: 'auto' }}>
                            <Card product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            )}
        </section>
    );
}

export default CategorizedProducts;