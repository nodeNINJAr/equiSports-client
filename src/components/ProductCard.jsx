import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({ product,uniqueProduct, uniqueData , setUniqueData }) => {
  console.log(uniqueData)
  const {
    _id,
    productUrl,
    productRating,
    StockProduct,
    processingtime,
    productDesc,
    productName,
    productPrice,
  } = product || uniqueProduct;


const handleDelete = (id)=>{
  // product delete from database
fetch(`http://localhost:5000/allproduct/${id}`,{
  method:"DELETE"
})
.then(res=> res.json())
.then(data=>{
  alert("product deleted");
  console.log(data);
  setUniqueData(uniqueData.filter( item => item._id !== id))
})

}

  // 
  return (
    <div className="box-border overflow-hidden group  hover:border border-slate-200 hover:p-3 transition-all ease-in-out duration-300 rounded-sm ">
      {" "}
      <div className="relative rounded-sm ">
        <img className="w-full h-56 rounded-sm" src={productUrl} alt="" />
        <div className="absolute bottom-0 left-0 w-full h-0 bg-[#A0A0A0] hover:bg-[#F44A16] text-white text-center opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-300 ease-in-out">
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
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p
          title={productDesc}
          className="text-gray-700 text-base whitespace-nowrap overflow-ellipsis overflow-hidden"
        >
          {productDesc}
        </p>
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
        {
          uniqueProduct &&  <>
            <div className="absolute bottom-0 left-0  w-0 bg-blue-400 hover:bg-green-500 text-white text-center opacity-0 group-hover:w-24 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-full">
              {" "}
              <Link to="/my-equipment-list/update-product">
                {" "}
                <button className="w-full h-full text-white font-normal font-barlow tracking-normal text-lg flex justify-center items-center gap-1 ">
                  <AiFillEdit /> Update
                </button>
              </Link>
            </div>
            <div className="absolute bottom-0 right-0  w-0 bg-[#F44A16] hover:bg-[#ff3932] text-white text-center opacity-0 group-hover:w-24 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-full">
              {" "}
                <button onClick={()=>handleDelete(_id)}  className="w-full h-full text-white transition-all ease-in-out duration-200 hover:text-black font-medium font-barlow tracking-widest text-lg flex justify-center items-center gap-1 ">
                  Delete <MdDeleteForever />
                </button>
            </div>{" "}
          </>
        }
      </div>
    </div>
  );
};

export default ProductCard;
