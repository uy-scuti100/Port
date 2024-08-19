import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import LenisComponent from "./components/ReactLenis";

function App() {
	const { isDarkMode } = useContext(ThemeContext);
	return (
		<div className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
			<BrowserRouter>
				<LenisComponent>
					<Routes>
						<Route index element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/work" element={<Work />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</LenisComponent>
			</BrowserRouter>
		</div>
	);
}

export default App;
