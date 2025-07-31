import { TrendingUp } from "lucide-react";

export const totalRevenueMetricsData = [
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

// Mock Barchart data (Original data which matches design data-specs)
// const revenueData_ = [
//   { name: "Mon", revenue: 190000, fill: "#553a6b" },
//   { name: "Tue", revenue: 160000, fill: "#553A6B" },
//   { name: "Wed", revenue: 75000, fill: "#EADBFF" },
//   { name: "Thu", revenue: 500000, fill: "#553A6B" },
//   { name: "Fri", revenue: 75000, fill: "#EADBFF" },
//   { name: "Sat", revenue: 65000, fill: "#EADBFF" },
//   { name: "Sun", revenue: 90000, fill: "#EADBFF" },
// ];

// Mock Barchart data (manipulated data to align with design visual specs)
export const revenueData = [
  { name: "Mon", revenue: 400000, fill: "#553a6b" },
  { name: "Tue", revenue: 200000, fill: "#553A6B" },
  { name: "Wed", revenue: 600000, fill: "#EADBFF" },
  { name: "Thu", revenue: 800000, fill: "#553A6B" },
  { name: "Fri", revenue: 200000, fill: "#EADBFF" },
  { name: "Sat", revenue: 600000, fill: "#EADBFF" },
  { name: "Sun", revenue: 1000000, fill: "#EADBFF" },
];
