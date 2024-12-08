import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/Loader";

//
const Root = () => {
  const { loader } = useContext(AuthContext);

  //
  return (
    <div className="container mx-auto">
      {loader ? (
        <Loader />
      ) : (
        <>
          {/* Navbar */}
          <div className="sticky top-0 z-50 backdrop-blur-md">
            <Navbar />
          </div>
          {/* main */}
          <main className="min-h-screen">
            <Outlet />
          </main>
          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Root;
