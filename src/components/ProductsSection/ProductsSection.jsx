import { ProductsCard } from '../ProductsCard/ProductsCard';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import '../../css/App.css';

export const ProductsSection = ({ category }) => {
  return (
    <div className="products-section-container">
      <h2>{category}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={14}
        // slidesPerView={2}
        speed={600}
        navigation={{ clickable: true }}
        // Responsive breakpoints
        breakpoints= {{
          // when window width is >= 100px
          100: {
            slidesPerView: 2,
          },
          // when window width is >= 510px
          510: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 1024px
          1024 : {
            slidesPerView: 4,
          }
        }}
      >
        <SwiperSlide>
          <ProductsCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCard />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}