"use client";

import { revenueData } from "@/data/totalRevenueMetricsData";
import {
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const RevenueBarChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={revenueData}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name" />
      <YAxis
        domain={[0, 1000000]}
        ticks={[10000, 50000, 100000, 200000, 500000, 1000000]}
        tickMargin={16}
        axisLine={false}
        tickFormatter={(value) => {
          if (value === 1000000) return "1M";
          if (value >= 1000) return `${value / 1000}k`;
          return value;
        }}
      />
      <Tooltip />
      <Bar dataKey="revenue">
        {revenueData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default RevenueBarChart;
