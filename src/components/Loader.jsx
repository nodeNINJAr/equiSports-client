import Lottie from "lottie-react";
import React from "react";
import loader from "../assets/lottie/Main Scene (1).json"
const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <Lottie  animationData={loader} loop={true} style={{ width: 100, height: 100 }}></Lottie>
    </div>
  );
};

export default Loader;
