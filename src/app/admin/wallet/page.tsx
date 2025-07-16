"use client";

import { useEffect } from "react";

import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import SelectComponent from "@/components/admin/Select";
import PieChartComponent from "@/components/admin/PieChartComponent";
import CardsTable from "@/components/CardsTable";
import { TrendingUp } from "lucide-react";
import TrackCard from "@/components/TrackCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MetricCard from "@/components/MetricCard";

const WalletPage = () => {
  const walletMetricsData = [
    {
      title: "Main Balance",
      value: "₦0.00",
      percentageChange: 0,
      Icon: TrendingUp,
      iconColor: "#AB74D6",
      iconBgColor: "#C471ED36",
    },
    {
      title: "Total Income",
      value: "₦0.00",
      percentageChange: 0,
      Icon: TrendingUp,
      iconColor: "#85B361",
      iconBgColor: "#B1EE8173",
    },
    {
      title: "Total Spending",
      value: "₦0.00",
      percentageChange: 0,
      Icon: TrendingUp,
      iconColor: "#D9AC19",
      iconBgColor: "#F8D64D63",
    },
  ];

  const setTitle = usePageTitleStore((state) => state.setTitle);
  useEffect(() => setTitle("wallet"), [setTitle]);

  return (
    <div className="flex-1 flex flex-col gap-4 bg-white py-5">
      {/* MetricCard Section */}
      <section className="flex gap-4 overflow-x-auto pb-2 md:p-0">
        {walletMetricsData.map((item, index) => (
          <MetricCard
            key={index}
            title={item.title}
            value={item.value}
            percentageChange={item.percentageChange}
            Icon={item.Icon}
            iconColor={item.iconColor}
            iconBgColor={item.iconBgColor}
            type="fixed"
          />
        ))}
      </section>

      {/* Bottom Section */}
    </div>
  );
};

export default WalletPage;
