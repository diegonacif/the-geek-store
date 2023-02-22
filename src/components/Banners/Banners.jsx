import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

export const Banners = () => {
  return (
    <div className="banners-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        navigation={{ clickable: true }}
        pagination={{ clickable: true, type: 'bullets' }}
        autoplay={{ delay: 5000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="carousel-item" id="carousel-item-1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item" id="carousel-item-2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item" id="carousel-item-3"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item" id="carousel-item-4"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}