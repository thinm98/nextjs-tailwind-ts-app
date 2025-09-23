"use client";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.scss";

const Posts = [
  {
    title: "The Benefits of Wearing Men's Linen Shirts",
    date: "APR 23, 2025",
    image:
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "The Portofino Linen Shirt: A Classic in Motion",
    date: "AUG 20, 2024",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Ricordi d'Estate: A Postcard from Positano",
    date: "MAY 15, 2024",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

const BlogPosts = () => {
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
        <h2 className="text-2xl font-serif mb-2">BLOG POSTS</h2>
        <div className="block lg:hidden relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            breakpoints={{
              440: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.3 },
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
            {Posts.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full banner-image">
                  <img
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="banner-image--content">
                    <div className="banner-image--content-container">
                      <div className="flex flex-col gap-1 items-start justify-start">
                        <p className="break-words sm:break-normal hyphens-auto font-serif text-[1.2rem] leading-[2rem] sm:text-sm md:text-sm font-bold sm:tracking-2 uppercase text-white text-start">
                          {post.date}
                        </p>
                        <h1 className="break-words sm:break-normal hyphens-auto font-serif text-[1.2rem] leading-[2rem] sm:text-sm md:text-sm font-bold sm:tracking-2 uppercase text-white text-start">
                          {post.title}
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
        {/* Desktop Layout - Large Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 h-[600px]">
          {/* Featured Post - Left Side */}
          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
              src={Posts[0].image}
              alt={Posts[0].title}
              width={600}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-medium mb-2 opacity-90">
                {Posts[0].date}
              </p>
              <h3 className="text-2xl font-serif font-bold leading-tight">
                {Posts[0].title}
              </h3>
            </div>
          </div>

          {/* Right Side - Two Smaller Posts */}
          <div className="flex flex-col justify-between">
            {Posts.slice(1).map((post, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[285px]"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={285}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-medium mb-1 opacity-90">
                    {post.date}
                  </p>
                  <h4 className="text-lg font-serif font-bold leading-tight">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
