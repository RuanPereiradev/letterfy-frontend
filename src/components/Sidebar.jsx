import React, { useContext, useEffect, useState } from 'react';
import { assets, favoriteSongs } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import { useAuth } from "../context/AuthContext"; // Corrija a importação
import { motion } from "framer-motion";
import axios from 'axios';

const Sidebar = () => {
  const navigate = useNavigate();
  const { playWithId } = useContext(PlayerContext);
  const {user, logout} = useAuth
  
  
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex bg-black">
      {/* Cabeçalho – Logo */}
      <div className="h-[15%] flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-14" src={assets.sticker_1} alt="logo" />
          <p className="font-bold text-4xl ml-5">Letterfy</p>
        </div>
      </div>

      {/* Navegação – Home e Search */}
      <div className="h-[15%] flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>

        

        {!user ? (
          <div
            onClick={() => navigate("/login")}
            className="flex items-center gap-3 pl-8 cursor-pointer mt-1 hover:bg-grey-200 hover:scale-105 transition-all duration-300 text-sm md:text-base"
          >
            <img className="w-6" src={assets.arrow_icon} alt="" />
            <p className="font-bold">Login</p>
          </div>
        ) : (
          <div
            onClick={logout}
            className="flex items-center gap-3 pl-8 cursor-pointer"
          >
            <img className="w-6" src={assets.arrow_icon} alt="Logout Icon" />
            <p className="font-bold">Logout</p>
          </div>
        )}
      </div>

      {/* Lista de Músicas Favoritas */}
      <div className="h-[70%] overflow-y-auto p-4">
        <h2 className="text-xl font-bold mb-4">Suas músicas favoritas</h2>
        <ul>
          {favoriteSongs.map((song) => (
            <li
              key={song.id}
              className="flex items-center gap-3 mb-3 cursor-pointer p-2"
              onClick={() => playWithId(song.id)}
            >
              <img
                className="w-10 h-10 rounded"
                src={song.image}
                alt={song.name}
              />
              <div className="flex flex-col">
                <p className="font-semibold">{song.name}</p>
                <p className="text-sm text-gray-400">{song.duration}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
