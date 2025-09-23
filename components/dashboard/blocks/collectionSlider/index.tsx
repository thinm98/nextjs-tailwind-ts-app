"use client";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const products = [
  {
    name: "Portofino Shirt",
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
  {
    name: "Siena Shirt",
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
  {
    name: "Classic Shirt",
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
];

const CollectionSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const onSwiper = (swiper: SwiperType) => {
    setTotalSlides(swiper.snapGrid.length);
  };

  const onSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="best-sellers-block px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-serif mb-8">COLLECTION SLIDER</h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            breakpoints={{
              440: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
              renderBullet: function (_, className) {
                return '<span class="' + className + '">' + "</span>";
              },
            }}
            onSwiper={onSwiper}
            onSlideChange={onSlideChange}
            className="best-sellers-swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full banner-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="banner-image--content">
                    <div className="banner-image--content-container">
                      <div className="flex flex-col gap-4 items-center justify-center">
                        <h1 className="break-words sm:break-normal hyphens-auto font-serif text-[1.2rem] leading-[2rem] sm:text-md md:text-md font-bold sm:tracking-2 uppercase text-white text-center">
                          {product.name}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="block lg:hidden absolute top-[-30px] right-0 text-sm text-gray-500">
            {activeIndex + 1} / {totalSlides}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSlider;
