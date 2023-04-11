import React from 'react';
import Navbar from '../Navbar';
import Banner from '../Banner';
import JobCategory from '../JobCategoryList/JobCategory';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
      <>
        <div className="bg-gradient-to-r from-[#7E90FE]/[0.05] to-[#9873FF]/[0.05]">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
        <JobCategory></JobCategory>
        <Jobs></Jobs>
      </>
    );
};

export default Home;