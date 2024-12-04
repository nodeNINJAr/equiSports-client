import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ProductCard from "../../components/ProductCard";

const MyEquipmentList = () => {
  //
  const { user } = useContext(AuthContext);
  // 
  const [uniqueData, setUniqueData] = useState([]);
  //
  useEffect(() => {
    fetch("http://localhost:5000/allproduct")
      .then((res) => res.json())
      .then((data) => {
        setUniqueData(data.filter((i) => i.userEmail == user?.email));
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-11/12 mx-auto">
      {uniqueData ? (
        <>
          {
            uniqueData.map(product =>  <ProductCard key={product._id+"y"} uniqueProduct={product} />)
          }
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyEquipmentList;
