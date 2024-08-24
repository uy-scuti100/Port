import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";
import PrimaryBtn from "../components/buttons/primary-btn";
import SecondaryBtn from "../components/buttons/secondary-btn";

import Accordion from "../components/ProfileComponents/Accordion";
import ContactSection from "../components/ProfileComponents/ContactSection";
import InitialIntroduction from "../components/ProfileComponents/InitialIntroduction";
import GetToKnowMe from "../components/ProfileComponents/GetToKnowMe";
import VisionAndQualities from "../components/ProfileComponents/VisionAndQualities";

const Profile = () => {
	const { theme, isDarkMode } = useContext(ThemeContext);
	return (
		<div className="py-[80px] px-5 md:px-[10px]">
			<InitialIntroduction />
			<GetToKnowMe />
			<VisionAndQualities />
			<Accordion />
			<ContactSection />
		</div>
	);
};

export default Profile;
