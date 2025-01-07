import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const CategorySlider = () => {
  const swiperData = [
    {
      src: "https://i.ibb.co.com/MSTd5N2/dsc-spliit-500-english-willow-cricket-bat-ind-1.jpg",
      alt: "Cricket Bat",
      category: "cricket-bat",
      label: "Cricket Bat",
    },
    {
      src: "https://i.ibb.co.com/zF5XzXr/dsc-cricket-shoes-hawk-6.jpg",
      alt: "Sports Shoes",
      category: "sports-shoes",
      label: "Sports Shoes",
    },
    {
      src: "https://i.ibb.co.com/18wQXWH/Kitbag.jpg",
      alt: "Bags",
      category: "bags",
      label: "Bags",
    },
    {
      src: "https://i.ibb.co.com/NrnNf74/Batting-Pads.jpg",
      alt: "Leg Guards",
      category: "leg-guards",
      label: "Leg Guards",
    },
    {
      src: "https://i.ibb.co.com/XxnpNZZ/zoomer02.jpg",
      alt: "Cricket Ball",
      category: "cricket-ball",
      label: "Cricket Ball",
    },
    {
      src: "https://i.ibb.co.com/XFzqRwP/dsc-ruffle-batting-gloves-white-green-orange-4.jpg",
      alt: "Gloves",
      category: "gloves",
      label: "Gloves",
    },
    {
      src: "https://i.ibb.co.com/CJSSCKh/racket-shuttlecock-badminton-692-removebg-preview.png",
      alt: "Racket",
      category: "batminton-racket",
      label: "Racket",
    },
    {
      src: "https://i.ibb.co.com/8bZZVX5/dsc-helmet-2022-2023-scud-lite-titanium-blu-1-2.jpg",
      alt: "Cricket Helmet",
      category: "cricket-helmet",
      label: "Cricket Helmet",
    },
  ];
  
  
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
     {swiperData?.map(item=>(
         <SwiperSlide>
         <div className="relative w-full h-32 sm:h-40 lg:h-[190px] mx-auto group">
           <div className="w-full h-full rounded-lg inset-1 opacity-20 group-hover:opacity-70 transition-opacity ease-in-out duration-500 bg-gray-700 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
           <img
             src={item?.src}
             alt={item?.alt}
             className=" h-32 sm:h-40 lg:h-[190px] w-full mx-auto object-cover rounded-lg"
           />
           <Link to={`/categories-products/${item?.category}`}>
             <p className="truncate opacity-0 group-hover:opacity-100 transition-opacity  ease-in-out duration-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#EC3D08] bg-slate-300 rounded-lg px-1 py-1 cursor-pointer font-medium text-xl">
              {item?.label}
             </p>
           </Link>
         </div>
       </SwiperSlide>
     ))}
     
    </Swiper>
  );
};

export default CategorySlider;
