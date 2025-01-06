import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../provider/ProductInfoProvider";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import detailsIcon from "../assets/lottie/details.json"
// 
const ProductCard = ({ product, uniqueProduct, rProduct , categoriesProduct}) => {
  //
  const { products, setProducts  } = useContext(ProductContext);
  // 
  const {
    _id,
    productUrl,
    productRating,
    StockProduct,
    productCate,
    productDesc,
    productName,
    productPrice,
  } = product || uniqueProduct || rProduct || categoriesProduct ;

 

  //
  return (
    <>
      <Fade delay={200} duration={1500}>
        <div className="box-border overflow-hidden group  hover:border border-slate-200 hover:px-3 hover:pt-3 transition-all ease-in-out duration-300 rounded-sm">
          {" "}
          <div className="relative rounded-sm">
            <img
              className="w-full xl:h-72 rounded-sm object-cover"
              src={productUrl}
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#A0A0A0] hover:bg-[#F44A16] text-white text-center opacity-0 group-hover:h-10 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              {" "}
              <Link to={`/view-details/${_id}`}>
                {" "}
                <button className="w-full h-full text-white font-semibold font-barlow tracking-widest text-lg flex justify-center items-center gap-2">
                View Details <Lottie animationData={detailsIcon} loop={true} style={{width:30, height:30}} />
                </button>
              </Link>
            </div>{" "}
          </div>
          <div className="py-4 relative">
            <div data-tooltip-id="my-tooltip-2"
          data-tooltip-content={productName} className="font-bold text-xl mb-2 whitespace-nowrap overflow-ellipsis overflow-hidden">
              {productName}
            </div>
            {rProduct ? (
              <div className="flex justify-between items-center gap-4">
                <p># {productCate}</p>{" "}
                <p>
                  <strong>{StockProduct} </strong>Product In stock{" "}
                </p>{" "}
              </div>
            ) : (
              <p
                title={productDesc}
                className="text-base whitespace-nowrap overflow-ellipsis overflow-hidden"
              >
                {productDesc}
              </p>
            )}
            <div className="flex justify-between items-center pt-4">
              <p className="text-xl font-bold">
                ${Number(productPrice).toFixed(2)}
              </p>
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
            {/*  */}
          </div>
        </div>
        </Fade>
    </>
  );
};

export default ProductCard;
