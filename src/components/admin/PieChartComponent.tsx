"use client";

import {
  PieChart as RechartsPieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Pie chart Data
const data = [
  { name: "Card", uv: 500 },
  { name: "QR Code", uv: 100 },
  { name: "Virtual Card", uv: 100 },
];

// Colours Options
const COLOURS = ["#6362CC", "#9D9C9C", "#60646C"];

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Pie
          data={data}
          dataKey="uv"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`slice-${index}`}
              fill={COLOURS[index % COLOURS.length]}
            />
          ))}
        </Pie>
        <Legend align="right" verticalAlign="bottom" layout="vertical" />

        <Tooltip />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
