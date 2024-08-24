import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";
import { Link } from "react-router-dom";

export default function SecondaryBtn({ children, href }) {
	const { theme } = useContext(ThemeContext);
	return (
		<Link
			to={href}
			target="_blank"
			className={`text-${theme.text} uppercase border border-brown md:px-5 md:py-6 py-4 px-3 leading-[1]  transition-all hover:opacity-70 duration-500`}
		>
			{children}
		</Link>
	);
}
