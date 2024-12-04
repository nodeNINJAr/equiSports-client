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
        data? <table className="table text-center">
        {/* head */}
        <thead className="">
          <tr>
            <th>idx</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Price</th>
            <th>Product Ratings</th>
          </tr>
        </thead>
         {(Array.isArray(data) ? data : []).map((product, idx) => (
          <tbody key={idx+"x"} className="">
            {/* row 1 */}
            <tr className="hover:bg-slate-100 ">
              <th>{idx + 1}</th>
              <td>{product.productName}</td>
              <td>{product.productCate}</td>
              <td>{product.productPrice}</td>
              <td>{product.productRating}</td> 
              <td><Link className="hover:bg-[#F44A16]  hover:text-[#FFF] transition-all ease-in-out duration-200 px-4 py-1 rounded-full  font-medium text-[12px] flex items-center gap-1 float-start" to={`/view-details/${product._id}`}><span>View Details</span> <span><GoArrowUpRight /></span></Link></td>
            </tr>
               
          </tbody>
        ))}
      </table> : ""
      }
    </div>
  );
};

export default AllSportsEquipment;
