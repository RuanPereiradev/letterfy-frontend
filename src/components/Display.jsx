import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import SongDetails from "./SongDetails";
import LoginSingup from "./LoginSingup";
import Register from "./Register";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)]?.bgColor || "#121212";

  // Verifica se está em login ou registro para ocultar a barra lateral
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className={`w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto ${
        isAuthPage ? "w-full" : "lg:w-4/4" // Usando lg:w-3/4 para uma largura adequada no desktop
      } mx-auto`} // Adiciona margem automática para centralizar
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/song/:id" element={<SongDetails />} />
        <Route path="/login" element={<LoginSingup />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Display;
