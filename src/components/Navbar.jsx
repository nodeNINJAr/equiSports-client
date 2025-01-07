import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import { ProductContext } from "../provider/ProductInfoProvider";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Lottie from "lottie-react";
import registerIcon from "../assets/lottie/register.json";
import loginIcon from "../assets/lottie/login.json";
import signOutIcon from "../assets/lottie/logout.json";

const Navbar = () => {
  const { user, Toast } = useContext(AuthContext);
  const { darkMode, darkModeToggle } = useContext(ProductContext);
  //
  const location = useLocation();
  //
  const links = (
    <>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>
      <li>
        <NavLink to="/all-sports-equipment"> All Sports Equipment </NavLink>
      </li>
     
      {user && (
        <>
          <li>
            <NavLink to="/add-equipment"> Add Equipment</NavLink>
          </li>
          <li>
            <NavLink to="/my-equipment-list"> My Equipment </NavLink>
          </li>
        </>
      )}
       <li>
        <NavLink to="/contact"> Contact</NavLink>
      </li>
    </>
  );
  //  sign Out
  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        Toast.fire({
          position: "top-end",
          iconColor: "white",
          icon: "info",
          title: "✅ You have successfully signed out! See you next time! 👋",
        });
      })
      .catch((err) => {
        Toast.fire({
          position: "top-end",
          iconColor: "white",
          icon: "error",
          title: `${err.message}`,
        });
      });
  };
  return (
    <div
      className={`${
        location.pathname === "/"
          ? darkMode
            ? "bg-[#23272F] border-b border-slate-800"
            : "bg-white border-b border-slate-100"
          : "bg-white border-b border-slate-100"
      } navbar py-6 border-b border-slate-100`}
    >
      <div className="navbar-start">
        <div className="dropdown z-50">
          <div
            tabIndex={0}
            role="button"
            className={`${
              location.pathname === "/"
                ? darkMode && "text-white"
                : "text-slate-600"
            } btn btn-ghost lg:hidden p-0 sm:p-4`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 p-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-DMSans"
          >
            {links}
          </ul>
        </div>
        <a
          href="/"
          className={`btn btn-ghost text-2xl sm:text-4xl font-barlow ${
            location.pathname === "/" ? darkMode && "text-white" : ""
          }`}
        >
          Equi<span className="text-red-500">Sports</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`${
            location.pathname === "/" ? darkMode && "text-white" : ""
          } flex justify-center gap-4 xl:gap-6 font-DMSans font-medium text-sm xl:text-base`}
        >
          {links}
        </ul>
      </div>
      <div className="navbar-end font-DMSans md:mr-4">
        <div className="mr-3">
          {location.pathname === "/" ? (
            darkMode ? (
              <MdOutlineLightMode
                onClick={darkModeToggle}
                className="hover:bg-[#F4F4F4] h-8 w-8 p-1 sm:h-[45px] sm:w-[45px] sm:p-2 rounded-full text-white hover:text-slate-500 cursor-pointer"
              />
            ) : (
              <MdOutlineDarkMode
                onClick={darkModeToggle}
                className="hover:bg-[#F4F4F4] h-8 w-8 p-1 sm:h-[45px] sm:w-[45px] sm:p-2 rounded-full text-slate-600 font-normal cursor-pointer"
              />
            )
          ) : (
            ""
          )}
        </div>
        {user ? (
          <>
            <img
              className="rounded-full border-2 border-slate-300 w-8 sm:w-10 h-8 sm:h-10 mr-4 cursor-alias"
              src={user?.photoURL}
              alt={`${user?.displayName} "pics"`}
              data-tooltip-id="my-tooltip-1"
              data-tooltip-content={user?.displayName}
            />
            <Link onClick={handleSignOut} to="/">
              <button className="bg-slate-200 rounded-full sm:rounded-lg w-10 h-10 p-2 sm:px-3 sm:py-4 sm:w-32 sm:flex justify-start items-center gap-1 ">
                <span className="hidden sm:flex font-semibold">SignOut</span>{" "}
                <span
                  className="sm:hidden"
                  data-tooltip-id={
                    location.pathname === "/"
                      ? darkMode
                        ? "my-tooltip-4"
                        : "my-tooltip-5"
                      : "my-tooltip-5"
                  }
                  data-tooltip-content={"Register"}
                >
                  <Lottie animationData={signOutIcon} loop={true} />
                </span>
                <span className="hidden sm:flex">
                  <Lottie animationData={signOutIcon} loop={true} />
                </span>
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-slate-200 rounded-full sm:rounded-lg w-10 h-10 p-[9px] sm:px-[10px] sm:py-2 sm:w-24 sm:flex justify-start items-center gap-2 mr-4 sm:mr-6">
                <span className="hidden sm:flex font-semibold">Login</span>{" "}
                <span
                  className=" sm:hidden"
                  data-tooltip-id={darkMode ? "my-tooltip-4" : "my-tooltip-5"}
                  data-tooltip-content={"Login"}
                >
                  <Lottie animationData={loginIcon} loop={true} />
                </span>
                <span className="hidden sm:flex">
                  <Lottie animationData={loginIcon} loop={true} />
                </span>
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-slate-200 rounded-full sm:rounded-lg w-10 h-10 p-2 sm:px-[13px] sm:py-3 sm:w-32 sm:flex justify-start items-center gap-2 ">
                <span className="hidden sm:flex font-semibold">Register</span>{" "}
                <span
                  className="sm:hidden"
                  data-tooltip-id={darkMode ? "my-tooltip-4" : "my-tooltip-5"}
                  data-tooltip-content={"Register"}
                >
                  <Lottie animationData={registerIcon} loop={true} />
                </span>
                <span className="hidden sm:flex">
                  <Lottie animationData={registerIcon} loop={true} />
                </span>
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
