import React from "react";
import BannerImg from "../assets/All Images/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <div className="w-[85%] mx-auto flex justify-between items-center gap-10">
      <div className="flex flex-col w-1/2">
        <span className="font-['Manrope'] font-extrabold text-[#1A1919] text-7xl">One Step </span>
        <span className="font-['Manrope'] font-extrabold text-[#1A1919] text-7xl">
          Closer To Your
        </span>
        <span className="font-['Manrope'] font-extrabold text-7xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">
          Dream Job
        </span>
        <p className="font-['Manrope'] text-lg font-medium text-[#757575] my-2">
          Explore thousands of job opportunities with all the <br /> information you need. Its your
          future. Come find it. Manage all your job application from start to finish.
        </p>
        <button className="w-[160px] btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none rounded-lg">
          Get Started
        </button>
      </div>

      <div className="w-1/2">
        <img src={BannerImg} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default Banner;
