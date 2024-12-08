import Lottie from "lottie-react";
import React from "react";
import { Slide } from "react-awesome-reveal";
import detailsIcon from "../assets/lottie/details.json"

const SliderContent = ({ title, desc, img, btn }) => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-10 md:w-11/12 mx-auto px-4 py-20 md:p-10">
      <figure className="md:w-1/2 mx-auto">
        <Slide direction="right" duration={1500}>
          <>
            <img
              src={img}
              alt={"Premium Cricket Gear"}
              className="w-full object-cover rounded-lg md:w-10/12 mx-auto"
            />
          </>
        </Slide>
      </figure>

      <div className="md:w-1/2 mx-auto">
        <Slide direction="left" duration={1500}>
          <div className=" flex flex-col justify-center items-start p-5 gap-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-wide">
              {title}
            </h2>
            <p className="text-xl mt-2">{desc}</p>
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 font-medium flex justify-center items-center gap-4">
              {btn} <Lottie animationData={detailsIcon} loop={true} style={{width:30, height:30}} />
            </button>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default SliderContent;
