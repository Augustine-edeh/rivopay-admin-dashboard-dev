"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

import BusesSummary from "@/components/drivers/BusesSummary";
import DriverDetailsCard from "@/components/drivers/DriverDetailsCard";
import DriversTable from "@/components/drivers/DriversTable";

const DriversPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("drivers"), [setTitle]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 py-6">
      <div className="space-y-6">
        <BusesSummary />
        <DriversTable />
      </div>
      <DriverDetailsCard />
    </div>
  );
};

export default DriversPage;
