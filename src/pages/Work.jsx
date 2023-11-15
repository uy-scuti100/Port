import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/theme";
import MobileNav from "../components/MobileNav";
import { BounceLoader } from "react-spinners";
import Topbar from "../components/Topbar";
import MobileTopBar from "../components/MobileTopBar";
import Toggle from "../components/Toggle";
import Works from "../components/Works";
import Footer from "../components/Footer";

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, []);

  const { theme, isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      {isLoading ? (
        <div
          className={`flex justify-center items-center min-h-screen ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <BounceLoader color={isDarkMode ? "#C0A062" : "#000000"} />
        </div>
      ) : (
        <div className={`bg-${theme.bg} min-h-screen relative overflow-hidden`}>
          <Topbar />
          <MobileTopBar />
          <Works />
          <Toggle />
          <Footer />
          <MobileNav />
        </div>
      )}
    </div>
  );
};

export default Work;
