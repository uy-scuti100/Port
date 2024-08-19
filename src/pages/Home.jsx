import { useContext, useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import MobileNav from "../components/MobileNav";
import MobileTopBar from "../components/MobileTopBar";
import Overview from "../components/Overview";
import Projects from "../components/Projects";
import Topbar from "../components/Topbar";
import { ThemeContext } from "../../context/theme";
import { CircleLoader } from "react-spinners";
import Footer from "../components/Footer";
import Toggle from "../components/Toggle";

const Home = () => {
	const { theme, isDarkMode } = useContext(ThemeContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate loading for 2 seconds
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	return (
		<div className="transition-all duration-500 ease-in-out">
			{isLoading ? (
				<div
					className={`flex justify-center items-center min-h-screen ${
						isDarkMode ? "bg-black" : "bg-white"
					}`}
				>
					<CircleLoader color={isDarkMode ? "#C0A062" : "#000000"} />
				</div>
			) : (
				<div className={`bg-${theme.bg} min-h-screen relative overflow-hidden`}>
					<Topbar />
					<MobileTopBar />
					<HeroSection />
					<AboutMe />
					<Overview />
					<MobileNav />
					<Footer />
				</div>
			)}
		</div>
	);
};

export default Home;
