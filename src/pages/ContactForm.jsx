import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  // 
  const location = useLocation();
  // toast
  const Toast = Swal.mixin({
    toast: true,
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    emailjs
      .send(
        "service_xy6ec1t", // Replace with your EmailJS service ID
        "template_qwkqxua", // Replace with your EmailJS template ID
        formData,
        "asTTU3ltzXWV7_ijv" // Replace with your EmailJS user/public key
      )
      .then(
        (result) => {
          Toast.fire({
            position: "top-end",
            iconColor: "white",
            icon: "success",
            title: `Message sent successfully!`,
          });
       
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          
        }
      );

    e.target.reset();
  };

  return (
    <div className="">
      <Hero title={"Contact us"} path={location?.pathname} />
      <div className="bg-gray-100 px-4 sm:px-0 py-10 md:py-16">
        <div className="sm:w-11/12 mx-auto flex flex-col-reverse md:flex-none md:grid md:grid-cols-2 gap-8 ">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#EC3D08] text-white py-2 px-4 rounded-md hover:bg-[#ff6a3d] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#EC3D08] mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-4">
              We're here to help with any questions or concerns. Feel free to
              reach out using the information below:
            </p>

            <ul className="space-y-4">
              <li className="flex items-center">
                <FaEnvelope className="text-[#EC3D08] mr-3" />
                <span className="text-gray-700">contact@equisport.com</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#EC3D08] mr-3" />
                <span className="text-gray-700">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-[#EC3D08] mr-3" />
                <span className="text-gray-700">
                  123 Sports Lane, Fitness City, USA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
