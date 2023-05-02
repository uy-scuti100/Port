import { useContext } from "react";
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import MobileNav from "../components/MobileNav";
import MobileTopBar from "../components/MobileTopBar";
import Overview from "../components/Overview";
import Projects from "../components/Projects";
import Topbar from "../components/Topbar";
import { ThemeContext } from "../context/theme";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`bg-${theme.bg} min-h-screen relative`}>
      <Topbar />
      <MobileTopBar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Overview />
      <MobileNav />
    </div>
  );
};

export default Home;
