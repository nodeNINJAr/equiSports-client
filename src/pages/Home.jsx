import { useContext } from "react";
import AllProducts from "../components/AllProducts";
import { ProductContext } from "../provider/ProductInfoProvider";
import Loader from "../components/Loader";

const Home = () => {
  //
  const { products, loaderP,darkMode,darkModeToggle } = useContext(ProductContext);
  //
  return (
    <>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        {loaderP ? (
          <Loader />
        ) : (
          <div className="w-11/12 mx-auto">
            <AllProducts products={products} />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
