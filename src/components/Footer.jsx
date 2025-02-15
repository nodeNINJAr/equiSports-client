import React, { useContext } from "react";
import { ProductContext } from "../provider/ProductInfoProvider";
import { useLocation } from "react-router-dom";
import { PiFacebookLogo, PiInstagramLogo, PiTwitterLogo, PiYoutubeLogo } from "react-icons/pi";

const Footer = () => {
  const { darkMode } = useContext(ProductContext);
  const location = useLocation();
  return (
    <>
      <footer
        className={`footer text-base-content p-10 ${
          location.pathname === "/"? !darkMode ? "text-black bg-slate-300" : "text-white bg-[#2d2d2d]": "text-black bg-slate-300"
        }`}
      >
        <aside className="">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="">
            <a
              href="/"
              className={` text-2xl sm:text-4xl font-barlow font-semibold text-left${
                location.pathname === "/" ? darkMode && "text-black" : ""
              }`}
            >
              Equi<span className="text-red-500">Sports</span>
            </a>
            <br />
            Providing reliable sports equipments since 2010
          </p>
            <div>
              <p className="text-xl font-medium">Contact with us</p>
               <p>EquiSports@gmail.com</p>  
            </div>
             <div className="flex justify-between items-center gap-2 mt-2 text-xl cursor-pointer">
             <PiFacebookLogo />
             <PiYoutubeLogo />
             <PiInstagramLogo />
             <PiTwitterLogo />
             </div>
        </aside>
        <nav>
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">English Willow</a>
          <a className="link link-hover">Tennis Bats</a>
          <a className="link link-hover">Player Edition</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Store Locator</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Refund & Return</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div
        className={`py-6 ${
          location.pathname === "/"
            ? !darkMode
              ? "text-[#4f4f4f]  bg-slate-300 border-t border-slate-200"
              : "bg-[#2d2d2d] text-[#c7c7c7] border-t border-[#ffffff11]"
            : "text-[#4f4f4f]  bg-slate-300 border-t border-slate-200"
        }`}
      >
        <h1 className="text-lg font-DMSans text-center">
          &#169; 2024
          <a
            href="/"
            className={`px-1 sm:text-xl font-barlow font-semibold text-left${
              location.pathname === "/" ? darkMode && "text-black" : ""
            }`}
          >
            Equi<span className="text-red-500">Sports</span>
          </a>
          All Rights Reserved.
        </h1>
      </div>
    </>
  );
};

export default Footer;
