import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ReviewAlbum = () => {
  const { id } = useParams();

  const [album, setAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchAlbumAndReviews = async () => {
      try {
        const response = await fetch(
          `https://letterfy-production.up.railway.app/v1/album/${id}`
        );
        const data = await response.json();
        setAlbum(data);
        setReviews(data.reviews || []);
      } catch (error) {
        console.error("Erro ao obter o álbum e reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlbumAndReviews();

    // Recuperar o e-mail do usuário do localStorage
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, [id]);

  const calculateAverageRating = 
  reviews.length > 0 
  ? (reviews.reduce((sum, review)=> sum + review.rating, 0)/ reviews.length).toFixed(1): "No reviews";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "") {
      alert("Preencha a avaliação e o comentário.");
      return;
    }

    const authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      alert("Você precisa estar logado para enviar uma review.");
      return;
    }

    const newReview = {
      login: userEmail,
      albumId: id,
      rating,
      comment,
    };

    try {
      const response = await fetch(
        "https://letterfy-production.up.railway.app/review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(newReview),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Erro ao enviar review:", errorMessage);
        alert("Erro ao enviar review: " + errorMessage);
        return;
      }

      window.location.reload();
    } catch (error) {
      console.error("Erro ao conectar com o backend:", error);
    }
  };

  if (isLoading) return <p>Carregando...</p>;
  if (!album) return <p>Álbum não encontrado.</p>;

  return (
    <div className="p-6 text-white flex flex-col items-center">
      <div className="flex w-full max-w-5xl gap-8">
        <div className="w-1/3 flex flex-col items-center text-left">
          <img
            className="w-full h-auto rounded-lg shadow-lg mb-4"
            src={album.artists?.[0]}
            alt={album.name}
          />
          <h1 className="text-3xl font-bold text-center">{album.name}</h1>
          <p className="text-slate-300 mt-2 text-center">{album.desc}</p>

          <div className="mt-4 flex items-center text-lg font-semibold">
            <span className="mr-2">Média:</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  size={20}
                  color={
                    index < Math.round(calculateAverageRating) ? "#FFD700" : "#808080"
                  }
                />
              ))}
            </div>
            <span className="ml-2">{calculateAverageRating}</span>
          </div>
        </div>

        {/* Seção do formulário de review */}
        <div className="w-2/3 bg-[#242424] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Deixe seu comentário</h2>
          <div className="flex mb-4">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <label key={ratingValue}>
                  <input
                    type="radio"
                    name="rating"
                    className="hidden"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <FaStar
                    size={30}
                    className="cursor-pointer"
                    color={
                      ratingValue <= (hover || rating) ? "#FFD700" : "#808080"
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                </label>
              );
            })}
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full p-3 rounded-lg bg-[#363636] text-white"
              placeholder="Escreva seu comentário..."
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
            >
              Enviar Comentário
            </button>
          </form>
        </div>
      </div>

      {/* Seção de comentários abaixo */}
      <div className="w-full max-w-5xl bg-[#242424] p-6 rounded-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Comentários</h2>
        <div className="space-y-6">
          {reviews.length === 0 ? (
            <p className="text-gray-400">Ainda não há comentários.</p>
          ) : (
            reviews.map((review) => (
              <div key={review.reviewId} className="bg-[#333] p-4 rounded-md">
                <p className="font-semibold">
                  {review.user?.login || review.user?.username || "Anônimo"}
                </p>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      size={20}
                      color={index < review.rating ? "#FFD700" : "#808080"}
                    />
                  ))}
                </div>
                <p>{review.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );

};

export default ReviewAlbum;
