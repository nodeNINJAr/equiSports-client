import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

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
    <div className="overflow-x-auto">
      {uniqueData ? (
        <>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
             {
                uniqueData.map(( product , idx  )=> <tbody>
                    {/* row 1 */}
                    <tr className="hover:bg-slate-100">
                      <th>{idx+1}</th>
                      <td>{product.productName}</td>
                      <td>{product.productPrice}</td>
                      <td>{product.productRating}</td>
                    </tr>
                  </tbody>)
             }
          </table>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyEquipmentList;
