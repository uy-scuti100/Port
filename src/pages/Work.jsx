import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/theme";
import MobileNav from "../components/MobileNav";
import { BounceLoader } from "react-spinners";

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const { theme } = useContext(ThemeContext);
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen bg-black">
          <BounceLoader color={"#C0A062"} />
        </div>
      ) : (
        <div className={`bg-${theme.bg} min-h-screen relative overflow-hidden`}>
          <MobileNav />
        </div>
      )}
    </div>
  );
};

export default Work;
