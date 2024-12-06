import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard";
import { ProductContext } from "../../provider/ProductInfoProvider";
import { AuthContext } from "../../provider/AuthProvider";
import Hero from "../../components/Hero";

//
const MyEquipmentList = () => {
  //context
  const { products } = useContext(ProductContext);
  const { user } = useContext(AuthContext);
  //
  return (
    <>
      <div className="py-4 border-y my-10 ">
        <Hero title={"My Equipment List"} path={location?.pathname} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-11/12 mx-auto">
        {products ? (
          <>
            {products
              .filter((product) => product.userEmail === user?.email)
              .map((product) => (
                <ProductCard key={product._id + "y"} uniqueProduct={product} />
              ))}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default MyEquipmentList;
