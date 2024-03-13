import React from "react";
// import Olayemi from '../../Images/olayemi.png'
// import Olayemi from '../../assets/Images/Kikky.jpg'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div className="w-full h-screen bg-[#C2BDB8]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-[#B78021]">Hi, my name is</p>
        <h1 className="text-3xl sm:text-6xl font-bold text-dark">
          Rodiat Olayemi
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-dark">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#000000] py-4 max-w-[700px]">
          A software developer with years experience designing and building
          responsive web design in the technology industry. Proficient with CSS
          and JS Frameworks, with extensive knowledge of UX and user psychology.
          Notable achievements include boosting the conversion rate of an
          existing website by 80% with improved code and design.
        </p>
        <div>
          <button className="text-[#000000] border-3 px-6 py-3 my-2 flex items-center hover:bg-[#B78021] hover: border-[#B78021]">
            View Projects <HiOutlineArrowNarrowRight className="ml-3" />
          </button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Home;
