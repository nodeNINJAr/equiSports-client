import React, { createContext, useEffect, useState } from "react";


// 
export const ProductContext = createContext(null);
const ProductInfoProvider = ({ children }) => {
  
  const [products, setProducts] = useState([]);
  const [refresh , setRefresh] = useState(false);
  //    
  const [loaderP , setLoaderP] = useState(true);
  // 
   //
   const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  //
  const darkModeToggle = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem("darkMode", !prevMode);
      return !prevMode;
    });
  };

  // useEffect(() => {}, [darkMode]);

  useEffect(() => {
    fetch("http://localhost:5000/allproduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoaderP(false);
      });
    
  }, [refresh,,darkMode]);

// 

  //
  const productInfo = {
    products,
    setProducts,
    setRefresh,
    loaderP,
    setLoaderP,
    darkModeToggle,
    darkMode
  };

  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductInfoProvider;
