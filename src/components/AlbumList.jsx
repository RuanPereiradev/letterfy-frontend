import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

// Função para pegar a URL da imagem
const getAlbumImage = (album, isSearch) => {
  // Se for pesquisa, retornamos diretamente o album_cover ou uma imagem fallback
  if (isSearch) {
    return album.album_cover && album.album_cover !== ""
      ? album.album_cover
      : "fallback-image.jpg";
  }

  // Caso contrário, tentamos acessar a primeira imagem se disponível
  if (album.artists && album.artists.length > 0) {
    return album.artists[0]; // Retorna a primeira imagem da lista
  }

  // Se nenhuma imagem for encontrada, retorna a imagem fallback
  return "fallback-image.jpg";
};

const AlbumList = ({ albums, isSearch }) => {
  const sliderSettings = {
    dots: false,
    infinite: albums.length > 4,
    speed: 500,
    slidesToShow: Math.min(albums.length, 4),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(albums.length, 3) },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: Math.min(albums.length, 2) },
      },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const navigate = useNavigate();

  const handleClick = (albumId) => {
    console.log(albumId);
    navigate(`/review/${albumId}`);
  };

  return (
    <div className="p-4">
      {albums && albums.length > 0 ? (
        albums.length === 1 ? (
          <div className="flex justify-center">
            <div
              onClick={() => handleClick(albums[0].album_id)} // Usando album_id
              className="cursor-pointer w-80 p-4 rounded-lg shadow-lg bg-black-900 
              transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={getAlbumImage(albums[0], isSearch)} // Usando a função para pegar a imagem
                alt={albums[0].name}
                className="w-full h-90 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-3 text-center">
                {albums[0].name}
              </h2>
              <p className="text-gray-400 text-center">
                Lançamento: {albums[0].release_date || "Data desconhecida"}
              </p>
            </div>
          </div>
        ) : albums.length === 2 ? (
          <div className="flex justify-center">
            {albums.map((album) => (
              <div
                key={album.album_id || album.name} // Usando album_id
                onClick={() => handleClick(album.album_id)} // Usando album_id
                className="cursor-pointer w-80 p-4 rounded-lg shadow-lg bg-black-900 
                transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={getAlbumImage(album, isSearch)} // Usando a função para pegar a imagem
                  alt={album.name}
                  className="w-full h-80 object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold mt-3 text-center">
                  {album.name}
                </h2>
                <p className="text-gray-400 text-center">
                  Lançamento: {album.release_date || "Data desconhecida"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <Slider {...sliderSettings}>
            {albums.map((album) => (
              <div key={album.album_id || album.name} className="p-2">
                <div
                  onClick={() => handleClick(album.album_id)} // Usando album_id
                  className="cursor-pointer w-full p-4 rounded-lg shadow-lg bg-black-900 
                  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={getAlbumImage(album, isSearch)} // Usando a função para pegar a imagem
                    alt={album.name}
                    className="w-full h-90 object-cover rounded-md"
                  />
                  <h2 className="text-xl font-semibold mt-3 text-center">
                    {album.name}
                  </h2>
                  <p className="text-gray-400 text-center">
                    Lançamento: {album.release_date || "Data desconhecida"}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        )
      ) : (
        <p className="text-white text-center">Nenhum álbum encontrado</p>
      )}
    </div>
  );
};

export default AlbumList;
