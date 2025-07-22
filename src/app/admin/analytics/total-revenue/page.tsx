import MetricCard from "@/components/MetricCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp } from "lucide-react";

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

export default function TotalRevenueLayout() {
  return (
    <div className="h-screen flex flex-col gap-3.5 bg-muted text-foreground pt-5 pb-20">
      <header className="bg-red-400">
        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-darkPurple hover:bg-darkPurple/80 text-accent hover:text-accent"
        >
          <ArrowLeft /> Total Revenue
        </Button>
      </header>

      <section className="flex-1 flex flex-col bg-gray-300/45">
        <div className="flex justify-between gap-4 overflow-x-auto pb-2 md:p-0">
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
        </div>
      </section>
    </div>
  );
}
