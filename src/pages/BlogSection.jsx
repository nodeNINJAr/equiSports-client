import React, { useContext, useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductContext } from "../provider/ProductInfoProvider";

const BlogSection = () => {
  //
  const { darkMode } = useContext(ProductContext);
  //
  const [blogs, setBlogs] = useState();

  //
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <section className="pb-10 md:pb-20">
      <div className="px-4 sm:px-0 sm:w-11/12 mx-auto ">
        <Slide direction="down">
          <>
            <h3 className="text-center text-4xl uppercase font-semibold mb-4">
              Our Blogs
            </h3>
            <p className=" w-12 h-1 mx-auto bg-[#EC3D08] mb-10 md:mb-16"></p>
          </>
        </Slide>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
         
            {blogs?.slice(0, 4)?.map((blog) => (
              <div
                key={blog?.id}
                className={`${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                } rounded-lg overflow-hidden shadow-lg `}
              >
                {/* Blog Image */}
                <img
                  src={blog?.image}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                />
                {/* Blog Content */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{blog?.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {blog?.description}
                  </p>
                  <Link
                    to={`blogs/${blog?.id}`} state={{blog}}
                    className="inline-flex items-center text-orange-500 hover:text-orange-400"
                  >
                    {" "}
                    Read More <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
       
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
