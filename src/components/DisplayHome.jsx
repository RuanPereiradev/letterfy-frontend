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
import { useTheme } from '../context/ThemeContext';
import {
  Music,
  Mic2,
  Guitar,
  Drum,
  Heart,
  Volume2,
  Library,
} from "lucide-react";

const DisplayHome = ({}) => {
  const [albums, setAlbums] = useState([]);
  const [topRatedAlbums, setTopRatedAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [allAlbums, setAllAlbuns] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
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


  

    const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    // Estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-yellow-400 text-lg">
          ★
        </span>
      );
    }

    // Meia estrela (se quiser usar, aqui coloquei uma estrela com opacidade)
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-lg opacity-70">
          ★
        </span>
      );
    }

    // Estrelas vazias
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-400 text-lg">
          ★
        </span>
      );
    }

    return stars;
  };


 const getAverageRating = (reviews = []) => {
   if (reviews.length === 0) return 0;
   const sum = reviews.reduce((total, r) => total + r.rating, 0);
   return parseFloat((sum / reviews.length).toFixed(1));
 };

 const topRatedAlbumsFiltered = allAlbums.filter(
   (album) => getAverageRating(album.reviews) > 3.5
 );

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const filteredAlbums = allAlbums.filter((album) =>
    album.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const heroCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };
  

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


const genres = [
  { name: "Funk", icon: <Music className="w-14 h-14" /> },
  { name: "Rap", icon: <Mic2 className="w-14 h-14" /> },
  { name: "Sertanejo", icon: <Guitar className="w-14 h-14" /> },
  { name: "Eletrônica", icon: <Volume2 className="w-14 h-14" /> },
  { name: "Axé", icon: <Drum className="w-14 h-14" /> },
  { name: "Romântico", icon: <Heart className="w-14 h-14" /> },
  { name: "Todos", icon: <Library className="w-14 h-14" /> },
];


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Barra de pesquisa */}
      <motion.div
        className="search-bar flex items-center space-x-7 p-1 bg-gray-900 rounded-lg shadow-md w-40 mt-4 transition-all relative left-9"
        initial={{ width: "10rem" }}
        animate={{ width: isFocused ? "30rem" : "10rem" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <FiSearch className="text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
              <div className="mt-10 relative w-90">
                <Slider {...heroCarouselSettings}>
                  {newReleases.map((album) => (
                    <div
                      key={album.id}
                      className="flex items-center bg-black-900 p-8 rounded-lg shadow-lg"
                    >
                      {/* Imagem do álbum + Botões */}
                      <div className="flex flex-col items-center space-y-4">
                        <img
                          src={album.images?.[0]?.url || "fallback-image.jpg"}
                          alt={album.name}
                          className="w-70 h-72 object-cover rounded-lg shadow-md"
                        />

                        {/* Botões ao lado da capa */}
                        <div className="flex space-x-4">
                          <a
                            href={album.spotify_url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 px-4 py-2 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition"
                          >
                            🎵 Spotify
                          </a>
                          <a
                            href={album.youtube_url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 px-4 py-2 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition"
                          >
                            ▶️ YouTube
                          </a>
                        </div>
                      </div>

                      {/* Informações do álbum */}
                      <div className="mx-auto text-white flex flex-col justify-center items-center text-center w-full max-w-lg">
                        <h1 className="text-4xl font-bold">{album.name}</h1>
                        <p className="text-xl mt-2 font-medium">
                          {album.artist}
                        </p>
                        <p className="text-gray-400 mt-2 text-lg">
                          Lançado em: {album.release_date}
                        </p>
                        <p className="text-gray-400 mt-1 text-lg">
                          Total de faixas: {album.total_tracks}
                        </p>

                        <button
                          onClick={() => navigate(`/review/${album.id}`)}
                          className="mt-4 bg-gray-600 px-6 py-2 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
                        >
                          📖 Ver detalhes
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </motion.div>

            {/*Seção de generos musicais*/}
            <div className="mt-10">
              <h2 className="text-4xl font-bold mb-14">Gêneros</h2>
              <div className="flex overflow-x-auto justify-center space-x-8 scrollbar-hide">
                {genres.map((genre, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-9 px-10 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full whitespace-nowrap shadow-md transition"
                  >{genre.icon}
                    <span className="font-medium">{genre.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Seção de Álbuns Mais Votados */}
            <div className="mt-6 p-5">
              <h1 className="my-5 font-bold text-2xl">Highest Rated Albums</h1>
              <Slider {...sliderSettings}>
                {topRatedAlbumsFiltered.map((album) => (
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
                    <div className="text-center mt-2">
                      <p className="text-white font-semibold">{album.name}</p>
                      <div className="flex justify-center items-center gap-1 mt-1">
                        {renderStars(
                          parseFloat(getAverageRating(album.reviews))
                        )}
                        <span className="text-white text-sm ml-2">
                          ({getAverageRating(album.reviews)})
                        </span>
                      </div>
                    </div>
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
