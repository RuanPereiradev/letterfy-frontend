import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[200px] max-w-[200px] p-2 rounded cursor-pointer hover:bg-[#ffffff26] flex-shrink-0"
    >
      <img className="w-full rounded-md" src={image} alt={name} />
      <p className="font-bold mt-2">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;