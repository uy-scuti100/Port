import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    } else {
      const savedMode = JSON.parse(localStorage.getItem("isDarkMode"));
      if (savedMode !== false) {
        setIsDarkMode(savedMode);
      } else {
        setIsDarkMode(false);
      }
    }
  }, [isDarkMode]);

  const theme = isDarkMode
    ? {
        bg: "black",
        text: "white ",
        load: "white",
      }
    : {
        bg: "#ffffffda ",
        text: "black ",
        load: "black",
      };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
