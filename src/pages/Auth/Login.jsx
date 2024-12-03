import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { loginUsingEmailPass , signInWithGoogle } = useContext(AuthContext);
  // state for show hide password
  const [showPass, setShowPass] = useState(false);
  //
  const handleUserLogin = (e) => {
    e.preventDefault();
    //
    const form = e.target;
    const userEmail = form.userEmail.value;
    const userPassword = form.userPassword.value;
    const userLoginInfo = { userEmail, userPassword };
    console.log(userLoginInfo);
    //
    loginUsingEmailPass(userLoginInfo)
      .then((result) => {
        console.log(result);
        alert("login success fully");
      })
      .catch((err) => {
        console.log(err);
        alert("error on login");
      });
  };
  // handle Google login
  const handleGoogleLogin = () => {
    // 
     signInWithGoogle()
     .then(res=>{
         alert("google login succesfully")
     }).catch(err=>{
      alert(err.message)
     })
  };
  //
console.log(import.meta.env.VITE_apiKey)
  return (
    <div className="flex h-screen items-center justify-center loginBg px-6 md:px-20">
      <div className="flex flex-wrap  shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-cover bg-center">
          <div className="h-[240px] md:h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-8">
            <h2 className="text-3xl font-bold">Welcome Back</h2>
            <p className="mt-4 text-center">
              Please log in using your personal information to stay connected
              with us.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 bg-[#8887876a] backdrop-blur-sm pt-12 md:pt-8">
          <h2 className="text-3xl font-bold text-center mb-10">Login With </h2>
          <div className="flex justify-between items-center mb-8 ">
            <span
              className="bg-[#F8F7Fc] px-10 py-2 rounded-md border border-slate-200 flex justify-center items-center gap-3 cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <FcGoogle /> Google
            </span>{" "}
            <span className="bg-[#F8F7Fc] px-10 py-2 rounded-md border border-slate-200 flex justify-start items-center gap-3 cursor-pointer">
              <FaGithub /> Github
            </span>
          </div>

          <div className=" flex justify-between items-center gap-6">
            <p className="border-b-2 w-1/2 border-slate-300"></p>{" "}
            <span className="text-2xl text-slate-600">or</span>{" "}
            <p className="border-b-2 w-1/2  border-slate-300"></p>
          </div>

          <form onSubmit={handleUserLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="userEmail"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "password" : "text"}
                  name="userPassword"
                  placeholder="Enter your password"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPass ? (
                    <span onClick={() => setShowPass(false)}> 👁️</span>
                  ) : (
                    <span onClick={() => setShowPass(true)}>🙈</span>
                  )}
                </button>
              </div>
            </div>
            <div className="text-left">
              <Link
                to="/"
                className="text-sm text-[#fd6334] md:text-blue-900 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-[#ffffffb2] text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
