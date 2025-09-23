"use client";

import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const products = [
    {
        name: "Portofino Shirt",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg"
    },
    {
        name: "Siena Shirt",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg"
    },
    {
        name: "Classic Shirt",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg"
    }
];

const CollectionSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    const onSwiper = (swiper: any) => {
        setTotalSlides(swiper.snapGrid.length);
    };

    const onSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className="best-sellers-block ">
            <div className="container mx-auto">
                <h2 className="text-2xl font-serif mb-8">BEST SELLERS</h2>
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        breakpoints={{
                            440: { slidesPerView: 1.2 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 2.5 },
                            1024: { slidesPerView: 3 }
                        }}
                        pagination={{
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + '</span>';
                            },
                        }}
                        onSwiper={onSwiper}
                        onSlideChange={onSlideChange}
                        className="best-sellers-swiper"
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full">
                                    <img src={product.image} alt={product.name} />
                                    <h3 className="text-2xl font-bold">{product.name}</h3>
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