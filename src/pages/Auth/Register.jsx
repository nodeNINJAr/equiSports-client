import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import successIcon from "../../assets/lottie/mainScene.json";
import loginErrorIcon from "../../assets/lottie/loginError.json";

const Register = () => {
  //
  const {
    registerUsingEmailPass,
    updateUserProfile,
    signInWithGoogle,
    Toast,
    success,
    setSuccess,
    error,
    setError,
  } = useContext(AuthContext);
  //
  const [password, setPassword] = useState();
  const [testedPass, setTestedPass] = useState();
  //
  const [url, setUrl] = useState("");
  //
  const [showPass, setShowPass] = useState(false);
  //
  const [lottie, setLottie] = useState("");
  //
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    //
    const form = e.target;
    //
    const userName = form.userName.value;
    if (userName.length >= 4) {
      setSuccess({
        ...success,
        nameSucc: "✅ Name is valid! Your name meets the required criteria. 🎉",
      });
      setError({});
    } else {
      setSuccess({});
      setError({
        ...error,
        nameErr:
          "⚠️ Invalid Name! Please ensure the name is at least 4 characters long... ✨",
      });
      return;
    }

    //
    const userEmail = form.userEmail.value;
    const UserPhotoUrl = form.UserPhotoUrl.value;
    const userPassword = form.userPassword.value;
    if (!testedPass) {
      Toast.fire({
        position: "top-end",
        iconColor: "white",
        icon: "error",
        title: `❌ Please Provide a valid password `,
      });
      return;
    }

    //  userinfo
    const newUserInfo = { userName, userEmail, UserPhotoUrl, userPassword };
    //
    registerUsingEmailPass(newUserInfo)
      .then(() => {
        setLottie("succ");
        updateUserProfile(newUserInfo)
          .then(() => {
            Toast.fire({
              position: "top-end",
              iconColor: "white",
              icon: "success",
              title:
                "✅ Registration Successful! 🏀 Welcome to the Sports Equipment Store! 🏐🎾",
            });
            setTimeout(() => {
              navigate("/my-equipment-list");
            }, 2200);
            //  form.reset();
          })
          .catch(() => {});
      })
      .catch((err) => {
        setLottie("err");
        Toast.fire({
          position: "top-end",
          iconColor: "white",
          icon: "error",
          title: `❌ Oops! ${err.message}. Please try again or contact support if the issue persists. 🚨`,
        });
      });
  };
  //
  const handleGoogleLogin = () => {
    //
    signInWithGoogle()
      .then((res) => {
        Toast.fire({
          position: "top",
          iconColor: "white",
          icon: "success",
          title: "🌐 Signed in Successfully with Google! ✅ Welcome aboard! 🎉",
        });
        navigate("/my-equipment-list");
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

  // url Validation
  const handleUrlChecker = (e) => {
    const regexUrl =
      /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
    const url = e.target.value;
    setUrl(url);
    const checkedUrl = regexUrl.test(url);
    if (checkedUrl) {
      setSuccess({
        ...success,
        urlSucc:
          "✅ Photo URL is valid! Your image URL is successfully accepted and ready to use. 🖼️✨",
      });
      setError({});
      return;
    } else {
      setSuccess({});
      setError({
        ...error,
        urlErr:
          "⚠️ Invalid Image URL! Please ensure the URL points to a valid image (e.g., ends with .jpg, .jpeg, .png, .gif, etc.). 🌐📸",
      });
    }
    return;
  };

  // password Validation
  const handlePassValidate = (e) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const pass = e.target.value;
    setPassword(pass);
    const redgPassTest = regex.test(pass);
    setTestedPass(redgPassTest);
    if (redgPassTest) {
      setSuccess({
        ...success,
        passSucc:
          "✅ Password is valid! Your password meets all the requirements. 🔒",
      });
      setError({});
    } else {
      setSuccess({});
      setError({
        ...error,
        passErr:
          "⚠️ Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long. 🔒",
      });
    }
  };
  //
  return (
    <div className="flex items-center justify-center loginBg p-3 sm:px-6 py-16 md:p-20">
      <Fade delay={200} duration={1200}>
        <div className="flex flex-wrap shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
          {/* Left Side */}
          <div className="w-full md:w-1/2 bg-cover bg-center">
            <div className="h-[240px] md:h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-8">
              <h2 className="text-3xl font-bold">Register Now</h2>
              <p className="mt-4 text-center">
                "📢 Please register using your personal information and get
                premium services! 🌟 Stay connected with us! 🤝💼"
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 p-3 sm:p-8 bg-[#8887876a] backdrop-blur-sm pt-12 md:pt-8">
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
                  type="text"
                  name="userName"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                />
                {success?.nameSucc && (
                  <p className="text-green-600 text-xs mt-1 bg-[#484848] rounded-full px-2 inline">
                    {success?.nameSucc}
                  </p>
                )}

                {error?.nameErr && (
                  <p className="text-red-700 text-xs mt-1">{error?.nameErr}</p>
                )}
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
                  required
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
                  type="text"
                  defaultValue={url}
                  name="UserPhotoUrl"
                  placeholder="Enter your Photo Url"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  onChange={handleUrlChecker}
                />
                {success?.urlSucc && (
                  <p className="text-green-600 text-xs mt-1 bg-[#484848] rounded-full px-2 inline">
                    {success?.urlSucc}
                  </p>
                )}
                {error?.urlErr && (
                  <p className="text-red-700 text-xs mt-1">{error?.urlErr}</p>
                )}
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
                    required
                    type={!showPass ? "password" : "text"}
                    value={password}
                    name="userPassword"
                    placeholder="Enter your password"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                    onChange={handlePassValidate}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showPass ? (
                      <span onClick={() => setShowPass(false)}>🙈 </span>
                    ) : (
                      <span onClick={() => setShowPass(true)}>👁️</span>
                    )}
                  </button>
                </div>
                {/*  */}
                {success?.passSucc && (
                  <p className="text-green-600 text-xs mt-1 bg-[#484848] rounded-full px-2 inline">
                    {success?.passSucc}
                  </p>
                )}
                {error?.passErr && (
                  <p className="text-red-700 text-xs mt-1">{error?.passErr}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300 flex justify-center items-center gap-2"
              >
                {lottie === "succ" && (
                  <Lottie
                    animationData={successIcon}
                    loop={false}
                    style={{ width: 30, height: 30 }}
                  />
                )}{" "}
                {lottie === "err" && (
                  <Lottie
                    animationData={loginErrorIcon}
                    loop={true}
                    style={{ width: 30, height: 30 }}
                  />
                )}{" "}
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
            <div className="flex justify-between items-center mb-8 gap-3 ">
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
      </Fade>
    </div>
  );
};

export default Register;
