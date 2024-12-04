import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Root = () => {
  const { loader } = useContext(AuthContext);
  return (
    <div className="container mx-auto">
      {loader ? (
        "loading"
      ) : (
        <>
          {/* Navbar */}
          <Navbar />
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
