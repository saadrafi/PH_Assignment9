import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layout/Home";
import Page from "./components/Layout/Page";
import JobDetails from "./components/Jobs/JobDetails";
import { dataLoad, findJob } from "./utilitis/dataLoader";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/stat",
        element: <Page>Stat</Page>,
      },
      {
        path: "job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          let job;
          await fetch("/jobs.json")
            .then((res) => res.json())
            .then((data) => {
              job =findJob(data, params.jobId);
            });
            return {job};
        },
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader:dataLoad
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
