import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AlbumList = ({ albums }) => {
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

  return (
    <div className="p-4">
      {albums && albums.length > 0 ? (
        <Slider {...sliderSettings}>
          {albums.map((album) => (
            <div key={album.id} className="p-2">
              <div
                className="cursor-pointer w-full p-4 rounded-lg shadow-lg bg-black-900 
                transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={album.images?.[0]?.url || "fallback-image.jpg"}
                  alt={album.name}
                  className="w-full h-60 object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold mt-3 text-center">{album.name}</h2>
                <p className="text-gray-400 text-center">
                  Lançamento: {album.release_date}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-white text-center">Nenhum álbum encontrado</p>
      )}
    </div>
  );
};

export default AlbumList;
