import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    Earnings: 4000,
    Average: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Earnings: 3000,
    Average: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Earnings: 2000,
    Average: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    Earnings: 2780,
    Average: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Earnings: 1890,
    Average: 4800,
    amt: 2181,
  },
  {
    name: "June",
    Earnings: 2390,
    Average: 3800,
    amt: 2500,
  },
];

const EarningsOverTimeGraph = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Earnings"
        stroke="#8884d8"
        strokeWidth={4}
      />
      <Line
        type="monotone"
        dataKey="Average"
        stroke="#82ca9d"
        strokeWidth={4}
      />
    </LineChart>
  );
};
export default EarningsOverTimeGraph;
