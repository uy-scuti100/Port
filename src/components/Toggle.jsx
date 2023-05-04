import { useContext, useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import { ThemeContext } from "../../context/theme";

const Toggle = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [showButton, setShowButton] = useState(null);

  const toggle = () => {
    var currentPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentPosition > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Add a scroll event listener to the window object
  window.addEventListener("scroll", function () {
    // Get the current scroll position
    var currentPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    // Get the height of the viewport
    var viewportHeight = window.innerHeight;

    // Set a threshold for showing the button (in this case, half the viewport height)
    var threshold = viewportHeight / 2;

    // If the current scroll position is greater than the threshold, show the button
    if (currentPosition > threshold) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });

  return (
    <div>
      <div
        className={`${
          isDarkMode ? "bg-brown text-black " : "bg-black text-white"
        }  ${
          showButton
            ? "opacity-1 translate-x-0"
            : "opacity-0 translate-x-[200%]"
        } fixed md:right-6 right-2 bottom-32 flex items-center gap-2 flex-col py-2  rounded-md cursor-pointer transition-all duration-300 ease-in-out`}
        onClick={toggle}
      >
        <div>
          <MdArrowUpward />
        </div>
        <div className="rotate-90">
          <span>UP</span>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
