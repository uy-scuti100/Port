import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";
import { Link } from "react-router-dom";
import { workLinks } from "../../constants/WorkLinks";
import PrimaryBtn from "../buttons/primary-btn";

export const ProjectCard = ({ name, link, concept, image }) => {
    const { theme, isDarkMode } = useContext(ThemeContext);

    return (
        <ul className="relative overflow-hidden">
            <Link to={link} target="_blank">
                <li
                    className={`text-${theme.text} ${
                        isDarkMode ? "bg-[#000000]" : "bg-[#ece5e5]"
                    } h-[337px] min-w-[363px] py-5 px-10 m-4 relative overflow-hidden transition-all duration-500 ease-in-out`}
                >
                    {/* Screenshot image */}
                    <div className="w-full h-[140px] mb-3 overflow-hidden rounded-lg">
                        <img
                            src={image}
                            alt={name}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>

                    <p className="capitalize text-[18px] py-2 relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:bg-brown after:w-[10%] after:h-[1px] mb-1">
                        {name}
                    </p>
                    <p className="leading-[1] font-bold tracking-[2px] text-[#333333] text-[13px] font-roboto py-1 pr-[15px] uppercase">
                        {concept}
                    </p>

                    <div className="rounded-full bg-[#484848]/50 w-[54px] h-[54px] absolute right-3 bottom-6" />
                    <div className="rounded-full bg-[#484848]/50 w-[192px] h-[192px] absolute right-[-120px] bottom-[-100px]" />
                </li>
            </Link>
        </ul>
    );
};

const Overview = () => {
    const { theme, isDarkMode } = useContext(ThemeContext);

    return (
        <div className="max-w-[1680px]">
            <div className="p-[20px] md:p-[100px]">
                <h1
                    className={`proj-title text-${theme.text} break-words tracking-widest-[-1px] leading-[1.26] font-black md:text-left text-center`}
                >
                    Things I&apos;ve built.
                </h1>
            </div>

            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
                {workLinks.map((item) => (
                    <ProjectCard
                        key={item.name}
                        name={item.name}
                        link={item.link}
                        concept={item.concept}
                        image={item.image}
                    />
                ))}
            </div>

            <div className="flex items-center justify-center pt-20 pb-10">
                <PrimaryBtn children={"view other projects"} href={"/work"} />
            </div>

            <div>
                {isDarkMode ? (
                    <div className="opacity-[0.15] flex justify-center">
                        <img
                            src="images/zickzack_white.svg"
                            alt="/"
                            className="md:w-[200px]"
                        />
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <img
                            src="images/download.svg"
                            alt="/"
                            className="md:w-[200px]"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Overview;
