import React from "react";
import { Slide } from "react-awesome-reveal";

const Hero = ({ title, path }) => {
  return (
    <div className="bg-[#272727] py-20 sm:py-36">
      <div className="text-center space-y-6 w-11/12 mx-auto">
        <Slide duration={2000} direction="down">
          <h1
            className="text-4xl sm:text-6xl font-DMSans uppercase font-semibold text-white"
          >
            {title}
          </h1>
        </Slide>
        <Slide duration={2000} direction="up">
          <p
            data-tooltip-id="my-tooltip-2"
            data-tooltip-content={path}
            className="text-xl font-normal font-DMSans tracking-tight text-[#919191] whitespace-nowrap text-ellipsis overflow-hidden"
          >
            Home{path.split("/").join(" > ")}
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default Hero;
