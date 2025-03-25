import React from "react";

const AlbumList = ({ albums }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center p-4">
      {albums && albums.length > 0 ? (
        albums.map((album) => (
          <div
            key={album.id}
            className="cursor-pointer w-[300px] p-6 rounded-lg shadow-lg bg-gray-900 
            transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={album.images?.[0]?.url || "fallback-image.jpg"}
              alt={album.name}
              className="w-full h-60 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-3">{album.name}</h2>
            <p className="text-gray-400">Lançamento: {album.release_date}</p>
          </div>
        ))
      ) : (
        <p className="text-white text-center">Nenhum álbum encontrado</p>
      )}
    </div>
  );
};

export default AlbumList;
