// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "January", Total: 800 },
//   { name: "February", Total: 1600 },
//   { name: "March", Total: 1000 },
//   { name: "April", Total: 2000 },
//   { name: "May", Total: 1500 },
//   { name: "June", Total: 2500 },
//   { name: "June", Total: 2000 },
// ];

// const BarChart2 = () => {
//   return (
//     <div>
//       <div className="chart">
//         <ResponsiveContainer width="100%" aspect={2 / 1}>
//           <AreaChart
//             width={730}
//             height={200}
//             data={data}
//             margin={{ left: 0, bottom: 0 }}
//           >
//             <defs>
//               <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#33d67c" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="#dff7e9" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <Tooltip />
//             <Area
//               type="monotone"
//               dataKey="Total"
//               stroke="#28c76f"
//               fillOpacity={1}
//               fill="url(#total)"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default BarChart2;
import React from "react";
import { BarChart, XAxis, Bar } from "recharts";

const chartData = [
  { x: "Mo", y: 450 },
  { x: "Tu", y: 600 },
  { x: "We", y: 500 },
  { x: "Th", y: 450 },
  { x: "Fr", y: 700 },
  { x: "Sa", y: 550 },
  { x: "Su", y: 600 },
];

const max = Math.max(...chartData.map((item) => item.y));

const CustomBar = (props) => {
  const { fill, x, y, width, height, payload } = props;

  // Dynamically compute the color based on whether the y value is max
  const barColor = payload.y === max ? "#7367f0" : "#eae8fd";

  // Calculate the radius for rounded bars
  const radius = 3;

  return (
    <path
      fill={barColor}
      d={`M${x},${y + height - radius} 
        V${y + radius} 
        Q${x},${y} ${x + radius},${y} 
        H${x + width - radius} 
        Q${x + width},${y} ${x + width},${y + radius} 
        V${y + height - radius} 
        Q${x + width},${y + height} ${x + width - radius},${y + height} 
        H${x + radius} 
        Q${x},${y + height} ${x},${y + height - radius} 
        Z`}
    />
  );
};

function BarChartt() {
  return (
    <div>
      {" "}
      <div>
        <BarChart
          width={300}
          height={170}
          data={chartData}
          barGap={32}
          barCategoryGap={10}
        >
          <XAxis
            tick={{ fontSize: 11 }}
            dataKey="x"
            type="category"
            domain={[4.5, 13.5]}
            ticks={["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]}
            axisLine={false} // Hide x-axis line
            tickLine={false}
          />
          <Bar dataKey="y" shape={<CustomBar />} />
        </BarChart>
      </div>
    </div>
  );
}

export default BarChartt;
