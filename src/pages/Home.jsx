import { useContext } from "react";
import AllProducts from "../components/AllProducts";
import { ProductContext } from "../provider/ProductInfoProvider";
import Loader from "../components/Loader";

const Home = () => {
  //
  const { products, loaderP } = useContext(ProductContext);
  console.log(products);
  //
  return (
    <>
      {loaderP ? (
         <Loader/>
      ) :  <div className="w-11/12 mx-auto">
      <AllProducts products={products} />
    </div>
}
    </>
  );
};

export default Home;
