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
          // when window width is >= 1px
          100: {
            slidesPerView: 2,
            // spaceBetween: 20,
            // width: 100
          },
          // when window width is >= 510px
          510: {
            slidesPerView: 3,
            // spaceBetween: 30,
            // width: 510
          },
          // when window width is >= 1024px
          768: {
            slidesPerView: 4,
            // spaceBetween: 40,
            // width: 1024
          },
          1024 : {
            slidesPerView: 5,
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