// src/components/AlbumSearch.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const AlbumSearch = ({ query }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchAlbums = async () => {
      if (!query) return;

      try {
        const response = await axios.get(
          `https://letterfy-production.up.railway.app/v1/album/search?name=${query}`
        );
        setSearchResults(response.data.albums || []);
      } catch (error) {
        console.log("Erro ao buscar álbuns:", error);
      }
    };

    searchAlbums();
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-white text-xl mb-2">Resultados da Pesquisa</h2>

      <div className="flex flex-col gap-4">
        {searchResults.length > 0 ? (
          searchResults.map((album) => (
            <div
              key={album.album_id || album.name}
              className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg"
            >
              <img
                src={album.artists?.[0]?.image_url || "fallback-image.jpg"}
                alt={album.name}
                className="w-16 h-16 rounded-lg"
              />
              <p className="text-white">{album.name}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Nenhum álbum encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default AlbumSearch;
