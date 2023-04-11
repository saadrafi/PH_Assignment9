import { getJobsData } from "./fakedb";

const loadData = async()=>
{
  const loadedData = await fetch("jobs.json");
    const data = await loadedData.json();
    return data;

}

const findJob = (data,id) => {
  
  
    const job = data.find((job) => job.id == id);
    
  return job;
};

const dataLoad = async()=>
{
  const storedData = getJobsData();
    const loadedData =await fetch("/jobs.json");
    const data =await loadedData.json();
    
    
    const savedData =[];
   
    if(storedData.length > 0)
    {
      storedData.map((single)=>
      {
        const job = data.find((job) => job.id == single.id);
        savedData.push(job);
      })
    }

    return savedData;
}


export {
    loadData,
    findJob,
    dataLoad
};