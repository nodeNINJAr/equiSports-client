import React from "react";
import { Slide } from "react-awesome-reveal";

const Hero = ({ title, path }) => {
  return (
    <div className="flex justify-between w-11/12 mx-auto flex-wrap md:flex-nowrap">
      <Slide duration={2000} direction="left">
        <h1
          title={title}
          className="text-2xl font-DMSans uppercase font-semibold whitespace-nowrap text-ellipsis overflow-hidden"
        >
          {title}
        </h1>
      </Slide>
      <Slide duration={2000} direction="right">
        <p
          title={path}
          className="text-lg font-normal font-DMSans tracking-tight text-[#575757] whitespace-nowrap text-ellipsis overflow-hidden"
        >
          Home{path}
        </p>
      </Slide>
    </div>
  );
};

export default Hero;
