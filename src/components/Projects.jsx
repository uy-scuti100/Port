import React from "react";

const Projects = () => {
  return (
    <div className="max-w-[1680px]">
      <div className="p-[20px] md:p-[100px] ">
        <div>
          <h1 className="proj-title text-white break-words tracking-widest-[-1px] leading-[1.26] font-black">
            Concept: BankHotel
          </h1>
          <div>
            <div className="flex items-center text-[10px] md:text-[14px] space-x-4 md:space-x-8 text-ash md:before:w-[150px] md:before:h-[2px] md:before:bg-brown md:before:mr-4 md:px-[20px] px-[10px] py-10 uppercase leading-normal font-normal font-sans">
              <p> Y. 2022</p>
              <p> C. BankHotel</p>
              <p>T. Side Project</p>
              <p>A. Figma</p>
            </div>
          </div>
          <div className="md:p-10">
            <p className="text-ash md:text-[18px] font-[300]">
              Our landing page design will feature a clear and compelling
              call-to-action that motivates potential guests to book their stay
              at the hotel. The user-friendly interface and high-quality visuals
              will make for a seamless user experience, resulting in increased
              conversions and ultimately driving revenue for the establishment.
            </p>

            <button className="my-5 text-[13px] leading-[16px] font-[roboto] border-b border-brown uppercase text-[#eeeeee] font-bold">
              View Project
            </button>
          </div>
        </div>
      </div>
      <div className="md:px-20">
        <img
          src="images/file cover - 1.png"
          alt="/"
          className="object-cover md:h-[600px] md:w-screen"
        />
      </div>
      <div className="flex justify-center opacity-[0.15] py-32">
        <img src="images/zickzack_white.svg" alt="/" />
      </div>
    </div>
  );
};

export default Projects;