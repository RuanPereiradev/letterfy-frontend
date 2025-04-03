import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import logonova from "../assets/logonova.png";
import { FiSearch } from "react-icons/fi";

const Sidebar = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value); // Atualiza o estado no DisplayHome
  };

  return (
    <header>
      <div className="w-full h-[90px] p-4 flex items-center justify-between bg-black text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <motion.img
            className="w-14"
            src={logonova}
            alt="logo"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="font-bold text-2xl ml-2">Letterfy</p>
        </div>

        {/* Barra de Pesquisa */}
        <div className="flex items-center bg-gray-800 rounded-lg px-3 py-1 w-96">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Pesquisar álbuns..."
            value={query}
            onChange={handleSearch}
            className="bg-transparent border-none outline-none text-white px-2 w-full"
          />
        </div>

        {/* Links de navegação */}
        <div className="flex items-center gap-4">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-gray-300"
          >
            <p className="font-semibold">Home</p>
          </div>
          {!user ? (
            <div
              onClick={() => navigate("/login")}
              className="cursor-pointer hover:text-gray-300"
            >
              <p className="font-semibold">Login</p>
            </div>
          ) : (
            <div
              onClick={logout}
              className="cursor-pointer hover:text-gray-300"
            >
              <p className="font-semibold">Logout</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
