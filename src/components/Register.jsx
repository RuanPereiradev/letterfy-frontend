import { CiMail } from "react-icons/ci";
import { FaRegEye, FaFingerprint, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import React, { useState } from "react";
import { assets } from "../assets/assets"; // Importação dos assets (imagens, logos, etc.)
import { useNavigate } from "react-router-dom"; // Hook para navegação entre páginas
import axios from "axios"

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("USER");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }

   try {
     console.log(
       "Enviando requisição para:",
       "https://letterfy-production.up.railway.app/auth/register"
     );
     const response = await axios.post(
       "https://letterfy-production.up.railway.app/auth/register",
       { login: email, password, role },
       { headers: { "Content-Type": "application/json" } }
     );
     console.log("Sucesso no registro:", response.data);
     navigate("/login");
   } catch (error) {
     console.error(
       "Erro ao registrar:",
       error.response ? error.response.data : error.message
     );
     alert("Erro ao cadastrar usuário");
   }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-sm md:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-lg shadow-slate-500">
        <img src={assets.logo_letterfy} className="w-12 md:w-14" alt="Logo" />
        <h1 className="text-lg md:text-xl text-white font-semibold">
          Register
        </h1>
        <p className="text-xs md:text-sm text-gray-500 text-center">
          Already have an account?
          <br />
          <span
            onClick={() => navigate("/login")}
            className="text-white cursor-pointer hover:underline"
          >
            Sign in
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
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base focus:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl">
            <FaFingerprint />
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base focus:text-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl">
            <label className="text-white mr-2">Role:</label>
            <select
              className="bg-gray-800 text-white border-0 outline-none w-full"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleRegister}
          className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 hover:scale-105 transition-all duration-300 text-sm md:text-base"
        >
          Register
        </button>

        {/* Separador "Ou" */}
        <div className="relative w-full flex items-center justify-center py-3">
          <div className="w-2/3 h-[2px] bg-gray-800"></div>
          <h3 className="text-ms md:text-sm px-4 text-gray-500">or</h3>
          <div className="w-2/3 h-[2px] bg-gray-800"></div>
        </div>

        {/* Botões de Login Social */}
        <div className="relative w-full flex items-center justify-between">
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800 hover:scale-105 transition-all">
            <IoLogoApple className="text-lg md:text-xl" />
          </div>
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800 hover:scale-105 transition-all">
            <FcGoogle className="text-lg md:text-xl" />
          </div>
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800 hover:scale-105 transition-all">
            <FaXTwitter className="text-lg md:text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
