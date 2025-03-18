import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import SongDetails from './SongDetails'; // Componente para detalhes da música
import LoginSingup from './LoginSingup';  // Certifique-se de que esse caminho está correto

import { albumsData } from '../assets/assets';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumId = isAlbum ? location.pathname.slice(-1) : '';
  const bgColor = albumsData[Number(albumId)]?.bgColor || '#121212';


  const isLoginPage = location.pathname = '/';

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = '#121212';
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className={`w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto ${isLoginPage ? 'w-[100%]':'lg:w-[75%]'} lg:ml-0`}
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/song/:id" element={<SongDetails />} />
        <Route path="/login" element={<LoginSingup />} /> {/* Rota de login */}
      </Routes>
    </div>
  );
};

export default Display;
