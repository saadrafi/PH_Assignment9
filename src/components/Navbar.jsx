import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="lg:w-[85%] mx-auto">
      <nav className="flex justify-between items-center py-4">
        <h1 className="font-bold font-['Manrope'] text-3xl">CareerHub</h1>
        <div className=" flex items-center space-x-4 text-base font-bold font-['Manrope']">
          <NavLink
            to="#"
            className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text"
          >
            Home
          </NavLink>
          <NavLink to="#">Stat</NavLink>
          <NavLink to="#">Applied Jobs</NavLink>
          <NavLink to="#">Blog</NavLink>
        </div>
        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none rounded-lg">Star Applying</button>
      </nav>
    </div>
  );
};

export default Navbar;
