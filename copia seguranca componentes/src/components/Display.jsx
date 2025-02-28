// 📂 /src/components/Display.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import SongDetails from './SongDetails';

const Display = () => {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/song/:id' element={<SongDetails />} /> {/* Rota para a página de detalhes da música */}
      </Routes>
    </div>
  );
};

export default Display;