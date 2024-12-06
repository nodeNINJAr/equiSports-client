import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { ProductContext } from "../../provider/ProductInfoProvider";
import { AuthContext } from "../../provider/AuthProvider";
import Hero from "../../components/Hero";
import addFirstIcon from "../../assets/lottie/noitemhere.json";
import deleteIcon from "../../assets/lottie/delete.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

//
const MyEquipmentList = () => {
  //context
  const { products } = useContext(ProductContext);
  const { user } = useContext(AuthContext);
  //
  const [uniqueData, setUniqueData] = useState([]);
  //

  useEffect(() => {
    const uniqueData = products.filter(
      (product) => product.userEmail === user?.email
    );
    setUniqueData(uniqueData);
  }, [products]);
  //
  return (
    <>
      <div className="py-4 border-y my-10 ">
        <Hero title={"My Equipment List"} path={location?.pathname} />
      </div>
      {uniqueData.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-11/12 mx-auto">
          <>
            {products.filter((product) => product.userEmail === user?.email).map((product) => (
                <ProductCard key={product._id + "y"} uniqueProduct={product} />
              ))}
          </>
        </div>
      ) : (
         <Fade duration={1500} delay={200}>
            <>
              <div className="w-2/3 md:w-1/2 lg:w-1/3 mx-auto pt-10">
                <Lottie animationData={addFirstIcon} loop={true}></Lottie>
              </div>
              <h1 className="text-3xl font-semibold text-center mt-6 mb-20">
                No Product Here{" "}
                <Link
                  to="/add-equipment"
                  className="border-b-2 border-blue-400 text-blue-400"
                >
                  {" "}
                  Add First
                </Link>
              </h1>
        </>
         </Fade>
      )}
    </>
  );
};

export default MyEquipmentList;
