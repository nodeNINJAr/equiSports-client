import { useContext } from "react";
import AllProducts from "../components/AllProducts";
import { ProductContext } from "../provider/ProductInfoProvider";
import Loader from "../components/Loader";
import { FaCheckCircle } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import SwiperSlider from "../components/SwiperSlider";
import CategorySlider from "../components/CategorySlider";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  //
  const { products, loaderP, darkMode } = useContext(ProductContext);
  //
  return (
    <>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        {loaderP ? (
          <Loader />
        ) : (
          <>
            {/* slider */}
            <div className={darkMode && "bg-[#2838366d]"}>
              <SwiperSlider />
            </div>

            {/*  */}
            <div className="w-11/12 mx-auto py-14 md:py-20">
              <Slide direction="down">
                <>
                  <h3 className="text-center text-4xl uppercase font-semibold mb-4">
                    Featured Products
                  </h3>
                  <p className=" w-12 h-1 mx-auto bg-[#EC3D08] mb-20"></p>
                </>
              </Slide>
              <AllProducts products={products} />
              {/* About us section */}
              <div className="flex flex-col md:flex-row items-center lg:items-start lg:justify-between pt-20  pb-6  lg:pb-32 sm:pt-20 gap-8 gap-y-12">
                {/* Images Section */}
                <div className="w-full lg:w-1/2 mb-32 md:mb-0">
                  <Slide direction="left" duration={1500}>
                    <div className="relative">
                      <img
                        src="https://via.placeholder.com/300x400"
                        alt="Main Fitness"
                        className="rounded-lg shadow-lg h-[280px] sm:h-96 md:h-[320px]  lg:h-[380px] xl:h-[500px] w-2/3"
                      />
                      <img
                        src="https://via.placeholder.com/200x300"
                        alt="Side Fitness"
                        className=" absolute top-24 sm:top-32 xl:top-40 left-1/3 sm:left-48 md:left-20 lg:left-28 xl:left-40 w-2/3 h-64 sm:h-96 md:h-72 lg:h-[340px] xl:h-[440px] border-4 border-white rounded-lg shadow-lg"
                      />
                    </div>
                  </Slide>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                  <Slide direction="right" duration={1500}>
                    <div className="space-y-6">
                      <h4 className="text-orange-500 uppercase text-lg font-semibold">
                        About Us
                      </h4>
                      <h2 className="text-3xl font-bold leading-snug">
                        We Offer Quality Sports Gear
                      </h2>
                      <p className="text-gray-500">
                        Discover a wide range of premium sports gear designed to
                        elevate your performance. Whether you're a professional
                        athlete or a fitness enthusiast, we ensure quality,
                        durability, and comfort in every product.
                      </p>

                      {/* Feature List */}

                      <ul className="space-y-3">
                        <p className="text-xl font-semibold">Features</p>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-orange-500 w-5 h-5 mr-2" />
                          <span>
                            Precision-engineered equipment for optimal
                            performance
                          </span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-orange-500 w-5 h-5 mr-2" />
                          <span>
                            Designed to meet the needs of beginners and pros
                            alike
                          </span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-orange-500 w-5 h-5 mr-2" />
                          <span>
                            Built with the highest quality materials for
                            long-lasting use
                          </span>
                        </li>
                      </ul>

                      {/* Call to Action Button */}
                      <Link to="/all-sports-equipment">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition mt-8">
                          Explore Our Collection
                        </button>
                      </Link>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
            {/* product category */}
            <section className="w-11/12 mx-auto pb-10  md:pb-20">
              <Slide direction="down">
                <>
                  <h3 className="text-center text-4xl uppercase font-semibold mb-4">
                    Product Categories
                  </h3>
                  <p className=" w-12 h-1 mx-auto bg-[#EC3D08] mb-10 md:mb-16"></p>
                </>
              </Slide>
              {/*  */}
              <CategorySlider />
            </section>
            {/* deals sections */}
            <div className="bg-[#EC3D08]">
              <div className=" space-y-8 md:flex justify-between items-center gap-6 w-11/12 mx-auto py-20 md:py-24">
                <Slide direction="down">
                  <h1 className="text-white text-6xl md:text-7xl font-semibold uppercase">
                    Our latest online deals
                  </h1>
                </Slide>
                <Slide direction="up">
                  <Link to="/all-sports-equipment">
                    <button className="bg-transparent hover:bg-white hover:text-[#595959] transition-all ease-in-out duration-300 font-medium w-[200px] my-auto py-3 border-2 border-white mb-6">
                      Shop Now
                    </button>
                  </Link>
                </Slide>
              </div>
            </div>
            {/* newsletter */}
            <NewsLetter />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
