import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import { useLocation } from "react-router-dom";
import LoginSingup from "./components/LoginSingup";
import Register from "./components/Register"; // Verifique o caminho correto para o seu componente

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const location = useLocation();

  // Verifica se a rota atual é a de login ou registro
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="h-screen bg-black">
      {/* Renderiza a tela de login ou registro sem a sidebar e o player */}
      {isAuthPage ? (
        location.pathname === "/login" ? (
          <LoginSingup />
        ) : (
          <Register />
        )
      ) : (
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
      )}

      {/* Só exibe o Player se não for login ou registro */}
      {!isAuthPage && <Player />}

      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
