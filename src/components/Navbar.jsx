import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
         <NavLink to="/"> Home </NavLink>
      </li>
      <li>
         <NavLink to="/all-sports-equipment"> All Sports Equipment </NavLink>
      </li>
      <li>
         <NavLink to="/add-equipment"> Add Equipment (Private Route) </NavLink>
      </li>
      <li>
         <NavLink to="/my-equipment-list"> My Equipment List (Private Route) </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar py-6 bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
        <a className="btn btn-ghost text-4xl font-barlow">Equi<span className="text-red-500">Sports</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-DMSans font-medium ">
           {links}
        </ul>
      </div>
      <div className="navbar-end font-DMSans">
        <Link to="/login" className="btn mr-6">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
