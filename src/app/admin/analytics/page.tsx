"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import RevenueCard from "@/components/analytics/RevenueCard";
import BarChartCard from "@/components/analytics/BarChartCard";
import AreaChartCard from "@/components/analytics/AreaChartCard";

const AnalyticsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("analytics"), [setTitle]);

  return (
    <div className="flex flex-col gap-6 px-5 py-2">
      <section className="grid grid-cols-1 md:grid-cols-[25%_1fr] gap-6">
        <RevenueCard />
        <BarChartCard />
      </section>
      <AreaChartCard />
    </div>
  );
};

export default AnalyticsPage;
