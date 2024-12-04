import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    productUrl,
    productRating,
    StockProduct,
    processingtime,
    productDesc,
    productName,
    productPrice,
  } = product;
  return (
    <div className="box-border overflow-hidden group  hover:border border-slate-200 hover:p-3 transition-all ease-in-out duration-300 rounded-sm ">
      {" "}
      <div className="relative rounded-sm ">
        <img
          className="w-full rounded-sm"
          src={productUrl}
          alt={product["Item Name"]}
        />
        <div className="absolute bottom-0 left-0 w-full h-0 bg-[#A0A0A0] text-white text-center opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          {" "}
            <Link to={`/view-details/${_id}`}> <button className="w-full h-full text-white font-semibold font-barlow tracking-widest text-lg ">View Details</button></Link>
        </div>{" "}
      </div>
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p title={productDesc} className="text-gray-700 text-base whitespace-nowrap overflow-ellipsis overflow-hidden">{productDesc}</p>
        <div className="flex justify-between items-center pt-4">
          <p className="text-gray-900 text-xl font-bold">${Number(productPrice).toFixed(2)}</p>
          <div className="flex items-center">
            {Array(Math.round(productRating))
              .fill()
              .map((_, i) => (
                <span key={i} className="text-yellow-500">
                  ★
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
