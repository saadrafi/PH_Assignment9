import React from "react";

const SingleCategory = ({ category }) => {
  const { logo, name, jobs_available } = category;
  return (
    <div className="bg-gradient-to-r from-[#7E90FE]/[0.05] to-[#9873FF]/[0.05] rounded-lg w-full">
      <div className=" p-10 ">
        <div className="bg-gradient-to-r from-[#7E90FE]/[0.1] to-[#9873FF]/[0.1] w-[70px] h-[70px] flex justify-center items-center rounded-lg">
          <img src={logo} alt="" className=" w-[40px] h-[40px]" />
        </div>
        <h1 className="font-['Manrope'] font-extrabold text-xl text-[#474747] mt-8">{name}</h1>
        <p className="font-['Manrope'] font-medium text-base text-[#A3A3A3] mt-2">
          {jobs_available} Jobs Available
        </p>
      </div>
    </div>
  );
};

export default SingleCategory;
