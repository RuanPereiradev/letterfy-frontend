import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import SongDetails from "./SongDetails";
import LoginSingup from "./LoginSingup";
import Register from "./Register";
import { albumsData } from "../assets/assets";
import ReviewAlbum from "./ReviewAlbum";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)]?.bgColor || "#121212";

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
        isAuthPage ? "w-full" : "lg:w-4/4" 
      } mx-auto`} 
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/song/:id" element={<SongDetails />} />
        <Route path="/login" element={<LoginSingup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review/:id" element={<ReviewAlbum />} />
        <Route path="/album/:albumId" element={<ReviewAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
