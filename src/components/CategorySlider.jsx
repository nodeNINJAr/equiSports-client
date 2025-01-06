import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const CategorySlider = () => {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#EC3D08",
        "--swiper-pagination-background": "#EC3D08",
      }}
      slidesPerView={4}
      spaceBetween={30}
      breakpoints={{
        340: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
      autoplay={{
        delay: 4000, // Delay between transitions in milliseconds
        disableOnInteraction: false, // Keep autoplay running even after interaction
      }}
      loop={true}
    >
      <SwiperSlide>
        <div className="relative w-full h-32 sm:h-40 lg:h-[200px] mx-auto group">
          <img
            src="https://i.ibb.co.com/MSTd5N2/dsc-spliit-500-english-willow-cricket-bat-ind-1.jpg"
            alt=""
            className=" h-32 sm:h-40 lg:h-[200px] w-full mx-auto object-cover rounded-lg"
          />
          <Link to="/categories-products/cricket-bat">
            <p className="hidden group-hover:flex transition-all  ease-in-out duration-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#EC3D08] bg-slate-300 rounded-lg px-1 py-1 cursor-pointer font-medium text-xl">
              Cricket Bat
            </p>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-32 sm:h-40 lg:h-[200px] mx-auto group ">
          <img
            src="https://i.ibb.co.com/zF5XzXr/dsc-cricket-shoes-hawk-6.jpg"
            alt=""
            className=" h-32 sm:h-40 lg:h-[200px] w-full mx-auto object-cover rounded-lg"
          />
          <Link to="/categories-products/sports-shoes">
            <p className="hidden group-hover:flex transition-all  ease-in-out duration-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#EC3D08] bg-slate-300 rounded-lg px-1 py-1 cursor-pointer font-medium text-xl">
              Sports shoes
            </p>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-32 sm:h-40 lg:h-[200px] mx-auto group ">
          <img
            src="https://i.ibb.co.com/18wQXWH/Kitbag.jpg"
            alt=""
            className=" h-32 sm:h-40 lg:h-[200px] w-full mx-auto object-cover rounded-lg"
          />
          <Link to="/categories-products/Bags">
            <p className="hidden group-hover:flex transition-all  ease-in-out duration-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#EC3D08] bg-slate-300 rounded-lg px-1 py-1 cursor-pointer font-medium text-xl">
              Bags
            </p>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-32 sm:h-40 lg:h-[200px] mx-auto group ">
          <img
            src="https://i.ibb.co.com/NrnNf74/Batting-Pads.jpg"
            alt=""
            className=" h-32 sm:h-40 lg:h-[200px] w-full mx-auto object-cover rounded-lg"
          />
          <Link to="/categories-products/leg-guards">
            <p className="hidden group-hover:flex transition-all  ease-in-out duration-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#EC3D08] bg-slate-300 rounded-lg px-1 py-1 cursor-pointer font-medium text-xl">
              Leg Guards
            </p>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-32 sm:h-40 lg:h-[200px] mx-auto group ">
          <img
            src="https://i.ibb.co.com/XxnpNZZ/zoomer02.jpg"
            alt=""
            className=" h-32 sm:h-40 lg:h-[200px] w-full mx-auto object-cover rounded-lg"
          />
          <Link to="/categories-products/cricket-ball">
            <p className="hidden group-hover:flex transition-all  ease-in-out duration-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#EC3D08] bg-slate-300 rounded-lg px-1 py-1 cursor-pointer font-medium text-xl">
              Cricket Ball
            </p>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-32 sm:h-40 lg:h-[200px] mx-auto group ">
          <img
            src="https://i.ibb.co.com/XFzqRwP/dsc-ruffle-batting-gloves-white-green-orange-4.jpg"
            alt=""
            className=" h-32 sm:h-40 lg:h-[200px] w-full mx-auto object-cover rounded-lg"
          />
          <Link to="/categories-products/gloves">
            <p className="hidden group-hover:flex transition-all  ease-in-out duration-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#EC3D08] bg-slate-300 rounded-lg px-1 py-1 cursor-pointer font-medium text-xl">
              Gloves
            </p>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-32 sm:h-40 lg:h-[200px] mx-auto group  bg-slate-200 rounded-lg ">
          <img
            src="https://i.ibb.co.com/CJSSCKh/racket-shuttlecock-badminton-692-removebg-preview.png"
            alt=""
            className=" h-32 sm:h-40 lg:h-[200px] w-full mx-auto object-cover rounded-lg"
          />
          <Link to="/categories-products/batminton-racket">
            <p className=" hidden group-hover:flex transition-all  ease-in-out duration-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#EC3D08] bg-slate-300 rounded-lg px-1 py-1 cursor-pointer font-medium text-xl">
              Racket
            </p>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-32 sm:h-40 lg:h-[200px] mx-auto group ">
          <img
            src="https://i.ibb.co.com/8bZZVX5/dsc-helmet-2022-2023-scud-lite-titanium-blu-1-2.jpg"
            alt=""
            className=" h-32 sm:h-40 lg:h-[200px] w-full mx-auto object-cover rounded-lg"
          />
          <Link to="/categories-products/cricket-helmet">
            <p className=" hidden group-hover:flex transition-all  ease-in-out duration-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#EC3D08] bg-slate-300 rounded-lg px-1 py-1 cursor-pointer font-medium text-xl">
              Cricket Helmet
            </p>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CategorySlider;
