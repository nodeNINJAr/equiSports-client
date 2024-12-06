import React, { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { ProductContext } from "../provider/ProductInfoProvider";
import Swal from "sweetalert2";
import { Fade, Slide } from "react-awesome-reveal";

const ProductCard = ({ product, uniqueProduct, rProduct }) => {
  //
  const { products, setProducts } = useContext(ProductContext);
  //
  const {
    _id,
    productUrl,
    productRating,
    StockProduct,
    productCate,
    processingtime,
    productDesc,
    productName,
    productPrice,
  } = product || uniqueProduct || rProduct;

  const handleDelete = (id) => {
    //
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // product delete from database
        fetch(`http://localhost:5000/allproduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              setProducts(products.filter((item) => item._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "🗑️ Product Deleted Successfully! 🚫",
                icon: "success",
              });
            }
          });
      }
    });
  };

  //
  return (
    <>
      <Fade delay={200} duration={1500}>
        <div className="box-border overflow-hidden group  hover:border border-slate-200 hover:px-3 hover:pt-3 transition-all ease-in-out duration-300 rounded-sm ">
          {" "}
          <div className="relative rounded-sm ">
            {uniqueProduct && (
              <>
                <div className="absolute top-3 left-1  w-0 bg-blue-400 hover:bg-green-500 text-white text-center opacity-0 group-hover:w-24 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-full">
                  {" "}
                  <Link to={`/my-equipment-list/update-product/${_id}`}>
                    {" "}
                    <button className="w-full h-full text-white font-normal font-barlow tracking-normal text-lg flex justify-center items-center gap-1 ">
                      <AiFillEdit /> Update
                    </button>
                  </Link>
                </div>
                <div className="absolute top-3 right-1  w-0 bg-[#F44A16] hover:bg-[#ff3932] text-white text-center opacity-0 group-hover:w-24 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-full">
                  {" "}
                  <button
                    onClick={() => handleDelete(_id)}
                    className="w-full h-full text-white transition-all ease-in-out duration-200 hover:text-black font-medium font-barlow tracking-widest text-lg flex justify-center items-center gap-1 "
                  >
                    Delete <MdDeleteForever />
                  </button>
                </div>{" "}
              </>
            )}
            <img
              className="w-full xl:h-72 rounded-sm object-cover"
              src={productUrl}
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#A0A0A0] hover:bg-[#F44A16] text-white text-center opacity-0 group-hover:h-10 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              {" "}
              <Link to={`/view-details/${_id}`}>
                {" "}
                <button className="w-full h-full text-white font-semibold font-barlow tracking-widest text-lg ">
                  View Details
                </button>
              </Link>
            </div>{" "}
          </div>
          <div className="py-4 relative">
            <div className="font-bold text-xl mb-2 whitespace-nowrap overflow-ellipsis overflow-hidden">
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
                className="text-gray-700 text-base whitespace-nowrap overflow-ellipsis overflow-hidden"
              >
                {productDesc}
              </p>
            )}
            <div className="flex justify-between items-center pt-4">
              <p className="text-gray-900 text-xl font-bold">
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
