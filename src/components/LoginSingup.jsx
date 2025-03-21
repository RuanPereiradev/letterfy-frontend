import { CiMail } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaFingerprint } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import React, { useState } from "react";
import { assets } from "../assets/assets"; // Verifique se o caminho está correto
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {setAuthToken } from "../axios";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [email ,setEmail] = useState("");
  const [password, setPassword] = useState("")

  const tooglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    if(!email || !password){
      alert("All fields are required")
      return
    }
  
  try{
    console.log(
      "Send requisition for :",
      "http://localhost:8080/auth/login"
    );
    const response = await axios.post(
      "http://localhost:8080/auth/login",
      {login: email, password},
      {headers: { "Content-Type" : "application/json"}}
    );
    console.log("Login Success", response.data);
    if(response.data.token){
      setAuthToken(response.data.token)
      navigate("/");

    }else{
      alert("login failed: No token received")
    }
  }catch(error){
    console.error(
      "Error ao registrar:",
      error.response ? error.response.data : error.menssage
    );
    alert("Error at user login")
   }
  };
  

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-sm md:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        <img src={assets.logo_letterfy} className="w-12 md:w-14" />
        <h1 className="text-lg md:text-xl text-white font-semibold">
          Welcome Back
        </h1>
        <p className="text-xs md:text-sm text-gray-500 text-center">
          Don't have an account?
          <br />
          <span
            onClick={() => navigate("/register")}
            className="text-white cursor-pointer"
          >
            Sign up
          </span>
        </p>
        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl">
            <CiMail />
            <input
              type="email"
              placeholder="Email account"
              className={`bg-transparent border-0 w-full outline-none text-sm md:text-base ${
                isEmailFocused ? "text-white" : "text-gray-400"
              }`}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl relative">
            <FaFingerprint />
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base focus:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer"
                onClick={tooglePasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={tooglePasswordVisibility}
              />
            )}
          </div>
        </div>

        <button
          onClick={handleLogin}
          className=" text:lg font-semibold md:text-x w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 hover:scale-105 transition-all duration-300 text-sm md:text-base"
        >
          Login
        </button>

        <div className="relative w-full flex items-center justify-center py-3">
          <div className="w-2/3 h-[2px] bg-gray-800"></div>
          <h3 className="text-ms md:text-sm px-4 text-gray-500">or</h3>
          <div className="w-2/3 h-[2px] bg-gray-800"></div>
        </div>

        <div className="relative w-full flex items-center justify-between">
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <IoLogoApple className="text-lg md:text-xl" />
          </div>
          <div className="p-2 md:px-10  bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <FcGoogle className="text-lg md:text-xl" />
          </div>
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <FaXTwitter className="text-lg md:text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
