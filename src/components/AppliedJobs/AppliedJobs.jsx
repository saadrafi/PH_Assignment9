import React, { useState } from "react";
import Page from "../Layout/Page";
import { Link, useLoaderData } from "react-router-dom";
import SingleJobCard from "./SingleJobCard";

const AppliedJobs = () => {
  const savedData = useLoaderData();

  const [data, setData] = useState(savedData);

  const filterData = (e) => {
    const value = e.target.value;
    if (value === "onsite") {
      const filteredData = savedData.filter((job) => job.type === "Onsite");
      setData(filteredData);
    } else if (value === "remote") {
      const filteredData = savedData.filter((job) => job.type === "Remote");
      setData(filteredData);
    } else {
      setData(savedData);
    }
  };

  return (
    <div>
      <Page>Applied Jobs</Page>
      <div className="w-[85%] mx-auto flex  mt-4">
        <div className=" ml-auto">
          <select onChange={filterData}>
            <option value="">Filter By</option>
            <option value="onsite">OnSite</option>
            <option value="remote">Remote</option>
          </select>
        </div>
      </div>
      {data.length === 0 && (
        <div className="w-[85%] mx-auto mt-16">
          <h1 className="font-['Manrope'] font-extrabold text-center text-5xl">No Applied Jobs</h1>
          <p className="font-['Manrope'] font-medium text-[#757575] text-center text-base py-3">
            Explore thousands of job opportunities with all the information you need. Its your
            future
          </p>
        </div>
      )}

      {data.map((job) => (
        <SingleJobCard key={job.id} job={job}></SingleJobCard>
      ))}
    </div>
  );
};

export default AppliedJobs;
