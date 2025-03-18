import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import { useLocation } from "react-router-dom";
import LoginSingup from "./components/LoginSingup";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const location = useLocation();

  // Verifica se a rota atual é a de login
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="h-screen bg-black">
      {/* Renderiza a tela de login separada, sem a sidebar */}
      {isLoginPage ? (
        <LoginSingup />
      ) : (
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
      )}
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;