import React from "react";

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-DMSans ">
      <h1 className="text-7xl sm:text-9xl font-bold text-gray-800">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-600">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-500 text-center">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Page404;
