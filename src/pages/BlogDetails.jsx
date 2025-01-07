import React from "react";
import { FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom"; // Assuming you are using React Router

const BlogDetails = () => {
  const navigate = useNavigate(); // For navigation
  const {state} = useLocation();
  const {title,date,author,image,content,tags} = state?.blog || {}
 
// 
  return (
    <section className="bg-gray-900 text-gray-200 min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Back Button */}
        <button
          className="flex items-center text-orange-500 hover:text-orange-400 mb-6"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          <FaArrowLeft className="mr-2" /> Back to Blogs
        </button>

        {/* Blog Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-400">
            By <span className="text-gray-300">{author}</span> |{" "}
            {date}
          </p>
        </div>

        {/* Blog Image */}
        <div className="mb-8">
          <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-invert lg:prose-xl max-w-4xl mx-auto mb-8">
          {content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-orange-500 text-gray-900 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Social Sharing */}
        <div className="flex justify-center gap-4 text-2xl">
          <a
            href="https://facebook.com"
            className="text-gray-300 hover:text-orange-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-300 hover:text-orange-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-300 hover:text-orange-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
