import React, { createContext, useEffect, useState } from "react";


// 
export const ProductContext = createContext(null);
const ProductInfoProvider = ({ children }) => {
  
  const [products, setProducts] = useState([]);
  const [refresh , setRefresh] = useState(false);
  //    
  // 
  const [loaderP , setLoaderP] = useState(true);
  // 
  useEffect(() => {
    fetch("http://localhost:5000/allproduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoaderP(false)
      });
    
  }, [refresh]);

// 

  //
  const productInfo = {
    products,
    setProducts,
    setRefresh,
    loaderP,
    setLoaderP
  };

  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductInfoProvider;
