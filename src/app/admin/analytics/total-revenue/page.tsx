import ChartSelect from "@/components/analytics/total-revenue/ChartSelect";
import RevenueBarChart from "@/components/analytics/total-revenue/RevenueBarChart";
import MetricCard from "@/components/MetricCard";
import SecondaryScreenHeader from "@/components/SecondaryScreenHeader";
import { totalRevenueMetricsData } from "@/data/totalRevenueMetricsData";

const TotalRevenuePage = () => {
  return (
    <div className="h-screen flex flex-col gap-3.5 bg-muted text-foreground pt-5 pb-10">
      <SecondaryScreenHeader
        backTo="/admin/analytics"
        currentPageTitle="Total Revenue"
        title="Back to analytics page"
      />

      <section className="flex-1 flex flex-col gap-5 p-7 bg-gray-300/45">
        {/* Metrics Cards */}
        <div className="flex gap-4 overflow-x-auto pb-2 md:p-0">
          {totalRevenueMetricsData.map((item, index) => (
            <MetricCard key={index} {...item} className="w-72" />
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="flex-1 flex flex-col px-5 py-1.5 bg-white rounded-[15px]">
          <section className="flex justify-between items-center p-4">
            <h4 className="text-sm">Revenue Insight</h4>
            <ChartSelect />
          </section>
          <section className="flex-1">
            <RevenueBarChart />
          </section>
        </div>
      </section>
    </div>
  );
};

export default TotalRevenuePage;
