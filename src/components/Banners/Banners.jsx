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
        speed={600}
        navigation={{ clickable: true }}
        pagination={{ clickable: true, type: 'bullets' }}
        autoplay={{ delay: 5000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        id="main-banner"
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

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        speed={600}
        navigation={{ clickable: true }}
        // pagination={{ clickable: true, type: 'bullets' }}
        autoplay={{ delay: 5000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        id="promotion-banner"
      >
        <SwiperSlide>
          <div className="carousel-item">
            <span>PARCELE 3X SEM JUROS</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item">
            <span>5% DESCONTO À VISTA</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item">
            <span>LOJA 100% SEGURA</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item">
            <span>ENTREGA EM TODO BRASIL</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}