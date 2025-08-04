"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import MetricCard from "@/components/MetricCard";
import PieChartComponent from "@/components/admin/PieChartComponent";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { dashboardMetricsData } from "@/data/dashboardMetricsData";
import { summaryItems } from "@/data/dashboardSummaryItems";
import SummaryItemCard from "@/components/admin/SummaryItemCard";

const DashboardPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => {
    setTitle("dashboard");
  }, [setTitle]);

  return (
    <section className="flex-1 flex flex-col gap-6 px-6 py-5 bg-white">
      {/* Metric Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardMetricsData.map((item, index) => (
          <MetricCard
            key={index}
            title={item.title}
            value={item.value}
            percentageChange={item.percentageChange}
            Icon={item.Icon}
            iconColor={item.iconColor}
            iconBgColor={item.iconBgColor}
            bgColor={item.bgColor}
          />
        ))}
      </section>

      {/* Revenue Distribution + Summary Cards */}
      <section className="flex flex-col lg:flex-row gap-6">
        {/* Pie Chart Section */}
        <div className="bg-muted rounded-lg w-full lg:w-1/3">
          <div className="flex justify-between p-4">
            <div>
              <h4 className="text-base font-semibold">
                Payment Method Distribution
              </h4>
              <p className="text-sm text-muted-foreground">2025</p>
            </div>
            <Select>
              <SelectTrigger
                className="h-8 rounded-3xl px-2
               bg-[#E0E0E0]"
              >
                <SelectValue placeholder="Sort by:" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 h-60">
            <PieChartComponent />
          </div>
        </div>

        {/* Summary Cards Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 flex-1">
          {summaryItems.map((summaryItem, index) => (
            <SummaryItemCard
              key={index}
              image={summaryItem.image}
              title={summaryItem.title}
              amount={summaryItem.amount}
              description={summaryItem.description}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default DashboardPage;
