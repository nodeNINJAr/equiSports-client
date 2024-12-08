import React, { useContext, useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../provider/ProductInfoProvider";
import Loader from "../components/Loader";
import Hero from "../components/Hero";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Lottie from "lottie-react";
import addFirstIcon from "../assets/lottie/noitemhere.json";
import { Helmet } from "react-helmet";
// 
const AllSportsEquipment = () => {
  //
  const { products, loaderP } = useContext(ProductContext);
  //
  const [sortedProducts, setSortedProducts] = useState(Array.isArray(products) ? products : []);
  //
  const [search, setSearch] = useState("");
  //
  const location = useLocation();
  // for sort
  const [active, setActive] = useState(false);
  const [showToggle, setShowToggle] = useState({
    price: "By price",
    rating: "By ratings",
  });
  const [activeSort, setActiveSort] = useState("");
  //
  const handleActive = (boolean) => {
    setActive(boolean);
    if (!boolean) {
      setShowToggle({});
      setActiveSort("");
      setSortedProducts(products);
    } else {
      setShowToggle({ price: "BY price", rating: "By ratings" });
    }
  };
  //
  const handleSortByprice = (sortBy) => {
    setActiveSort(sortBy);
    const sortedData = [...sortedProducts].sort(
      (a, b) => a.productPrice - b.productPrice
    );
    setSortedProducts(sortedData);
  };
  //
  const handleSortByRaing = (sortBy) => {
    setActiveSort(sortBy);
    const sortedData = [...sortedProducts].sort(
      (a, b) => b.productRating - a.productRating
    );
    setSortedProducts(sortedData);
  };

  // search
  useEffect(() => {
    fetch(`https://equi-sports-server-green.vercel.app/findProducts?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setSortedProducts(data);
      });
  }, [search]);

  // func for search
  const handleSearch = (e) => {
    const productName = e.target.value;
    setSearch(productName);
  };

  //
  return (
    <>
    <Helmet>
       <title>Home || All Sports Equipment</title>
    </Helmet>
      <div className="py-4 my-10 ">
        <Hero title={"all sport equipment"} path={location?.pathname} />
      </div>
      <div className="bg-slate-50">
        {/* {"sort "} */}
        <div className="flex justify-between items-center flex-wrap sm:flex-nowrap py-5 gap-10 px-4 md:px-0 md:w-11/12 mx-auto relative">
          <div className="sm:w-3/12 cursor-pointer">
            {active ? (
              <div className="relative ">
                <div
                  onClick={() => handleActive(false)}
                  className={
                    !active
                      ? ""
                      : "bg-green-400 w-40 rounded-lg flex justify-center items-center gap-1 py-2 font-medium text-xl"
                  }
                >
                  Sort
                  <p>
                    {activeSort === showToggle?.price && showToggle?.price}{" "}
                    {activeSort === showToggle?.rating && showToggle?.rating}
                  </p>{" "}
                  <MdOutlineKeyboardArrowUp />
                </div>
                <span
                  data-tooltip-id="my-tooltip-3"
                  data-tooltip-content={
                    "For Default Value click on Sort Button"
                  }
                  className={
                    active
                      ? "absolute top-12 left-0 bg-slate-400 w-32 px-2 py-2 rounded-lg z-50 text-lg transition-all ease-in-out duration-300 capitalize"
                      : "absolute top-0 left-0"
                  }
                >
                  <p
                    className={
                      activeSort === showToggle?.price
                        ? "bg-red-400 rounded-md text-white px-2"
                        : "hover:bg-white hover:rounded-md px-2"
                    }
                    onClick={() => handleSortByprice(showToggle?.price)}
                  >
                    {showToggle?.price}
                  </p>
                  <p
                    className={
                      activeSort === showToggle?.rating
                        ? "bg-red-400 rounded-md text-white px-2"
                        : "hover:bg-white hover:rounded-md px-2"
                    }
                    onClick={() => handleSortByRaing(showToggle?.rating)}
                  >
                    {showToggle?.rating}
                  </p>
                </span>
              </div>
            ) : (
              <div
                onClick={() => handleActive(true)}
                className="bg-slate-300 w-40 rounded-lg flex justify-center items-center gap-1 py-2 font-medium text-xl"
              >
                Sort<p></p> <MdOutlineKeyboardArrowDown />
              </div>
            )}
          </div>
          {/*  */}
          <div className="w-full md:w-6/12 sm:mr-[150px] lg:mr-48">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input
                onChange={handleSearch}
                type="text"
                className="w-full"
                placeholder="Search By Product Name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="sm:w-3/12 text-end text-[#F44A16] font-semibold text-xl absolute top-7 right-4 md:right-0    ">
            {" "}
            Total : {products.length} Product
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto pb-16 pt-8 overflow-auto">
          {
            sortedProducts.length > 0 ? (
              !loaderP ? (
                <table className="table table-pin-rows w-full text-center bg-slate-50 z-0">
                  {/* head */}
                  <thead className="bg-slate-300">
                    <tr className="text-base">
                      <th>Serial No</th>
                      <th>Product Name</th>
                      <th>Product Category</th>
                      <th>Product Price</th>
                      <th>Product Ratings</th>
                      <th>Product Details</th>
                    </tr>
                  </thead>
                  {/*  */}
                  {sortedProducts.map((product, idx) => (
                    <tbody key={idx + "x"} className="">
                      {/* row 1 */}
      
                      <tr className="hover:bg-slate-100 text-sm font-DMSans tracking-normal bg-white">
                        <th>{idx + 1}</th>
                        <td>{product.productName}</td>
                        <td>{product.productCate}</td>
                        <td>{product.productPrice} $</td>
                        <td>{product.productRating} ⭐ </td>
                        <td>
                          <Link to={`/view-details/${product._id}`}>
                            <button className="flex justify-center  w-32 mx-auto hover:bg-[#F44A16]  hover:text-[#FFF] transition-all ease-in-out duration-200 px-4 py-1 rounded-full  font-medium text-[12px]  items-center gap-1">
                              View Details
                              <GoArrowUpRight />
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              ) : (
                <Loader />
              )
            )
             :  <div className="w-2/3 md:w-1/2 lg:w-1/3 mx-auto pt-10">
             <Lottie animationData={addFirstIcon} loop={true}></Lottie>
           </div>
          }
      </div>
    </>
  );
};

export default AllSportsEquipment;
