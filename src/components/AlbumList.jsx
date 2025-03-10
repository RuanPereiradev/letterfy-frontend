import React from "react";


const AlbumList = ({ albums }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {albums && albums.length > 0 ? (
    albums.map((album) => (
        <div key={album.id} className="p-4 rounded-lg shadow-lg">
            <img
                src={album.images?.[0]?.url || 'fallback-image.jpg'}
                alt={album.name}
                className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{album.name}</h2>
            <p className="text-gray-500">Lançamento: {album.release_date}</p>
        </div>
    ))
) : (
    <p className="text-white text-center">Nenhum álbum encontrado</p>
)}

    </div>
  );
};

export default AlbumList;
