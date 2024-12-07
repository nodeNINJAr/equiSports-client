import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {  Parallax,Navigation, Pagination, Autoplay } from "swiper/modules";
import SliderContent from "./SliderContent";

const SwiperSlider = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/y8dLynQ/cricket.png",
      title: "Premium Cricket Gear",
      description:
        "Discover high-quality cricket bats, gloves, pads, and helmets to up your game.",
      buttonText: "Explore Cricket Gear",
    },
    {
      image:"https://i.ibb.co.com/dtjtTyq/270290-P5-HOUP-915-removebg-preview.png",
      title: "Football Essentials",
      description:
        "From durable footballs to jerseys and shin guards, get ready for the field.",
      buttonText: "Shop Football Gear",
    },
    {
      image:
        "https://i.ibb.co.com/8M8P513/sport-icon-baseball-trophy-tenni-removebg-preview.png",
      title: "Badminton Rackets & Accessories",
      description:
        "Lightweight rackets, shuttlecocks, and more to elevate your badminton skills.",
      buttonText: "Browse Badminton Gear",
    },
    {
      image:
        "https://i.ibb.co.com/zPbv21m/tennis-racket-balls-hat-18591-45-removebg-preview.png",
      title: "Professional Tennis Gear",
      description:
        "Find rackets, balls, and accessories for an unparalleled tennis experience.",
      buttonText: "Check Tennis Gear",
    },
  ];

  return (
    <>
      <Swiper
        style={{
            '--swiper-navigation-color': '#EC3D08',
            '--swiper-pagination-color': '#EC3D08',
          }}
          speed={1000}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Parallax, Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 4000, // Delay between transitions in milliseconds
          disableOnInteraction: false, // Keep autoplay running even after interaction
        }}
        loop={true}
      >
        {/*  */}

        <SwiperSlide>
               <SliderContent title={slides[0].title} img={slides[0].image} desc={slides[0].description} btn={slides[0].buttonText}/>
        </SwiperSlide>
        <SwiperSlide>
               <SliderContent title={slides[1].title} img={slides[1].image} desc={slides[1].description}  btn={slides[1].buttonText}/>
        </SwiperSlide>
        <SwiperSlide>
               <SliderContent title={slides[2].title} img={slides[2].image} desc={slides[2].description} btn={slides[2].buttonText} />
        </SwiperSlide>
        <SwiperSlide>
               <SliderContent title={slides[3].title} img={slides[3].image} desc={slides[3].description}  btn={slides[3].buttonText}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
