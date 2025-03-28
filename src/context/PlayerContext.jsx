import { createContext, useEffect, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  // Remover os refs para o áudio e o controle de busca
  // const audioRef = useRef();
  // const seekBg = useRef();
  // const seekBar = useRef();

  const [track, setTrack] = useState(songsData[1]);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // Remover funções relacionadas ao controle do áudio
  // const play = () => {
  //     audioRef.current.play();
  //     setPlayStatus(true);
  // };

  // const pause = () => {
  //     audioRef.current.pause();
  //     setPlayStatus(false);
  // };

  // const playWithId = async (id) => {
  //     await setTrack(songsData[id]);
  //     await audioRef.current.play();
  //     setPlayStatus(true);
  // };

  // const previous = async () => {
  //     if (track.id > 0) {
  //         await setTrack(songsData[track.id - 1]);
  //         await audioRef.current.play();
  //         setPlayStatus(true);
  //     }
  // };

  // const next = async () => {
  //     if (track.id < songsData.length) {
  //         await setTrack(songsData[track.id + 1]);
  //         await audioRef.current.play();
  //         setPlayStatus(true);
  //     }
  // };

  // Remover a função de busca de música
  // const seekSong = async (e) => {
  //     audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
  // };

  // Efeito para atualizar o tempo da música (removido já que a música não será tocada)
  useEffect(() => {
    setTime({
      currentTime: {
        second: 0,
        minute: 0,
      },
      totalTime: {
        second: 0,
        minute: 0,
      },
    });
  }, [track]);

  const contextValue = {
    track,
    setTrack,
    time,
    setTime,
    // Não estamos mais expondo funções relacionadas ao player, então removemos elas
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
