import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      {" "}
      <div
        className={`text-${theme.text} py-[30px] px-[20px] md:px-[100px] md:py-[50px]`}
      >
        <h1 className="about-title">
          Hello, I'm Hussain! <br /> Web & Mobile Developer.
        </h1>
      </div>
    </div>
  );
};

export default Profile;
