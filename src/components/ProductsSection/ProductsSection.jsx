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
        slidesPerView={2}
        speed={600}
        navigation={{ clickable: true }}
        // pagination={{ clickable: true, type: 'bullets' }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        id="main-banner"
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