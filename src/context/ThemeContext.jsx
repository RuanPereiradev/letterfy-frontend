import { createContext, useState, useEffect, useContext } from "react";

// Criando o contexto
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Verifica se há um tema salvo no localStorage
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // Adiciona a classe 'dark'
      localStorage.setItem("theme", "dark"); // Salva no localStorage
    } else {
      document.documentElement.classList.remove("dark"); // Remove a classe 'dark'
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para acessar o tema
export function useTheme() {
  return useContext(ThemeContext);
}
