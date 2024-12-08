import React from "react";

const DiscountSignUp = () => {
  return (
    <div className="flex items-center justify-center p-4 sm:p-0 min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          GET A <span className="bg-black text-white px-1">15% DISCOUNT</span>
        </h1>
        <p className="text-sm text-gray-700 mb-6">
          Sign up for the newsletter and receive a <span className="font-bold">15%</span> on your first purchase. Applies
          to orders of a minimum of 2 full-priced products.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="E-mail address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition duration-300"
          >
            SIGN UP
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4">
          * The coupon is valid on a minimum purchase of two non-discounted products until 31.01.2025.
          <br />
          ** You will receive the voucher after completing the form and confirming your newsletter subscription.
        </p>
      </div>
    </div>
  );
};

export default DiscountSignUp;
