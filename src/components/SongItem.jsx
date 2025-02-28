// 📂 /src/components/SongItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SongItem = ({ name, image, desc, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/song/${id}`); // Navega para a página de detalhes da música
  };

  return (
    <div
      className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'
      onClick={handleClick} // Navega ao clicar
    >
      <img className='rounded' src={image} alt={name} />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  );
};

export default SongItem;