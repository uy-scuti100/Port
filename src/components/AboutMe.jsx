const AboutMe = () => {
  return (
    <div className="max-w-[1680px]">
      <div className="text-[#999]  p-[20px] md:p-[100px] about font-bold leading-[1.8] md:hidden">
        Hello! I’m
        <strong className="text-white font-bold"> Hussain Yusuf</strong>. I'm a
        self-taught web developer with a year of experience. I'm dedicated to
        learning new technologies and techniques, and I'm passionate about
        taking on new challenges. I'm eager to collaborate with others and make
        a positive impact in the world of web development.
      </div>
      <div className="hidden md:block text-[#999] md:p-[50px] text-[18px] about font-bold leading-[1.8] md:ml-28">
        Hello! I’m
        <strong className="text-white font-bold"> Hussain Yusuf</strong>. I'm a
        self-taught web developer with a year of experience. <br /> I'm
        dedicated to learning new technologies and techniques, and I'm
        passionate about taking <br /> on new challenges. I'm eager to
        collaborate with others and make a positive impact in the world <br />{" "}
        of web development.
      </div>

      <div
        className="text-[#999] p-[30px] md:py-[10px] md:px-[50px]
    text-[18px] about font-bold leading-[1.8] md:ml-28"
      >
        Find out more{" "}
        <span className="border-b border-brown pb-1"> about me</span>
      </div>
      <div className="flex justify-center opacity-[0.15] py-10">
        <img src="images/zickzack_white.svg" alt="/" />
      </div>
    </div>
  );
};

export default AboutMe;
