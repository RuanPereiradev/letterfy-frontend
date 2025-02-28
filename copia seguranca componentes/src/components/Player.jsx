// 📂 /src/components/Player.jsx
import React, { useState } from 'react';
import { assets, songsData } from '../assets/assets';

const Player = () => {
  const [currentSong, setCurrentSong] = useState(songsData[0]); // Estado para a música atual
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar a reprodução

  const handlePlay = () => {
    setIsPlaying(!isPlaying); // Alternar entre play e pause
  };

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={currentSong.image} alt={currentSong.name} />
        <div>
          <p>{currentSong.name}</p>
          <p>{currentSong.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4 align-items'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt='Shuffle' />
          <img className='w-4 cursor-pointer' src={assets.prev_icon} alt='Previous' />
          <img
            className='w-4 cursor-pointer'
            src={isPlaying ? assets.pause_icon : assets.play_icon} // Alternar entre play e pause
            alt='Play/Pause'
            onClick={handlePlay} // Iniciar/pausar a reprodução
          />
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt='Next' />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt='Loop' />
        </div>
        <div className='flex items-center gap-5'>
          <p>1:06</p>
          <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr className='h-1 border-none w-10 bg-green-800 rounded-full' />
          </div>
          <p>3:20</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.play_icon} alt='Play' />
        <img className='w-4' src={assets.mic_icon} alt='Mic' />
        <img className='w-4' src={assets.queue_icon} alt='Queue' />
        <img className='w-4' src={assets.speaker_icon} alt='Speaker' />
        <img className='w-4' src={assets.volume_icon} alt='Volume' />
        <div className='w-20 bg-slate-50 h-1 rounded'></div>
        <img className='w-4' src={assets.mini_player_icon} alt='Mini Player' />
        <img className='w-4' src={assets.zoom_icon} alt='Zoom' />
      </div>
    </div>
  );
};

export default Player;