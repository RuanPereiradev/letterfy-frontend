// 📂 /src/components/Player.jsx
import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const {
    audioRef,
    seekBar,
    seekBg,
    track,
    playStatus,
    time,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  // Função para alternar entre play e pause
  const handlePlayPause = () => {
    if (playStatus) {
      pause();
    } else {
      play();
    }
  };

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      {/* Elemento de áudio */}
      <audio ref={audioRef} src={track.audio} />

      {/* Informações da música */}
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt={track.name} />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Controles de reprodução */}
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4 align-items'>
          <img
            className='w-4 cursor-pointer'
            src={assets.shuffle_icon}
            alt='Shuffle'
          />
          <img
            className='w-4 cursor-pointer'
            src={assets.prev_icon}
            alt='Previous'
            onClick={previous} // Volta para a música anterior
          />
          <img
            className='w-4 cursor-pointer'
            src={playStatus ? assets.pause_icon : assets.play_icon}
            alt='Play/Pause'
            onClick={handlePlayPause} // Toca ou pausa a música
          />
          <img
            className='w-4 cursor-pointer'
            src={assets.next_icon}
            alt='Next'
            onClick={next} // Avança para a próxima música
          />
          <img
            className='w-4 cursor-pointer'
            src={assets.loop_icon}
            alt='Loop'
          />
        </div>
        <div className='flex items-center gap-5'>
          <p>
            {time.currentTime.minute}:{time.currentTime.second.toString().padStart(2, '0')}
          </p>
          <div
            ref={seekBg}
            className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'
            onClick={seekSong}
          >
            <div
              ref={seekBar}
              className='h-1 bg-green-800 rounded-full'
              style={{ width: '0%' }}
            ></div>
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second.toString().padStart(2, '0')}
          </p>
        </div>
      </div>

      {/* Outros controles */}
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