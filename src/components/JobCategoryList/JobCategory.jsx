import React, { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="w-[85%] mx-auto mt-16">
      <h1 className="font-['Manrope'] font-extrabold text-center text-5xl">Job Category List</h1>
      <p className="font-['Manrope'] font-medium text-[#757575] text-center text-base py-3">
        Explore thousands of job opportunities with all the information you need. Its your future
      </p>

      <div className="flex justify-between gap-5 mt-4">
        {categories.map((category,index) => (
          <SingleCategory category={category} key={index}></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
