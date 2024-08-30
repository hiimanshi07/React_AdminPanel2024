import { Box } from "@chakra-ui/react";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 800 },
  { name: "February", Total: 1600 },
  { name: "March", Total: 1000 },
  { name: "April", Total: 2000 },
  { name: "May", Total: 1500 },
  { name: "June", Total: 2500 },
  { name: "June", Total: 2000 },
];
function LineChart() {
  return (
    <div>
      {" "}
      <Box>
        {/* <div className="title">Last 6 Months (Revenue)</div> */}
        {/* <ResponsiveContainer width="100%" aspect={2 / 1}> */}
        <AreaChart
          width={272}
          height={130}
          data={data}
          margin={{ left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#33d67c" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#dff7e9" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <XAxis dataKey="name" stroke="gray" /> */}
          {/* <CartesianGrid strokeDasharray="3 3" className="chartGrid" /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#28c76f"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
        {/* </ResponsiveContainer> */}
      </Box>
    </div>
  );
}

export default LineChart;
