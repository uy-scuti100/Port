import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import LenisComponent from "./components/ReactLenis";
import MobileTopBar from "./components/MobileTopBar";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import MobileNav from "./components/MobileNav";

function App() {
	const { isDarkMode } = useContext(ThemeContext);
	return (
		<div className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
			<BrowserRouter>
				<LenisComponent>
					<div className="hidden md:flex">
						<Topbar />
					</div>
					<div className=" md:hidden">
						<MobileTopBar />
					</div>
					<Routes>
						<Route index element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/work" element={<Work />} />

						<Route path="/contact" element={<Contact />} />
					</Routes>
					<MobileNav />
					<Footer />
				</LenisComponent>
			</BrowserRouter>
		</div>
	);
}

export default App;
