import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const CategoriesProduct = () => {
  //
  const [cateProducts, setCateProducts] = useState([]);
  const { category } = useParams();
  //
  useEffect(() => {
    fetch(`http://localhost:5000/categories-products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCateProducts(data);
      });
  }, [category]);

  //
  //
  return (
    <div>
      <Helmet>
       <title>Home || categories-products</title>
    </Helmet>
      <Hero title={"categories products"} path={location.pathname} />
      {cateProducts.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto py-20">
          {
            //  cateProducts.length > 0 && (
            cateProducts.map((product ,idx) => (
              <ProductCard key={idx}  categoriesProduct={product} />
            ))
            //  )
          }
        </div>
      ) : (
        <div>
          <h1 className="text-2xl text-center font-semibold capitalize py-32">
            no Product found
          </h1>
        </div>
      )}
    </div>
  );
};

export default CategoriesProduct;
