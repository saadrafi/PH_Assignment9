import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll=()=>{
    setShowAll(!showAll);
  }

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        if (showAll==false) {
          data = data.slice(0, 4);
        }
        setJobs(data);
      });
  }, [showAll]);

  return (
    <div id="jobs" className=" mt-11 w-[85%] mx-auto">
      <h1 className="font-['Manrope'] font-extrabold text-5xl text-[#1A1919] text-center">
        Featured Jobs
      </h1>
      <p className="font-['Manrope'] font-medium text-base text-[#757575] py-3 text-center">
        Explore thousands of job opportunities with all the information you need. Its your future
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {jobs.map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
      <div className="flex justify-center">
        <button onClick={handleShowAll} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none mt-6 mb-10">
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Jobs;
