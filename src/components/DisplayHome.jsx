import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AlbumList from "./AlbumList";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiSearch } from "react-icons/fi"; // Ícone de pesquisa
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const DisplayHome = ({}) => {
  const [albums, setAlbums] = useState([]);
  const [topRatedAlbums, setTopRatedAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [allAlbums, setAllAlbuns] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const navigate = useNavigate();

  // Carregar novos lançamentos (New Releases)
  useEffect(() => {
    fetch("http://localhost:8080/spotify/api/albumsReleases")
      .then((response) => response.json())
      .then((data) => {
        setNewReleases(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao obter novos lançamentos:", error);
        setNewReleases([]);
        setIsLoading(false);
      });
  }, []);

  // Carregar todos os álbuns
  useEffect(() => {
    fetch("http://localhost:8080/v1/album")
      .then((response) => response.json())
      .then((data) => {
        setAllAlbuns(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Erro ao obter álbuns mais votados:", error);
        setAllAlbuns([]);
      });
  }, []);

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const filteredAlbums = allAlbums.filter((album) =>
    album.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleClick = (albumId) => {
    console.log(albumId); // Para depurar e verificar o album_id
    navigate(`/review/${albumId}`); // Navegar para a página de review com o album_id
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Barra de pesquisa */}
      <motion.div
        className="search-bar flex items-center space-x-2 p-2 bg-gray-800 rounded-lg shadow-md w-full max-w-md mx-auto mt-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FiSearch className="text-gray-900 text-xl" />
        <input
          type="text"
          placeholder="Pesquisar álbuns..."
          value={searchQuery}
          onChange={handleSearch}
          className="border-none outline-none bg-transparent p-2 w-full placeholder-gray-500 text-white"
        />
      </motion.div>

      {/* Conteúdo da página - Exibe SOMENTE resultados da pesquisa se houver busca */}
      <div className="flex-1">
        {searchQuery ? (
          <motion.div
            className="search-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="my-5 font-bold text-2xl">Resultados da Pesquisa</h1>
            {filteredAlbums.length > 0 ? (
              <AlbumList albums={filteredAlbums} />
            ) : (
              <p className="text-white text-center">Nenhum álbum encontrado.</p>
            )}
          </motion.div>
        ) : (
          <>
            {/* Últimos Álbuns (Novos Lançamentos) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt-6 p-5">
                <h1 className="my-5 font-bold text-2xl">New Releases</h1>
                <Slider {...sliderSettings}>
                  {newReleases.map((album) => (
                    <div
                      key={album.id || album.name}
                      className="p-2"
                    >
                      <img
                        src={album.images?.[0]?.url || "fallback-image.jpg"}
                        alt={album.name}
                        className="cursor-pointer w-full p-4 rounded-lg shadow-lg bg-black-900 
                transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                      />
                      <p className="text-center text-white mt-2 font-semibold">
                        {album.name}
                      </p>
                    </div>
                  ))}
                </Slider>
              </div>
            </motion.div>

            {/* Seção de Álbuns Mais Votados */}
            <div className="mt-6 p-5">
              <h1 className="my-5 font-bold text-2xl">Highest Rated Albums</h1>
              <Slider {...sliderSettings}>
                {allAlbums.map((album) => (
                  <div
                    onClick={() => handleClick(album.album_id)}
                    key={album.album_id || album.name}
                    className="p-2"
                  >
                    <img
                      src={album.images?.[0] || "fallback-image.jpg"}
                      alt={album.name}
                      className="cursor-pointer w-full p-4 rounded-lg shadow-lg bg-black-900 
                transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    />
                    <p className="text-center text-white mt-2 font-semibold">
                      {album.name}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Seção "Talvez você goste" */}
            <div className="mt-10 p-5">
              <h1 className="my-5 font-bold text-2xl">Recommended for You</h1>
              <Slider {...sliderSettings}>
                {allAlbums.map((album) => (
                  <div
                    onClick={() => handleClick(album.album_id)} // Passando apenas o album_id
                    key={album.album_id || album.name} // Usando album_id como chave única
                    className="p-2"
                  >
                    <img
                      src={album.images?.[0] || "fallback-image.jpg"} // Exibindo a primeira imagem ou fallback
                      alt={album.name}
                      className="cursor-pointer w-full p-4 rounded-lg shadow-lg bg-black-900 
    transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    />
                    <p className="text-center text-white mt-2 font-semibold">
                      {album.name}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DisplayHome;
