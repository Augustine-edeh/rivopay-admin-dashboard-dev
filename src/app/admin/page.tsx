import MetricCard from "@/components/MetricCard";

import { TrendingUp, ArrowDown } from "lucide-react";

export const metricsData = [
  {
    title: "Total Revenue",
    value: "₦0.00",
    percentageChange: 0,
    Icon: TrendingUp,
    iconColor: "#AB74D6",
    iconBgColor: "#C471ED36",
  },
  {
    title: "Active Cards",
    value: "120",
    percentageChange: 5.6,
    Icon: TrendingUp,
    iconColor: "#85B361",
    iconBgColor: "#B1EE8173",
  },
  {
    title: "Inactive Cards",
    value: "20",
    percentageChange: -2.3,
    Icon: ArrowDown,
    iconColor: "#D9AC19",
    iconBgColor: "#F8D64D63",
  },
  {
    title: "Total Users",
    value: "315",
    percentageChange: 8.1,
    Icon: TrendingUp,
    iconColor: "#85B361",
    iconBgColor: "#00AB5733",
  },
];

const AdminPage = () => {
  return (
    <div className="flex-1 flex flex-col bg-white py-12">
      {/* Boxes Section */}
      <section className="flex justify-between gap-4 overflow-x-auto">
        {metricsData.map((item, index) => (
          <MetricCard
            key={index}
            title={item.title}
            value={item.value}
            percentageChange={item.percentageChange}
            Icon={item.Icon}
            iconColor={item.iconColor}
            iconBgColor={item.iconBgColor}
          />
        ))}
      </section>

      {/* Bottom Section */}
      <section className="flex-1 flex bg-blue-400 p-1">
        <div className="bg-red-500">
          {/* Card Section */}
          <div>Card Management Section</div>

          {/* Table Section */}
          <div>Table Section</div>
        </div>

        <div className="bg-red-500">
          {/* Card Section */}
          <div>Pie Chart Section</div>

          {/* Line Chart Section */}
          <div>Line Chart Section</div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
