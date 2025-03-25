import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AlbumList from "./AlbumList";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"; // Importando a biblioteca para animações
import Footer from "./Footer";

const DisplayHome = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para a pesquisa

  useEffect(() => {
    fetch("http://localhost:8080/spotify/api/albumsReleases")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados da API:", data);
        if (Array.isArray(data)) {
          setAlbums(data);
        } else {
          console.error("A estrutura da resposta não é um array.");
          setAlbums([]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao obter novos lançamentos:", error);
        setAlbums([]);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Atualiza o termo de pesquisa
  };

  const filteredAlbums = albums.filter((album) =>
    album.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* Barra de pesquisa com animação */}
      <motion.div
        className="search-bar flex items-center space-x-2 p-2 bg-black-700 rounded-lg shadow-md"
        initial={{ opacity: 0, x: -100 }} // Inicializa a barra fora da tela (na esquerda)
        animate={{ opacity: 1, x: 0 }} // Move para a posição original
        transition={{ duration: 0.5, ease: "easeOut" }} // Duração de 0.5s e easing suave
      >
        <img className="w-6" src={assets.search_icon} alt="Search icon" />
        <input
          type="text"
          placeholder="Pesquisar álbuns..."
          value={searchQuery}
          onChange={handleSearch}
          className="border-none outline-none bg-transparent p-2 w-full rounded-full placeholder-gray-500 "
        />
      </motion.div>

      {/* Animação dos resultados da pesquisa */}
      {searchQuery ? (
        <motion.div
          className="search-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="my-5 font-bold text-2xl">Resultados da Pesquisa</h1>
          <motion.div
            className="flex overflow-x-auto space-x-4 p-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredAlbums.length > 0 ? (
              <AlbumList albums={filteredAlbums} />
            ) : (
              <p className="text-white text-center">Nenhum álbum encontrado.</p>
            )}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="my-5 font-bold text-2xl">Últimos Álbuns</h1>
          {isLoading ? (
            <p className="text-white text-center">Carregando Álbuns...</p>
          ) : (
            <AlbumList albums={albums} />
          )}
        </motion.div>
      )}
    </>
  );
};

export default DisplayHome;
