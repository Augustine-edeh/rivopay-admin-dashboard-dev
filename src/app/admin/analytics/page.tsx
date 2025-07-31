"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import CustomLegend from "@/components/admin/PieChart/CustomLegend";
import { pieData, barData, areaData } from "@/data/analyticsChartData";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const AnalyticsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("analytics"), [setTitle]);

  return (
    <div className="flex flex-col gap-6 px-5 py-2">
      {/* Revenue + Bar section */}
      <section className="grid grid-cols-1 md:grid-cols-[25%_1fr] gap-6">
        {/* Pie Chart Card */}
        <div className="bg-dashboardAccentGray rounded-xl shadow">
          <div className="flex justify-between items-center border-b p-4 mb-1.5">
            <h4 className="text-sm font-medium">Total Revenue</h4>
            <Link
              href="/admin/analytics/total-revenue"
              className="flex items-center underline text-[#00AB57] text-xs"
            >
              More Activities <ChevronRight size={15} />
            </Link>
          </div>

          <div className="h-56">
            <div className="flex justify-between items-center px-4">
              <p className="text-sm text-muted-foreground">Daily - Yearly</p>
              <Select>
                <SelectTrigger className="h-fit py-0 px-3 rounded-[5px] bg-[#FCFCFC] text-sm">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-[2.7px] bg-green-500" />
                    <SelectValue placeholder="Daily" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <ResponsiveContainer width="100%" height="100%" className="pb-5">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart Card */}
        <div className="flex flex-col gap-3.5 bg-dashboardAccentGray rounded-xl p-5 pb-0 shadow">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div>
              <h4 className="text-sm font-medium">
                Payment Method Distribution Daily
              </h4>
              <p className="text-xs text-muted-foreground">2025</p>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1">
                <span className="size-3 bg-[#6746A3] rounded-xs"></span>
                <span>Card</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="size-3 bg-[#9D9C9C] rounded-xs"></span>
                <span>QR</span>
              </div>
            </div>

            <Select>
              <SelectTrigger className="h-8 px-5 rounded-full text-sm bg-[#E0E0E0]">
                <SelectValue placeholder="Daily" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                layout="vertical"
                barCategoryGap="10%"
                barGap={0}
              >
                <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" interval={0} />
                <Tooltip />
                <Bar dataKey="card" fill="#6F2DA8" barSize={10} />
                <Bar dataKey="qr" fill="#C1C1C1" barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Area Chart Section */}
      <section className="bg-dashboardAccentGray rounded-xl shadow flex flex-col h-[330px]">
        <p className="flex justify-between items-center border-b px-4 py-1.5 mb-1.5 text-muted-foreground">
          User Insight
        </p>

        <div className="flex justify-between items-start px-5 mb-4">
          <div>
            <h4 className="text-sm font-medium">User Growth Rate</h4>
            <p className="text-xs text-muted-foreground">
              Showing User Growth Rate for the last 3 months
            </p>
          </div>
          <Select>
            <SelectTrigger className="h-8 px-4 rounded-full text-sm bg-[#E0E0E0]">
              <SelectValue placeholder="Daily" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorNewUser" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E76E50" stopOpacity={1} />
                  <stop offset="95%" stopColor="#E76E50" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient
                  id="colorRegularUser"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#2A9D90" stopOpacity={1} />
                  <stop offset="95%" stopColor="#2A9D90" stopOpacity={0.2} />
                </linearGradient>
              </defs>

              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <CustomLegend />
              <Area
                type="monotone"
                dataKey="newUser"
                stroke="#E76E50"
                fill="url(#colorNewUser)"
                stackId="1"
              />
              <Area
                type="monotone"
                dataKey="regularUser"
                stroke="#2A9D90"
                fill="url(#colorRegularUser)"
                stackId="1"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;
