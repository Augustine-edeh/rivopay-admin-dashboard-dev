import MetricCard from "@/components/MetricCard";
import { Button } from "@/components/ui/button";

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

            <div className="flex gap-3 bg-pink-300">
              <div className="relative w-60 h-32 bg-yellow-600">
                <Image src="/card-image.png" fill alt="card" />
              </div>

              <div className="w-10 border border-[#9D9C9C47] rounded-xl"></div>

              <div className="flex flex-col gap-2">
                {/* Card 1 */}
                <div className="relative bg-white overflow-hidde n rounded">
                  <div className="flex flex-col gap-5">
                    <div className="flex mt-3">
                      <h6 className="border-l-3 border-dashboardCardGray pl-1">
                        Total Card Registared
                      </h6>

                      <div className="flex items-center">
                        <TrendingUp color="green" size={16} />
                        <span>{12}</span>
                      </div>
                    </div>

                    <p>{123}</p>

                    <Image
                      src="/semi-circle.png"
                      width={49}
                      height={49}
                      alt="svg"
                      className="absolute -bottom-3 -right-3 object-cover"
                    />
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative bg-dashboardAccentGreen overflow-hidde n rounded">
                  <div className="flex flex-col gap-5">
                    <div className="flex mt-3">
                      <h6 className="border-l-3 border-dashboardLightGreen pl-1">
                        Total Blocked Card
                      </h6>

                      <div className="flex items-center">
                        <TrendingUp color="red" size={16} />
                        <span>{12}</span>
                      </div>
                    </div>

                    <p>{14}</p>

                    <Image
                      src="/semi-circle.png"
                      width={49}
                      height={49}
                      alt="svg"
                      className="absolute -bottom-3 -right-3 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div>Table Section</div>
        </div>

        <div className="bg-orange-500 w-1/2">
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
