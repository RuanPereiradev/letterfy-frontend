// 📂 /src/components/SongDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { songsData } from '../assets/assets';

const SongDetails = () => {
  const { id } = useParams();
  const song = songsData.find((song) => song.id === parseInt(id));

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && rating > 0) {
      setComments([...comments, { text: newComment, rating }]);
      setNewComment('');
      setRating(0);
    }
  };

  if (!song) {
    return <div>Música não encontrada</div>;
  }

  return (
    <div className='p-4 text-white'>
      <div className='flex gap-4'>
        <img className='w-48 h-48 rounded' src={song.image} alt={song.name} />
        <div>
          <h1 className='text-2xl font-bold'>{song.name}</h1>
          <p className='text-slate-200'>{song.desc}</p>
        </div>
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-bold'>Avaliações e Comentários</h2>
        <form onSubmit={handleSubmit} className='mt-4'>
          <textarea
            className='w-full p-2 rounded bg-[#242424] text-white'
            placeholder='Deixe seu comentário...'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className='mt-2'>
            <label className='text-slate-200'>Avaliação: </label>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className='cursor-pointer'
                onClick={() => setRating(star)}
              >
                {star <= rating ? '★' : '☆'}
              </span>
            ))}
          </div>
          <button type='submit' className='mt-2 px-4 py-2 bg-green-500 rounded'>
            Enviar
          </button>
        </form>
        <div className='mt-4'>
          {comments.map((comment, index) => (
            <div key={index} className='mt-2 p-2 bg-[#242424] rounded'>
              <p>{comment.text}</p>
              <p>Avaliação: {'★'.repeat(comment.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;