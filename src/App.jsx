import React from "react";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import { useLocation } from "react-router-dom";
import LoginSingup from "./components/LoginSingup";
import Register from "./components/Register";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  // Verifica se a página é de login ou registro
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {isAuthPage ? (
        location.pathname === "/login" ? (
          <LoginSingup />
        ) : (
          <Register />
        )
      ) : (
        <div className="flex flex-col flex-grow">
          <div className="flex flex-grow">
            <Sidebar />
            <Display />
          </div>
          {/* Footer agora está corretamente posicionado no final */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
