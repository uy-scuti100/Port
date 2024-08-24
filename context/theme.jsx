import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		// Determine initial theme mode based on localStorage or user preference
		const savedMode = JSON.parse(localStorage.getItem("isDarkMode"));
		if (savedMode !== null) {
			return savedMode;
		} else {
			// If no saved mode, use the user's system preference
			return (
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches
			);
		}
	});

	const toggleTheme = () => {
		const newMode = !isDarkMode;
		localStorage.setItem("isDarkMode", JSON.stringify(newMode));
		setIsDarkMode(newMode);
	};

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		// Update theme if the system preference changes
		const handleSystemThemeChange = (e) => {
			setIsDarkMode(e.matches);
		};

		// Initial check
		setIsDarkMode(mediaQuery.matches);

		// Listen for system theme changes
		mediaQuery.addEventListener("change", handleSystemThemeChange);

		// Cleanup event listener on component unmount
		return () => {
			mediaQuery.removeEventListener("change", handleSystemThemeChange);
		};
	}, []);

	const theme = isDarkMode
		? {
				bg: "black",
				text: "white",
				load: "white",
		  }
		: {
				bg: "#f5f5f5",
				text: "black",
				load: "black",
		  };

	return (
		<ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
