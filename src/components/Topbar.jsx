import { BsToggleOn } from "react-icons/bs";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { links } from "../constants/topLinks";
const Topbar = () => {
  const { theme, isDarkMode, toggleTheme } = useContext(ThemeContext);

  const path = window.location.pathname;
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="hidden md:flex w-full p-10 items-center justify-between "
    >
      <Link to="/">
        <div className="flex items-center gap-5">
          <div className="bg-brown w-[60px] h-[60px] text-black flex items-center justify-center font-[roboto] text-[18px] font-bold ">
            HY
          </div>

          <div
            className={`font-[roboto] text-[18px] capitalize font-bold leading-[80px] text-${theme.text}`}
          >
            Hussain Yusuf
          </div>
        </div>
      </Link>
      <div
        className={`flex items-center text-[18px] font-bold text-${theme.text} font-[roboto] 
      `}
      >
        {links.map((link) => {
          const { label, href } = link;
          return (
            <Link to={href} key={label}>
              <p
                className={`px-5 hover:text-brown ${
                  path === href && "text-brown"
                }`}
              >
                {label}
              </p>
            </Link>
          );
        })}
        <div className="text-white mr-3 cursor-pointer" onClick={toggleTheme}>
          {isDarkMode ? (
            <BsToggleOn size={36} style={{ color: "#fff", rotate: "180deg" }} />
          ) : (
            <BsToggleOn size={36} style={{ color: "#000" }} />
          )}
        </div>
      </div>
    </motion.div>
  );
=======
import { desktopLinks, links } from "../constants/topLinks";
const Topbar = () => {
	const { theme, isDarkMode, toggleTheme } = useContext(ThemeContext);

	const path = window.location.pathname;
	return (
		<motion.div
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			className="items-center justify-between hidden w-full p-10 md:flex "
		>
			<Link to="/">
				<div className="flex items-center gap-5">
					<div className="bg-brown w-[60px] h-[60px] text-black flex items-center justify-center font-[roboto] text-[18px] font-bold ">
						HY
					</div>

					<div
						className={`font-[roboto] text-[18px] capitalize font-bold leading-[80px] text-${theme.text}`}
					>
						Hussain Yusuf
					</div>
				</div>
			</Link>
			<div
				className={`flex items-center text-[18px] font-bold text-${theme.text} font-[roboto] 
      `}
			>
				{desktopLinks.map((link) => {
					const { label, href } = link;
					return (
						<Link to={href} key={label}>
							<p
								className={`px-5 hover:text-brown ${
									path === href && "text-brown"
								}`}
							>
								{label}
							</p>
						</Link>
					);
				})}
				<div className="mr-3 text-white cursor-pointer" onClick={toggleTheme}>
					{isDarkMode ? (
						<BsToggleOn size={36} style={{ color: "#fff", rotate: "180deg" }} />
					) : (
						<BsToggleOn size={36} style={{ color: "#000" }} />
					)}
				</div>
			</div>
		</motion.div>
	);
>>>>>>> 47a0d82 (new change)
};

export default Topbar;
