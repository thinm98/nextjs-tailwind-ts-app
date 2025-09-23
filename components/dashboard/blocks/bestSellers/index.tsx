"use client";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../../../common/product";
import "./styles.scss";

const products = [
  {
    name: "Portofino Shirt",
    material: "LINEN",
    color: "Sky Blue",
    totalColors: 26,
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
  {
    name: "Siena Shirt",
    material: "COTTON PIQUÉ",
    color: "Sage Green",
    totalColors: 13,
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
  {
    name: "Classic Shirt",
    material: "DENIM",
    color: "Light Blue",
    totalColors: 6,
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
];

const BestSellers = () => {
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
        <h2 className="text-2xl font-serif mb-8">BEST SELLERS</h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            breakpoints={{
              440: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3.8 },
              1024: { slidesPerView: 4.5 },
            }}
            onSwiper={onSwiper}
            onSlideChange={onSlideChange}
            className="best-sellers-swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Product {...product} />
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

export default BestSellers;
