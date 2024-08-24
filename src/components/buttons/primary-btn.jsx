import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";
import { Link } from "react-router-dom";

export default function PrimaryBtn({ children, href }) {
	const { theme } = useContext(ThemeContext);
	return (
		<Link
			to={href}
			target="_blank"
			className={`text-${theme.text} uppercase bg-brown transition-all duration-500 hover:opacity-70 md:px-5 md:py-6 py-4 px-3 leading-[1] whitespace-nowrap`}
		>
			{children}
		</Link>
	);
}
