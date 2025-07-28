"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import MetricCard from "@/components/MetricCard";
// import TrackCard from "@/components/TrackCard";
import PieChartComponent from "@/components/admin/PieChartComponent";
import { ArrowDown, TrendingUp } from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// import SelectComponent from "@/components/admin/Select";
import Image from "next/image";

// import { metricsData } from "@/data/dashboardMetric";

const metricsData = [
  {
    title: "Total Revenue",
    value: "₦0.00",
    percentageChange: 0,
    Icon: TrendingUp,
    iconColor: "#00AB57",
    iconBgColor: "#D9F4C3",
    bgColor: "#553A6B",
  },
  {
    title: "Daily Revenue",
    value: "120",
    percentageChange: 5.6,
    Icon: TrendingUp,
    iconColor: "#85B361",
    iconBgColor: "#B1EE8173",
  },
  {
    title: "Weekly Revenue",
    value: "20",
    percentageChange: -2.3,
    Icon: ArrowDown,
    iconColor: "#D9AC19",
    iconBgColor: "#F8D64D63",
  },
  {
    title: "Monthly Revenue",
    value: "315",
    percentageChange: 8.1,
    Icon: TrendingUp,
    iconColor: "#85B361",
    iconBgColor: "#00AB5733",
  },
];

const summaryItems = [
  {
    title: "Total Users",
    amount: 0,
    description: "Users currently",
    image: "/icons/total-users.svg",
  },
  {
    title: "Total Merchants",
    amount: 0,
    description: "Merchants in service",
    image: "/icons/total-users.svg",
  },
  {
    title: "Card Holders",
    amount: 0,
    description: "Total card holders",
    image: "/icons/total-taps.svg",
  },
  {
    title: "Daily Taps",
    amount: 0,
    description: "Total number of Taps",
    image: "/icons/total-taps.svg",
  },
  {
    title: "Active Drivers",
    amount: 0,
    description: "Drivers currently in service",
    image: "/icons/total-drivers.svg",
  },

  {
    title: "Total Admins",
    amount: 0,
    description: "Active administrators",
    image: "/icons/total-admins.svg",
  },
];

const DashboardPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => {
    setTitle("dashboard");
  }, [setTitle]);

  return (
    <section className="flex-1 flex flex-col gap-6 px-6 py-5 bg-white">
      {/* Metric Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricsData.map((item, index) => (
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
        {/* NOTE: consider sm:grid-cols-3 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 flex-1">
          {summaryItems.map((summaryItem, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 bg-dashboardAccentGray p-3.5 -[#FCFCFC] rounded-[10px]"
            >
              <Image
                src={summaryItem.image}
                alt="icon"
                width={40}
                height={40}
              />

              <div className="space-y-2 text-muted-foreground">
                <h3 className="font-semibold text-black">
                  {summaryItem.title}
                </h3>
                <p className="font-bold text-xl">{summaryItem.amount}</p>
                <p className="text-xs">{summaryItem.description}</p>
              </div>
            </div>
          ))}

          {/* <div className="flex items-center gap-3.5 bg-[#FCFCFC] rounded-[10px]">
            <Image src={`/summary1.svg`} alt="icon" width={40} height={40} />

            <div className="space-y-2.5">
              <h3>{`Title`}</h3>
              <p>{`0`}</p>
              <p>{`description`}</p>
            </div>
          </div> */}

          {/* <TrackCard title="Total Users" value={0} />
          <TrackCard title="Total Merchants" value={0} />
          <TrackCard title="Card Holders" value={0} />
          <TrackCard title="DailyTaps" value={0} />
          <TrackCard title="Active Drivers" value={0} />
          <TrackCard title="Total Admins" value={0} /> */}
        </div>
      </section>
    </section>
  );
};

export default DashboardPage;
