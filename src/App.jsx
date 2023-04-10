import Banner from "./components/Banner";
import JobCategory from "./components/JobCategoryList/JobCategory";
import Jobs from "./components/Jobs/Jobs";
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
    <div className="bg-gradient-to-r from-[#7E90FE]/[0.05] to-[#9873FF]/[0.05]">
      <Navbar></Navbar>
      <Banner></Banner>
      
    </div>
    
    </>
  );
}

export default App;
