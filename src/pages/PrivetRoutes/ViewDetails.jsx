import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ProductContext } from "../../provider/ProductInfoProvider";
import ProductCard from "../../components/ProductCard";
import Hero from "../../components/Hero";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import useAuth from "../../components/hooks/useAuth";
import Swal from "sweetalert2";

const ViewDetails = () => {
  // toast
  Swal.mixin({
    toast: true,
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
  const { products } = useContext(ProductContext);
  const { user } = useAuth();

  const {
    _id,
    productUrl,
    productRating,
    StockProduct,
    ProcessTime,
    productCustomization,
    productCate,
    productDesc,
    productName,
    productPrice,
  } = useLoaderData();

  const handleAddToCard = () => {
    const infoTocart = {
      productId:_id,
      productUrl,
      StockProduct,
      productName,
      productPrice,
      buyerEmail: user?.email,
    };
    //   fetch for database
    fetch("https://equi-sports-server-green.vercel.app/addToCart", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(infoTocart),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.message){
           return
        }
        //fancy alert
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product add to cart successfully 🛒✨",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  //
  return (
    <>
      <Helmet>
        <title>Home || product details</title>
      </Helmet>
      <div className="py-4 my-10 ">
        <Hero title={"Product Details"} path={location?.pathname} />
      </div>
      {/*  */}
      <Fade delay={200} duration={1500}>
        <div className="w-11/12 mx-auto md:px-3 lg:px-14 py-20 space-y-20 bg-white">
          <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-6">
            <figure className="w-full md:w-1/2 mx-auto">
              <img
                className="md:h-[360px] lg:h-[460px] mx-auto"
                src={productUrl}
                alt=""
              />
            </figure>
            <div className="w-full md:w-1/2 mx-auto space-y-4 md:p-4">
              <h1 className="text-3xl font-bold uppercase">{productName}</h1>
              <div className="flex justify-start gap-3 items-center">
                <p>{productRating}</p>
                <div className="flex items-center">
                  {Array(Math.round(productRating))
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">
                        ★
                      </span>
                    ))}
                </div>
              </div>
              <h1 className="text-2xl font-semibold text-[#545454]">
                ${productPrice}
              </h1>
              <p className="text-base text-[#5e5e5e] pt-5">{productDesc}</p>
              <div className="flex justify-start gap-10 pb-10">
                <div className="text-base space-y-2">
                  <p className="uppercase font-semibold "> Categories:</p>
                  <p className="uppercase font-semibold ">in stocks :</p>
                  <p className="uppercase font-semibold ">Customization: </p>
                  <p className="uppercase font-semibold">Processing Time:</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-[#5e5e5e] capitalize font-normal">
                    {productCate}
                  </p>
                  <p className="text-sm text-[#5e5e5e] capitalize font-normal">
                    {StockProduct} products
                  </p>
                  <p className="text-sm text-[#5e5e5e] capitalize font-normal">
                    {productCustomization}
                  </p>
                  <p className="text-sm text-[#5e5e5e] capitalize font-normal">
                    {ProcessTime} days
                  </p>
                </div>
              </div>
              <Link to={`/view-details/cart/${user?.email}`}>
                {" "}
                <button
                  onClick={handleAddToCard}
                  className="btn w-full uppercase text-xl bg-[#323232] text-white hover:bg-slate-700"
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-medium py-2">Connect With Us</h1>
            <div className="border-t py-3 capitalize flex justify-start items-center gap-6 text-xl font-medium">
              <span>
                <a href="#">facebook</a>
              </span>
              <span>
                <a href="#">Twitter</a>
              </span>
              <span>
                <a href="#">Pinterest</a>
              </span>
            </div>
          </div>
          {/*Releted products  */}
          <div className="">
            <h1 className="text-3xl font-medium capitalize border-b pb-2">
              Releted Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
              {products
                .filter((product) => product.productCate === productCate)
                .filter((item) => item._id !== _id)
                .map((rProduct) => (
                  <ProductCard rProduct={rProduct} />
                ))}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ViewDetails;
