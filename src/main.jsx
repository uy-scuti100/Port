import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "../context/theme.jsx";
import { SmoothScrollProvider } from "../context/smooth";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<SmoothScrollProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</SmoothScrollProvider>
	</React.StrictMode>
);
