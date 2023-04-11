import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () =>
  toast.error("You have already applied for this job!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
const addToDb = (rec) => {
  let jobsData = getJobsData();

  if (jobsData.length > 0) {
    const exist = jobsData.find((job) => job.id == rec.id);
    if (exist) {
      notify();
    } else {
      let newData = {};
      newData["id"] = rec.id;
      newData["title"] = rec.title;
      jobsData = [...jobsData, newData];
    }
  } else {
    let newData = {};
    newData["id"] = rec.id;
    newData["title"] = rec.title;
    newData["company"] = rec.company_name;
    jobsData = [...jobsData, newData];
  }
  localStorage.setItem("applied-jobs", JSON.stringify(jobsData));
};

const removeFromDb = (id) => {
  const shoppingCart = getJobsData();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("applied-jobs", JSON.stringify(shoppingCart));
  }
};

const getJobsData = () => {
  let jobsData = [];

  //get the shopping cart from local storage
  const storedData = localStorage.getItem("applied-jobs");
  if (storedData) {
    jobsData = JSON.parse(storedData);
  }
  return jobsData;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("applied-jobs");
};

export { addToDb, removeFromDb, getJobsData, deleteShoppingCart };
