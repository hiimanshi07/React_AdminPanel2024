import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  // No progress bar data needed here
  { name: "PC", earnings: 60, mobile: 20, tablet: 7 }, // Stacked bar data
  { name: "Emails", visits: 50, date: "01-May" }, // Line chart data
  { name: "Social Visitors", visits: 30, date: "05-May" },
];

const CombinationChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <div>
        <BarChart
          width={300}
          height={200}
          data={data.slice(0, 1)} // Use data for stacked bar
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="earnings" stackId="a" fill="#82ca9d" />
          <Bar dataKey="mobile" stackId="a" fill="#ffc107" />
          <Bar dataKey="tablet" stackId="a" fill="#eb4d4b" />
        </BarChart>
        {/* <LineChart
          width={300}
          height={200}
          data={data.slice(1)} // Use data for line charts
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="visits"
            stroke="#3879f6"
            fill="#3879f6"
          />
        </LineChart> */}
      </div>
    </ResponsiveContainer>
  );
};

export default CombinationChart;
