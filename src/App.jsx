import React from "react";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import { useLocation } from "react-router-dom";
import LoginSingup from "./components/LoginSingup";
import Register from "./components/Register";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext"; // Importe o provedor do contexto

const App = () => {
  const location = useLocation();

  // Verifica se a página é de login ou registro
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <AuthProvider>
      {/* Envolva sua aplicação com o AuthProvider */}
      <div className="flex flex-col min-h-screen bg-black">
        <Sidebar />

        {isAuthPage ? (
          location.pathname === "/login" ? (
            <LoginSingup />
          ) : (
            <Register />
          )
        ) : (
          <div className="flex flex-col flex-grow">
            <div className="flex flex-grow">
              <Display />
            </div>
            {/* Footer agora está corretamente posicionado no final */}
            <Footer />
          </div>
        )}
      </div>
    </AuthProvider>
  );
};

export default App;
