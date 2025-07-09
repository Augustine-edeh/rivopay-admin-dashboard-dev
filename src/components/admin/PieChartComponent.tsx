"use client";

import {
  PieChart as RechartsPieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

// Sample Data
const data = [
  { name: "Page A", uv: 590 },
  { name: "Page B", uv: 860 },
  { name: "Page C", uv: 420 },
];

// Optional: Custom Colors
const COLORS = ["#7B48EF", "#4ADE80", "#FACC15"];

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
            <Cell key={`slice-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
