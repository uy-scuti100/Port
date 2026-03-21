import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";
import { AiFillGithub } from "react-icons/ai";
// import { FaLinkedinIn, FaBluesky } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
    {
        label: "X / Twitter",
        handle: "@hussain_joe",
        href: "https://x.com/hussain_joe",
        icon: FaTwitter,
    },
    {
        label: "LinkedIn",
        handle: "in/uy-scuti",
        href: "https://www.linkedin.com/in/uy-scuti/",
        icon: AiFillGithub,
    },
    {
        label: "GitHub",
        handle: "uy-scuti100",
        href: "https://github.com/uy-scuti100",
        icon: AiFillGithub,
    },
    {
        label: "Bluesky",
        handle: "scuti-dr3.bsky.social",
        href: "https://bsky.app/profile/scuti-dr3.bsky.social",
        icon: AiFillGithub,
    },
];

const ContactForm = () => {
    const { theme, isDarkMode } = useContext(ThemeContext);

    return (
        <div>
            <div
                className={`text-${theme.text} py-[30px] px-[20px] md:px-[100px] md:py-[20px] flex flex-col gap-5 items-center justify-center`}
            >
                <h1 className="about-title py-2 text-center leading-[180%]">
                    Let&apos;s work together.
                </h1>
            </div>

            <p
                className={`${
                    isDarkMode ? "text-[#8d8d8dee]" : "text-[#000000]"
                } font-[poppins] px-[20px] md:px-[50px] pb-[50px] leading-[1.8] text-center md:text-[22px] max-w-2xl mx-auto`}
            >
                I&apos;m open to contract engineering roles and interesting
                projects. Find me on any of these.
            </p>

            <div className="flex flex-col items-center gap-4 px-5 max-w-[560px] mx-auto">
                {socials.map(({ label, handle, href, icon: Icon }) => (
                    <Link
                        key={label}
                        to={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-between px-6 py-5 transition-all duration-300 group ${
                            isDarkMode
                                ? "bg-[#000000] hover:bg-[#111111]"
                                : "bg-[#ece5e5] hover:bg-[#e0d8d0]"
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <Icon size={22} className="text-brown" />
                            <div>
                                <p
                                    className={`text-${theme.text} font-semibold text-sm uppercase tracking-widest`}
                                >
                                    {label}
                                </p>
                                <p
                                    className={`text-sm ${isDarkMode ? "text-[#8d8d8dee]" : "text-[#4A4B65]"}`}
                                >
                                    {handle}
                                </p>
                            </div>
                        </div>
                        <span
                            className={`text-brown text-lg transition-transform duration-300 group-hover:translate-x-1`}
                        >
                            →
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ContactForm;
