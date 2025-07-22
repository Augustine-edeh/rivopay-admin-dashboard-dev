"use client";

import MetricCard from "@/components/MetricCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp } from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const metricsData = [
  {
    title: "Total Revenue",
    value: "₦0.00",
    percentageChange: 0,
    Icon: TrendingUp,
    iconColor: "#AB74D6",
    iconBgColor: "#C471ED36",
  },
  {
    title: "Total Revenue Top-Up",
    value: "₦0.00",
    percentageChange: 0,
    Icon: TrendingUp,
    iconColor: "#AB74D6",
    iconBgColor: "#F9EBB6",
  },
  {
    title: "Card Sales",
    value: "0",
    percentageChange: 0,
    Icon: TrendingUp,
    iconColor: "#AB74D6",
    iconBgColor: "#D9F4C3",
  },
];

// Mock bar chart data
const revenueData = [
  { name: "Mon", revenue: 400 },
  { name: "Tue", revenue: 300 },
  { name: "Wed", revenue: 600 },
  { name: "Thu", revenue: 200 },
  { name: "Fri", revenue: 500 },
  { name: "Sat", revenue: 100 },
  { name: "Sun", revenue: 700 },
];

const TotalRevenueLayout = () => {
  return (
    <div className="h-screen flex flex-col gap-3.5 bg-muted text-foreground pt-5 pb-10">
      <header>
        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-darkPurple hover:bg-darkPurple/80 text-accent hover:text-accent"
        >
          <ArrowLeft /> Total Revenue
        </Button>
      </header>

      <section className="flex-1 flex flex-col gap-5 p-7 bg-gray-300/45">
        {/* Metrics Cards */}
        <div className="flex gap-4 overflow-x-auto pb-2 md:p-0">
          {metricsData.map((item, index) => (
            <MetricCard
              key={index}
              title={item.title}
              value={item.value}
              percentageChange={item.percentageChange}
              Icon={item.Icon}
              iconColor={item.iconColor}
              iconBgColor={item.iconBgColor}
              className="w-72"
            />
          ))}
        </div>

        {/* Chart Section */}
        <div className="flex-1 flex flex-col px-5 py-1.5 bg-white rounded-[15px]">
          <section className="flex justify-between items-center p-4">
            <h4 className="text-sm">Revenue Insight</h4>

            {/* Sort Select UI */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select>
                <SelectTrigger className="w-[120px] h-8 rounded-3xl bg-[#E0E0E0]">
                  <SelectValue placeholder="Daily" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* Recharts BarChart */}
          <section className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#553A6B" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </section>
        </div>
      </section>
    </div>
  );
};

export default TotalRevenueLayout;
