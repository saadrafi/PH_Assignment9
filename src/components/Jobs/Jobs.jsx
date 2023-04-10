import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className=" mt-11 w-[85%] mx-auto">
      <h1 className="font-['Manrope'] font-extrabold text-5xl text-[#1A1919] text-center">
        Featured Jobs
      </h1>
      <p className="font-['Manrope'] font-medium text-base text-[#757575] py-3 text-center">
        Explore thousands of job opportunities with all the information you need. Its your future
      </p>

      <div className="grid grid-cols-2 gap-5">
        {jobs.map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
