import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReviewAlbum = () => {
  const { id } = useParams(); // Captura o ID da URL
  const [album, setAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch album data
  useEffect(() => {
    fetch(`http://localhost:8080/v1/album/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAlbum(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao obter o álbum:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Carregando...</p>;
  if (!album) return <p>Álbum não encontrado.</p>;

  return (
    <div className="p-6 text-white">
      {/* Detalhes do álbum */}
      <div className="flex gap-6 items-center mb-8">
        <img
          className="w-48 h-48 rounded-lg shadow-lg"
          src={album.artists?.[0]} // Imagem do álbum, ajuste conforme necessário
          alt={album.name}
        />
        <div>
          <h1 className="text-3xl font-bold">{album.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default ReviewAlbum;
