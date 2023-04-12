import React from "react";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import Page from "../Layout/Page";
const data = [
  {
    name: "Assignment 1",
    mark: 60,
  },
  {
    name: "Assignment 2",
    mark: 29,
  },
  {
    name: "Assignment 3",
    mark: 35,
  },
  {
    name: "Assignment 4",
    mark: 60,
  },
  {
    name: "Assignment 5",
    mark: 41,
  },
  {
    name: "Assignment 6",
    mark: 60,
  },
  {
    name: "Assignment 7",
    mark: 60,
  },
  {
    name: "Assignment 8",
    mark: 60,
  },
];

const Statistics = () => {
  return (
    <>
    <Page>Marks</Page>
    <AreaChart
      width={1200}
      height={500}
      data={data}
      margin={{
        top: 100,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    </>
  );
    
};

export default Statistics;
