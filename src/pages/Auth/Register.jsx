import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Register = () => {
  //
  const { registerUsingEmailPass, updateUserProfile , signInWithGoogle } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    //
    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const UserPhotoUrl = form.UserPhotoUrl.value;
    const userPassword = form.userPassword.value;
    const newUserInfo = { userName, userEmail, UserPhotoUrl, userPassword };
    console.log(newUserInfo);
    //
    registerUsingEmailPass(newUserInfo)
      .then((result) => {
        console.log(result);
        updateUserProfile(newUserInfo)
          .then((result) => {
            alert("resistered Successfully");
            //  form.reset();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //
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
  return (
    <div className="flex items-center justify-center loginBg px-6 py-16 md:p-20">
      <div className="flex flex-wrap shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-cover bg-center">
          <div className="h-[240px] md:h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-8">
            <h2 className="text-3xl font-bold">Register Now</h2>
            <p className="mt-4 text-center">
              Please log in using your personal information to stay connected
              with us.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 bg-[#8887876a] backdrop-blur-sm pt-12 md:pt-8">
          <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="name"
                name="userName"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {/*  */}
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
            {/*  */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                PhotoURL
              </label>
              <input
                type="PhotoURL"
                name="UserPhotoUrl"
                placeholder="Enter your Photo Url"
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
                  type=""
                  name="userPassword"
                  placeholder="Enter your password"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Register
            </button>
          </form>
          <p className="text-center text-[#ffffffb2] text-sm mt-4">
            Already have a account ?
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
          {/* google login */}

          <div className=" flex justify-between items-center gap-6 my-3">
            <p className="border-b-2 w-1/2 border-slate-300"></p>{" "}
            <span className="text-2xl text-white">or</span>{" "}
            <p className="border-b-2 w-1/2  border-slate-300"></p>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Register;
