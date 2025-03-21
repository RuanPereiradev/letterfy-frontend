import { createContext, useState, useContext, useEffect } from "react";

// Criação do contexto
export const AuthContext = createContext();

// Hook personalizado para acessar facilmente o contexto
export const useAuth = () => useContext(AuthContext);

// Provider para envolver o app com as informações de login
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Loga o usuário e armazena as informações
  };

  const logout = () => {
    setUser(null); // Desloga o usuário
  };

  // Verifica o estado do usuário ao carregar
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // Mantém o usuário logado caso haja informações no localStorage
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
