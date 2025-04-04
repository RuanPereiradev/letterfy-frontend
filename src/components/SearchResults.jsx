// src/components/AlbumSearch.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const AlbumSearch = ({ query }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchAlbums = async () => {
      if (!query) return; // Se a pesquisa estiver vazia, não faz nada

      try {
        const response = await axios.get(
          `http://localhost:8080/v1/album/search?name=${query}`
        );
        console.log(response.data); // Verifique se os álbuns têm 'album_id'
        setSearchResults(response.data.albums || []); // Assume que a chave 'albums' é a lista de álbuns
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
              key={album.album_id || album.name} // Use album_id ou name como chave
              className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg"
            >
              <img
                src={album.coverImage || "fallback-image.jpg"} // Imagem de fallback
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
