import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    } else {
      const savedMode = JSON.parse(localStorage.getItem("isDarkMode"));
      if (savedMode !== null) {
        setIsDarkMode(savedMode);
      } else {
        setIsDarkMode(false);
      }
    }
  }, []);

  const theme = isDarkMode
    ? {
        bg: "black",
        text: "white ",
      }
    : {
        bg: "white ",
        text: "black ",
      };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
