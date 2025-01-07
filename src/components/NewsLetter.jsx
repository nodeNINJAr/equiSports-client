import React, { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { ProductContext } from "../provider/ProductInfoProvider";

const NewsLetter = () => {
  //
  const { darkMode } = useContext(ProductContext);
  return (
    <div className={`${darkMode ? "bg-black" : "bg-gray-50"} text-white py-8`}>
      <div className="w-11/12 mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Text Section */}
        <Slide direction="up">
          <div className="mb-4 lg:mb-0">
            <h2 className={`${darkMode ? "text-gray-50" : "text-gray-900"} text-xl lg:text-2xl font-bold uppercase`}>
              Sign up for news & get 15% off
            </h2>
            <p className="text-sm text-gray-500">
              Make sure you don’t miss interesting happenings by joining our
              newsletter program
            </p>
          </div>
        </Slide>

        {/* Input Section */}
        <Slide className="flex w-full sm:w-auto" direction="down">
          <Link to="/discount-signUp">
            <button
              type="button"
              className="px-6 py-3 bg-gray-700 text-white font-semibold uppercase rounded-md hover:bg-gray-600 transition duration-300"
            >
              Subscribe!
            </button>
          </Link>
        </Slide>
      </div>
    </div>
  );
};

export default NewsLetter;
