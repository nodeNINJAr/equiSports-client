import React from "react";

const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-DMSans">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-extrabold text-red-600">
          {errorCode || "Error"}
        </h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          {errorMessage|| "Something went wrong"}
        </h2>
        <p className="mt-2 text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again later or contact
          support.
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
