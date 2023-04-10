import React from "react";

const SingleJob = ({ job }) => {
  const { company_logo, title, company_name, type, location, duration, salary } = job;
  return (
    <div className=" border rounded-lg ">
      <div className="p-10">
        <img src={company_logo} alt="" className="h-10 object-cover" />
        <h1 className="font-['Manrope'] font-extrabold text-2xl text-[#474747] mt-8 mb-2">
          {title}
        </h1>
        <p className="font-['Manrope'] font-semibold text-base text-[#757575]">{company_name}</p>
        <div className="my-4 flex gap-2">
          <span className="font-['Manrope'] font-semibold text-base text-[#757575] px-3 py-2  border rounded border-[#7E90FE] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text ">
            {type}
          </span>
          <span className="font-['Manrope'] font-semibold text-base text-[#757575] px-3 py-2  border rounded border-[#7E90FE] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text ">
            {duration}
          </span>
        </div>

        <div className="flex items-center mt-4">
          <div className="flex items-center">
            <img src="/src/assets/Icons/Location Icon.png" alt="" className="h-6" />
            <p className="font-['Manrope'] font-semibold text-base text-[#757575] px-2">
              {location}
            </p>
          </div>
          <div className="flex items-center">
            <img src="/src/assets/Icons/Frame.png" alt="" className="contrast-0 h-6" />
            <p className="font-['Manrope'] font-semibold text-base text-[#757575] px-2">
              Salary : {salary}
            </p>
          </div>
        </div>

        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none mt-6">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SingleJob;
