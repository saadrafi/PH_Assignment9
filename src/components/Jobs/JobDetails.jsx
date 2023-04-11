import React from "react";
import Page from "../Layout/Page";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb } from "../../utilitis/fakedb";

const JobDetails = () => {
    const {job} = useLoaderData();
    console.log(job);
  return (
    <>
      <Page>Job Details</Page>
      <div className="w-[85%] mx-auto grid grid-cols-[3fr,2fr] mt-24 mb-24">
        <div className="font-['Manrope'] flex flex-col gap-y-4">
          <p className=" text-base text-[#757575]">
            <span className="font-bold text-[#1A1919]">Job Description:</span>
            {job.description}
          </p>
          <p className=" text-base text-[#757575]">
            <span className="font-bold text-[#1A1919]">Job Description:</span>
            {job.responsibilities}
          </p>
          <h3 className="font-bold text-[#1A1919]">Educational Requirements:</h3>
          <p className=" text-base text-[#757575]">{job.educational_requirements}</p>
          <h3 className="font-bold text-[#1A1919]">Experience Requirements:</h3>
          <p className=" text-base text-[#757575]">{job.experiences}</p>
        </div>

        <div className=" ml-3">
          <div className="bg-gradient-to-r from-[#7E90FE]/[0.2] to-[#9873FF]/[0.2] rounded-lg">
            <div className="p-8 font-['Manrope'] text-lg">
              <div>
                <h3 className="font-bold text-[#1A1919] pb-4 border-b border-[#7E90FE]">
                  Job Details:
                </h3>
                <div className="flex items-center gap-1 mt-2">
                  <img src="../../assets/Icons/Frame.png" alt="" className=" h-6" />
                  <span className="font-bold ">Salary:</span>
                  <span>{job.salary} (Per Month)</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <img src="../../assets/Icons/Frame-1.png" alt="" className=" h-6" />
                  <span className="font-bold ">Job Title:</span>
                  <span>{job.title}</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[#1A1919] pb-4 border-b border-[#7E90FE]">
                  Contact Information:
                </h3>
                <div className="flex items-center gap-1 mt-2">
                  <img src="../../assets/Icons/Frame-2.png" alt="" className=" h-6" />
                  <span className="font-bold ">Phone:</span>
                  <span>{job.contact_information.phone}</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <img src="../../assets/Icons/Frame-3.png" alt="" className=" h-6" />
                  <span className="font-bold ">Email:</span>
                  <span>{job.contact_information.email}</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <img src="../../assets/Icons/Frame-4.png" alt="" className=" h-6" />
                  <span className="font-bold ">Address:</span>
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link>
              <button onClick={()=>{addToDb(job)}} className="btn w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
