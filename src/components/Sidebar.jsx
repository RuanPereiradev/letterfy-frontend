import React, { useContext, useEffect, useState } from "react";
import { assets, favoriteSongs } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { useAuth } from "../context/AuthContext"; // Corrija a importação
import { motion } from "framer-motion";
import axios from "axios";

const Sidebar = () => {
  const navigate = useNavigate();
  const { playWithId } = useContext(PlayerContext);
  const { user, logout } = useAuth;

return (
  <header>
    <div className="w-full h-[90px] p-4 flex items-center justify-between bg-black text-white">
      {/* Cabeçalho e itens */}
      <div className="flex items-center gap-2">
        <img className="w-14" src={assets.sticker_1} alt="logo" />
        <p className="font-bold text-2xl ml-2">Letterfy</p>
      </div>

      <div className="flex items-center gap-4">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer hover:text-gray-300"
        >
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-semibold">Home</p>
        </div>

        {!user ? (
          <div
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 cursor-pointer hover:text-gray-300"
          >
            <img className="w-6" src={assets.arrow_icon} alt="Login Icon" />
            <p className="font-semibold">Login</p>
          </div>
        ) : (
          <div
            onClick={logout}
            className="flex items-center gap-2 cursor-pointer hover:text-gray-300"
          >
            <img className="w-6" src={assets.arrow_icon} alt="Logout Icon" />
            <p className="font-semibold">Logout</p>
          </div>
        )}
      </div>
    </div>
    {/* Lista de Músicas Favoritas */}
  </header>
);

};

export default Sidebar;
