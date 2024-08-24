import AnimatedText from "../components/Animation/AnimateText";
import AboutMe from "../components/HomeComponents/AboutMe";
import HeroSection from "../components/HomeComponents/HeroSection";
import Overview from "../components/HomeComponents/Overview";

const Home = () => {
	return (
		<div>
			{/* <AnimatedText /> */}
			<HeroSection />
			<AboutMe />
			<Overview />
		</div>
	);
};

export default Home;
