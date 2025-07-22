"use client";

import PieChartComponent from "@/components/admin/PieChartComponent";
import SelectComponent from "@/components/admin/Select";
import CardsTable from "@/components/CardsTable";
import MetricCard from "@/components/MetricCard";
import TrackCard from "@/components/TrackCard";
import { Button } from "@/components/ui/button";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

import { TrendingUp, ArrowDown } from "lucide-react";
import Image from "next/image";

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
  const { title, setTitle } = usePageTitleStore((state) => state);
  useEffect(() => {
    if (title !== "welcome!") {
      setTitle("welcome!");
    }
  }, [title, setTitle]);

  return (
    <div className="flex-1 flex flex-col gap-4 bg-white py-5">
      {/* MetricCard Section */}
      <section className="flex justify-between gap-4 overflow-x-auto pb-2 md:p-0">
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
      <section className="flex-1 flex gap-1.5 bg-blue-400 -dashboardAccentGray p-1">
        <div className="bg-red-500 w-1/2">
          {/* Card Section */}
          <div>
            <h4>Total 50</h4>

            <div className="flex justify-between items-center bg-pink-500">
              <h3 className="font-semibold">Cards Managemnet</h3>
              <Button className="rounded-3xl bg-textPurple">Add Card</Button>
            </div>

            <div className="flex justify-between gap-3 bg-pink-300">
              <div className="relative w-72 bg-yellow-600">
                <Image src="/card-image.png" fill alt="card" />
              </div>

              <div className="w-10 border border-[#9D9C9C47] rounded-xl" />

              <div className="flex flex-col flex-1 gap-2">
                <TrackCard
                  title="Card Activations"
                  value={123}
                  percentageChange={12}
                  Icon={TrendingUp}
                  iconColor="#33B952"
                  imageSrc="/semi-circle_gray.png"
                  borderColor="border-dashboardCardGray"
                  bgColor="bg-white"
                />
                <TrackCard
                  title="Total Blocked Card"
                  value={14}
                  percentageChange="4%"
                  Icon={TrendingUp}
                  iconColor="#FF0000"
                  imageSrc="/semi-circle_green.png"
                  borderColor="border-[#B1EE81]"
                  bgColor="bg-dashboardAccentGreen"
                />
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div>
            <CardsTable />
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-orange-500 p-1 w-1/2">
          {/* Card Section */}
          <div className="flex flex-col bg-blue-700 p-2 h-1/2">
            <div className="bg-yellow-200 w-fit px-1 text-center">
              <h3 className="font-medium">Payment Method Distribution</h3>
              <p className="font-normal">Januaty - December 2024</p>
            </div>

            <div className="flex-1 bg-pink-400">
              <PieChartComponent />
            </div>
          </div>

          {/* Line Chart Section */}
          <div className="flex flex-col bg-green-300 h-1/2">
            <div className="flex justify-between items-center">
              <p>Revenue Generated</p>
              <SelectComponent />
            </div>

            <div className="flex-1 bg-violet-500/40"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
