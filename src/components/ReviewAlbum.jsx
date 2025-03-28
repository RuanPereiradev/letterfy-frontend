// // 📂 /src/components/SongDetails.jsx
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { albumsData } from "../assets/assets";

// // Ícone SVG de usuário
// const UserIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-10 w-10 text-slate-400"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//     />
//   </svg>
// );

// const ReviewAlbum = () => {
//   const { album_id } = useParams();
//   const album = albumsData.find((album) => album.id === parseInt(id));

//   // Carrega os comentários do localStorage ou usa o comentário inicial
//   const [comments, setComments] = useState(() => {
//     const savedComments = localStorage.getItem(`comments-${id}`);
//     return savedComments
//       ? JSON.parse(savedComments)
//       : [
//           {
//             user: "@userdoidao",
//             text: "Música incrível!",
//             rating: 5,
//           },
//         ];
//   });

//   // Salva os comentários no localStorage sempre que eles mudam
//   useEffect(() => {
//     localStorage.setItem(`comments-${id}`, JSON.stringify(comments));
//   }, [comments, id]);

//   // Estado para o novo comentário
//   const [newComment, setNewComment] = useState("");
//   const [rating, setRating] = useState(5); // Avaliação inicial de 5 estrelas

//   // Estado para controlar qual comentário está sendo editado
//   const [editingCommentId, setEditingCommentId] = useState(null);

//   // Estado para o usuário atual
//   const [currentUser, setCurrentUser] = useState({
//     username: "@userdoidao",
//   });

//   // Função para calcular a média das avaliações
//   const calculateAverageRating = () => {
//     const totalRating = comments.reduce(
//       (sum, comment) => sum + comment.rating,
//       0
//     );
//     return (totalRating / comments.length).toFixed(1); // Arredonda para 1 casa decimal
//   };

//   // Função para adicionar um novo comentário
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newComment.trim() && rating > 0) {
//       const newCommentData = {
//         user: currentUser.username,
//         text: newComment,
//         rating: rating,
//       };
//       setComments([...comments, newCommentData]);
//       setNewComment(""); // Limpa o campo de comentário
//       setRating(5); // Reseta a avaliação para 5 estrelas
//     }
//   };

//   // Função para editar um comentário
//   const handleEditComment = (index, newText) => {
//     const updatedComments = comments.map((comment, i) =>
//       i === index ? { ...comment, text: newText } : comment
//     );
//     setComments(updatedComments);
//     setEditingCommentId(null); // Sai do modo de edição
//   };

//   // Função para excluir um comentário
//   const handleDeleteComment = (index) => {
//     const updatedComments = comments.filter((_, i) => i !== index);
//     setComments(updatedComments);
//   };

//   // Função para atualizar o usuário atual
//   const handleChangeUser = () => {
//     const newUsername = prompt("Digite seu novo nome de usuário:");
//     if (newUsername) {
//       setCurrentUser({
//         username: newUsername,
//       });
//     }
//   };

//   if (!song) {
//     return <div>Música não encontrada</div>;
//   }

//   return (
//     <div className="p-6 text-white">
//       {/* Detalhes da música */}
//       <div className="flex gap-6 items-center mb-8">
//         <img
//           className="w-48 h-48 rounded-lg shadow-lg"
//           src={song.image}
//           alt={song.name}
//         />
//         <div>
//           <h1 className="text-3xl font-bold">{song.name}</h1>
//           <p className="text-slate-300 mt-2">{song.desc}</p>
//           <div className="mt-4 flex items-center gap-2">
//             <span className="text-yellow-400 text-2xl">
//               {"★".repeat(Math.round(calculateAverageRating()))}
//             </span>
//             <span className="text-slate-400">
//               ({comments.length} avaliações)
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Seção para fazer um comentário */}
//       <div className="bg-[#242424] p-6 rounded-lg mb-8">
//         <h2 className="text-2xl font-bold mb-4">Deixe seu comentário</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="flex gap-4 items-start">
//             <div className="flex-shrink-0">
//               <UserIcon /> {/* Ícone SVG de usuário */}
//             </div>
//             <div className="flex-1">
//               <textarea
//                 className="w-full p-3 rounded-lg bg-[#363636] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 placeholder="Escreva seu comentário..."
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}
//                 rows="3"
//               />
//               <div className="mt-2 flex items-center gap-2">
//                 <label className="text-slate-300">Avaliação: </label>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span
//                     key={star}
//                     className="cursor-pointer text-2xl"
//                     onClick={() => setRating(star)}
//                   >
//                     {star <= rating ? "★" : "☆"}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="mt-4 px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
//           >
//             Enviar Comentário
//           </button>
//         </form>
//       </div>

//       {/* Seção de comentários já feitos */}
//       <div className="bg-[#242424] p-6 rounded-lg">
//         <h2 className="text-2xl font-bold mb-4">Comentários</h2>
//         <div className="space-y-6">
//           {comments.map((comment, index) => (
//             <div key={index} className="flex gap-4">
//               <div className="flex-shrink-0">
//                 <UserIcon /> {/* Ícone SVG de usuário */}
//               </div>
//               <div className="flex-1">
//                 <div className="flex justify-between items-center">
//                   <span className="font-bold">{comment.user}</span>
//                   <div className="flex items-center gap-2">
//                     <span className="text-yellow-400">
//                       {"★".repeat(comment.rating)}
//                     </span>
//                     <div className="relative">
//                       <button
//                         className="text-slate-400 hover:text-white"
//                         onClick={() =>
//                           setEditingCommentId(
//                             editingCommentId === index ? null : index
//                           )
//                         }
//                       >
//                         <span className="text-2xl">...</span>
//                       </button>
//                       {editingCommentId === index && (
//                         <div className="absolute right-0 mt-2 w-32 bg-[#363636] rounded-lg shadow-lg">
//                           <button
//                             className="block w-full px-4 py-2 text-left hover:bg-[#454545]"
//                             onClick={() => setEditingCommentId(index)}
//                           >
//                             Editar
//                           </button>
//                           <button
//                             className="block w-full px-4 py-2 text-left hover:bg-[#454545]"
//                             onClick={() => handleDeleteComment(index)}
//                           >
//                             Excluir
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 {editingCommentId === index ? (
//                   <textarea
//                     className="w-full p-2 mt-2 rounded bg-[#363636] text-white"
//                     value={comment.text}
//                     onChange={(e) => handleEditComment(index, e.target.value)}
//                   />
//                 ) : (
//                   <p className="mt-2 text-slate-300">{comment.text}</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Botão para alterar usuário */}
//       <button
//         className="mt-6 px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
//         onClick={handleChangeUser}
//       >
//         Alterar Usuário
//       </button>
//     </div>
//   );
// };

// export default ReviewAlbum;

import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ReviewAlbum = () => {
  const { albumId } = useParams(); // Captura o albumId da URL
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token")

    const reviewData = {
      login: "zeze@gmail.com",
      albumId: albumId,
      rating: parseFloat(rating),
      comment: comment,
    };

    try {
      const response = await fetch("http://localhost:8080/review", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" ,
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar a review");
      }

      alert("Review enviada com sucesso!");
      setRating("");
      setComment("");
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-white text-lg font-bold mb-4">Deixe sua Review</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white"
          placeholder="Nota (0 a 5)"
          required
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white"
          placeholder="Digite seu comentário"
          required
        />
        <button
          type="submit"
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Enviar Review
        </button>
      </form>
    </div>
  );
};

export default ReviewAlbum;
