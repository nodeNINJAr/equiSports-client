import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../provider/ProductInfoProvider";
import Hero from "../../components/Hero";
import { Helmet } from "react-helmet";

const Cart = () => {
  //
  const { products } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState(null);
  //
  const { _id } = useParams();
  //
  useEffect(() => {
    setCartItems(products.find((product) => product.id === _id));
  }, [products]);

  return (
    <div className="py-16">
      <Helmet>
        <title>Home || Cart</title>
      </Helmet>
      <Hero title={"cart"} path={location.pathname} />
      <div className="px-6 py-20 w-11/12 mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="text-left px-6 py-3 border-b">Product</th>
                <th className="text-left px-6 py-3 border-b">Price</th>
                <th className="text-left px-6 py-3 border-b">Quantity</th>
                <th className="text-left px-6 py-3 border-b">Subtotal</th>
                <th className="text-left px-6 py-3 border-b">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 flex items-center">
                  <img
                    src={cartItems?.productUrl}
                    alt=""
                    className="w-16 h-16 mr-4 object-cover"
                  />
                  <span>{cartItems?.productName}</span>
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  <input
                    type="number"
                    min="1"
                    className="w-16 p-2 border rounded"
                  />
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Coupon Code"
              className="p-2 border rounded mr-4"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded">
              Apply Coupon
            </button>
          </div>
          <div className="flex items-center">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-4">
              Continue Shopping
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded">
              Update Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
