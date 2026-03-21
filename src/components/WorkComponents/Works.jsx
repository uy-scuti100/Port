import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/theme";
import { useContext } from "react";
import SecondaryBtn from "../buttons/secondary-btn";

export default function WorkComponent({ name, link, intro, concept, image }) {
    const { theme, isDarkMode } = useContext(ThemeContext);

    return (
        <div className="py-[50px] px-[20px] md:px-[100px] md:py-[100px] flex flex-col lg:flex-row gap-10 items-start md:flex-wrap lg:flex-nowrap">
            <div className="max-w-[650px]">
                <div className="md:w-[650px] md:h-[400px] h-[280px] w-full overflow-hidden rounded-xl">
                    <img
                        src={image}
                        alt={name}
                        className="object-cover w-full h-full rounded-xl"
                    />
                </div>
            </div>
            <div>
                <h1 className={`text-${theme.text} pt-10 pb-5 work-title`}>
                    {name} &#8212; {concept}
                </h1>
                <p
                    className={`text-[18px] ${
                        isDarkMode ? "text-[#EEEEEE]" : "text-[#000008]"
                    }`}
                >
                    {intro}
                </p>
                <Link to={link} target="_blank">
                    <SecondaryBtn children={"View Project"} />
                </Link>
            </div>
        </div>
    );
}
