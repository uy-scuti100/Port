import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Topbar from "./components/globalComponents/Topbar";
import MobileNav from "./components/globalComponents/MobileNav";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import Noise from "./components/globalComponents/Noise";
import Preloader from "./components/globalComponents/preloader";
import Profile from "./pages/Profile";
import LenisComponent from "./components/globalComponents/ReactLenis";
import MobileTopBar from "./components/globalComponents/MobileTopBar";
import Footer from "./components/globalComponents/Footer";
import useLenis from "./components/globalComponents/Lenis";
import Lenis from "./components/globalComponents/Lenis";
import SmoothScrolling from "./components/globalComponents/Lenis";

const Layout = () => {
	return (
		<div>
			<Noise />
			<Preloader />
			<div className="hidden md:flex">
				<Topbar />
			</div>
			<div className=" md:hidden">
				<MobileTopBar />
			</div>
			<Outlet />
			<MobileNav />
			<Footer />
		</div>
	);
};

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <Profile />,
			},
			{
				path: "/work",
				element: <Work />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

export default function App() {
	const { isDarkMode } = useContext(ThemeContext);
	isDarkMode;
	return (
		<main className={`${isDarkMode ? "bg-black" : "bg-white"} `}>
			<div className="relative w-full max-w-6xl min-h-screen mx-auto overflow-x-hidden">
				<RouterProvider router={router} />
			</div>
		</main>
	);
}
