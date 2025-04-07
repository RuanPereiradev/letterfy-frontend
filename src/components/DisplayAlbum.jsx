import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { albumsData, assets, songsData } from "../assets/assets";

// Ícone SVG de usuário
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-slate-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const DisplayAlbum = () => {coverImage;
  const { albumId } = useParams();
  const [albums, setAlbums] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/v1/album/${albumId}`)
      .then((response) => response.json()) 
      .then((data) => {
        setAlbums(data); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Erro ao obter o álbum:", error); 
        setIsLoading(false); 
      });
  }, [albumId]); 

  if (isLoading) {
    return <p>Carregando...</p>; 
  }

  if (!albums) {
    return <p>Álbum não encontrado...</p>;
  }

  return (
    <div className="p-6 text-white">
      {/* Detalhes do álbum */}
      <div className="flex gap-6 items-center mb-8">
        <img
          className="w-48 h-48 rounded-lg shadow-lg"
          src={albums.images?.[0]?.url}
          alt={albums.name}
        />
        <div>
          <h1 className="text-3xl font-bold">{albums.name}</h1>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-yellow-400 text-2xl">
              {"★".repeat(Math.round(calculateAverageRating()))}
            </span>
            <span className="text-slate-400">
              ({albums.comments.length} avaliações)
            </span>
          </div>
        </div>
      </div>

      {/* Seção para fazer um comentário */}
      <div className="bg-[#242424] p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Deixe seu comentário</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <UserIcon /> 
            </div>
            <div className="flex-1">
              <textarea
                className="w-full p-3 rounded-lg bg-[#363636] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Escreva seu comentário..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows="3"
              />
              <div className="mt-2 flex items-center gap-2">
                <label className="text-slate-300">Avaliação: </label>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="cursor-pointer text-2xl"
                    onClick={() => setRating(star)}
                  >
                    {star <= rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
          >
            Enviar Comentário
          </button>
        </form>
      </div>

      {/* Seção de comentários já feitos */}
      <div className="bg-[#242424] p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Comentários</h2>
        <div className="space-y-6">
          {albums.comments.map((comment, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <UserIcon /> 
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold">{comment.user}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">
                      {"★".repeat(comment.rating)}
                    </span>
                    <div className="relative">
                      <button
                        className="text-slate-400 hover:text-white"
                        onClick={() =>
                          setEditingCommentId(
                            editingCommentId === index ? null : index
                          )
                        }
                      >
                        <span className="text-2xl">...</span>
                      </button>
                      {editingCommentId === index && (
                        <div className="absolute right-0 mt-2 w-32 bg-[#363636] rounded-lg shadow-lg">
                          <button
                            className="block w-full px-4 py-2 text-left hover:bg-[#454545]"
                            onClick={() => setEditingCommentId(index)}
                          >
                            Editar
                          </button>
                          <button
                            className="block w-full px-4 py-2 text-left hover:bg-[#454545]"
                            onClick={() => handleDeleteComment(index)}
                          >
                            Excluir
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {editingCommentId === index ? (
                  <textarea
                    className="w-full p-2 mt-2 rounded bg-[#363636] text-white"
                    value={comment.text}
                    onChange={(e) => handleEditComment(index, e.target.value)}
                  />
                ) : (
                  <p className="mt-2 text-slate-300">{comment.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão para alterar usuário */}
      <button
        className="mt-6 px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
        onClick={handleChangeUser}
      >
        Alterar Usuário
      </button>
    </div>
  );
};

export default DisplayAlbum;
