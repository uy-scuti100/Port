import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/theme";
import MobileNav from "../components/MobileNav";
import { HashLoader } from "react-spinners";
import Topbar from "../components/Topbar";
import MobileTopBar from "../components/MobileTopBar";
import Toggle from "../components/Toggle";
import Footer from "../components/Footer";

const Contact = () => {
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
          <HashLoader color={isDarkMode ? "#C0A062" : "#000000"} />
        </div>
      ) : (
        <div className={`bg-${theme.bg} min-h-screen relative overflow-hidden`}>
          {" "}
          <Topbar />
          <MobileTopBar />
          <MobileNav />
          <Toggle />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Contact;
