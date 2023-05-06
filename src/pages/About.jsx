import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/theme";
import MobileNav from "../components/MobileNav";
import { RingLoader } from "react-spinners";
import Topbar from "../components/Topbar";
import MobileTopBar from "../components/MobileTopBar";
import Toggle from "../components/Toggle";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

const About = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          className={`flex justify-center items-center min-h-screen ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <RingLoader color={isDarkMode ? "#C0A062" : "#000000"} />
        </div>
      ) : (
        <div className={`bg-${theme.bg} min-h-screen relative overflow-hidden`}>
          <Topbar />
          <MobileTopBar />
          <Profile />
          <MobileNav />
          <Toggle />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default About;
