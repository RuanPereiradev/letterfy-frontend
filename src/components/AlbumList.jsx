import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

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
    
    navigate(`/review/${albumId}`);
  };

  return (
    <div className="p-4">
      {albums && albums.length > 0 ? (
        albums.length === 1 ? (
          <div className="flex justify-center">
            <div
              onClick={() => handleClick(albums[0].album_id)}
              className="cursor-pointer w-full max-w-xs p-4 rounded-lg shadow-lg bg-black-900 
              transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={
                  isSearch
                    ? albums[0].album_cover
                    : albums[0].images?.[0]?.url || "fallback-image.jpg"
                }
                alt={albums[0].name}
                className="w-full h-70 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-3 text-center">
                {albums[0].name}
              </h2>
              <p className="text-gray-400 text-center">
                Lançamento: {albums[0].release_date || "Data desconhecida"}
              </p>
            </div>
          </div>
        ) : (
          <Slider {...sliderSettings}>
            {albums.map((album) => (
              <div key={album.album_id} className="p-2">
                <div
                  onClick={() => handleClick(album.id)}
                  className="cursor-pointer w-full p-4 rounded-lg shadow-lg bg-black-900 
                  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={
                      isSearch
                        ? album.album_cover
                        : album.images?.[0]?.url || "fallback-image.jpg"
                    }
                    alt={album.name}
                    className="w-full h-70 object-cover rounded-md"
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
