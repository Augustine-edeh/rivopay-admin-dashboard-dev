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

const TotalRevenueLayout = () => {
  return (
    <div className="h-screen flex flex-col gap-3.5 bg-muted text-foreground pt-5 pb-10">
      <header className="bg-red-400">
        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-darkPurple hover:bg-darkPurple/80 text-accent hover:text-accent"
        >
          <ArrowLeft /> Total Revenue
        </Button>
      </header>

      <section className="flex-1 flex flex-col gap-5 p-7 bg-gray-300/45">
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

        <div className="flex-1 flex flex-col px-5 py-1.5 bg-white rounded-[15px]">
          <section className="flex justify-between items-center p-4">
            <h4 className="text-sm">Revenue Insight</h4>

            {/* SortBy/Select UI */}
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

          <section className="flex-1 bg-green-300">BarChart Section</section>
        </div>
      </section>
    </div>
  );
};
export default TotalRevenueLayout;
