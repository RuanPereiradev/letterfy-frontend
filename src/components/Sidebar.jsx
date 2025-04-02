import React, { useContext } from "react";
import { assets } from "../assets/assets"; // Importe apenas o que precisa
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import logonova from "../assets/logonova.png"; // Importação direta

const Sidebar = () => {
  const navigate = useNavigate();
  const { playWithId } = useContext(PlayerContext);
  const { user, logout } = useAuth(); // Corrigido: useAuth é uma função

  return (
    <header>
      <div className="w-full h-[90px] p-4 flex items-center justify-between bg-black text-white">
        {/* Cabeçalho e itens */}
        <div className="flex items-center gap-2">
          {/* Imagem animada estilo Spotify */}
          <motion.img
            className="w-14"
            src={logonova}
            alt="logo"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
              filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
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
    </header>
  );
};

export default Sidebar;
