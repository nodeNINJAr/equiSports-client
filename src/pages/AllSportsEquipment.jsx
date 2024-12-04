import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
  //
  const data = useLoaderData();

  //
  return (
    <div className="w-11/12 mx-auto py-16">
      {
        data? <table className="table text-center overflow-auto bg-slate-50">
        {/* head */}
        <thead className="bg-slate-300">
          <tr className="text-base">
            <th>idx</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Price</th>
            <th>Product Ratings</th>
            <th className="text-[#F44A16]">Total : {data.length}  Products</th>
          </tr>
        </thead>
         {(Array.isArray(data) ? data : []).map((product, idx) => (
          <tbody key={idx+"x"} className="">
            {/* row 1 */}
            <tr className="hover:bg-slate-200 text-sm font-DMSans tracking-normal">
              <th>{idx + 1}</th>
              <td>{product.productName}</td>
              <td>{product.productCate}</td>
              <td>{product.productPrice} Taka</td>
              <td>{product.productRating} ⭐ </td> 
              <td><Link to={`/view-details/${product._id}`}><button className="flex justify-center  w-32 mx-auto hover:bg-[#F44A16]  hover:text-[#FFF] transition-all ease-in-out duration-200 px-4 py-1 rounded-full  font-medium text-[12px]  items-center gap-1">View Details<GoArrowUpRight /></button></Link></td>
            </tr>
            {/* <Link className="" ><span>View Details</span> <span></span></Link> */}
          </tbody>
        ))}
      </table> : ""
      }
    </div>
  );
};

export default AllSportsEquipment;
