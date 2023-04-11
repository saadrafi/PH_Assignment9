import React from "react";
import Navbar from "../Navbar";

const Page = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-[#7E90FE]/[0.05] to-[#9873FF]/[0.05] relative">
      <Navbar></Navbar>

      <img
        src="../../assets/All Images/Vector.png"
        alt=""
        className="absolute left-0 bottom-0 h-40"
      />
      <img
        src="../../assets/All Images/Vector-1.png"
        alt=""
        className="absolute top-0 right-0 h-40"
      />
      <h1 className="text-center font-['Manrope'] text-3xl font-extrabold h-28 mt-24">
        {children}
      </h1>
    </div>
  );
};

export default Page;
