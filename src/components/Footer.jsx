import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { Link } from "react-router-dom";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
	const { isDarkMode, theme } = useContext(ThemeContext);
	return (
		<div className="z-10 flex flex-col items-center justify-center gap-5 pt-10 pb-20 md:py-20 ">
			<div>
				<svg
					width="70px"
					height="70px"
					viewBox="-1.92 -1.92 27.84 27.84"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke="#CCCCCC"
						stroke-width="0.288"
					></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<path
							d="M20.73 16.52C20.73 16.52 20.73 16.45 20.73 16.41V7.58999C20.7297 7.47524 20.7022 7.36218 20.65 7.25999C20.5764 7.10119 20.4488 6.97364 20.29 6.89999L12.29 3.31999C12.1926 3.2758 12.0869 3.25293 11.98 3.25293C11.8731 3.25293 11.7674 3.2758 11.67 3.31999L3.67001 6.89999C3.54135 6.96474 3.43255 7.06303 3.35511 7.18448C3.27766 7.30592 3.23444 7.44603 3.23001 7.58999V16.41C3.23749 16.5532 3.28195 16.6921 3.35906 16.813C3.43617 16.9339 3.54331 17.0328 3.67001 17.1L11.67 20.68C11.7668 20.7262 11.8727 20.7501 11.98 20.7501C12.0873 20.7501 12.1932 20.7262 12.29 20.68L20.29 17.1C20.4055 17.0471 20.5061 16.9665 20.5829 16.8653C20.6597 16.7641 20.7102 16.6455 20.73 16.52ZM4.73001 8.73999L11.23 11.66V18.84L4.73001 15.93V8.73999ZM12.73 11.66L19.23 8.73999V15.93L12.73 18.84V11.66ZM12 4.81999L18.17 7.58999L12 10.35L5.83001 7.58999L12 4.81999Z"
							fill={isDarkMode ? "#C0A062" : "#000000 "}
						></path>{" "}
					</g>
				</svg>
			</div>
			<div className="text-[#8d8d8dee]">
				&copy; {new Date().toDateString().split(" ")[3]}
			</div>
			<div
				className={`${
					isDarkMode
						? "text-[#8d8d8dee] text-[13px] font-[roboto]"
						: "text-black text-[13px] font-[roboto]"
				}`}
			>
				Built With{" "}
				<Link to="https://react.dev">
					<span className="text-brown">React</span>
				</Link>{" "}
				+{" "}
				<Link to="https://vitejs.dev/">
					<span className="text-brown">Vite</span>
				</Link>{" "}
			</div>
			<div
				className={`${
					isDarkMode
						? "text-[#8d8d8dee] text-[13px] font-[roboto]"
						: "text-black text-[13px] font-[roboto]"
				}`}
			>
				Styled With{" "}
				<Link to="https://tailwindcss.com/">
					<span className="text-brown">Tailwind Css</span>
				</Link>
			</div>
			<div
				className={`${
					isDarkMode
						? "text-[#8d8d8dee] text-[13px] font-[roboto]"
						: "text-black text-[13px] font-[roboto]"
				}`}
			>
				Hosted on{" "}
				<Link to="https://vercel.com/">
					<span className="text-brown"> Vercel</span>
				</Link>
			</div>

			<div className=" mt-10 w-[100px] h-[1px] bg-brown"></div>
			<div
				className={` md:before:w-[150px] before:w-[80px] before:h-[2px] before:bg-brown
        before:mr-6 md:after:w-[150px] after:w-[80px] after:h-[2px] after:bg-brown
        after:ml-6 mt-10 flex items-center text-[24px] space-x-4
        md:space-x-8 ${
					isDarkMode ? "text-ash" : "text-gray"
				}  px-[20px] md:text-[36px] py-5`}
			>
				<p>
					<Link to="https://www.instagram.com/_uy_scuti____/">
						<ImInstagram />
					</Link>
				</p>
				<p>
					<Link to="https://twitter.com/Hussain_Joe">
						<FaTwitter />
					</Link>
				</p>
				<p>
					<Link to="https://github.com/uy-scuti100">
						<FiGithub />
					</Link>
				</p>

				<p>
					<Link to="https://www.linkedin.com/in/yusuf-hussain-276ab6251/">
						<TiSocialLinkedin />
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Footer;
