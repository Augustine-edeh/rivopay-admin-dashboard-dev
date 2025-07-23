"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
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
  Legend,
} from "recharts";

const AnalyticsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("analytics"), [setTitle]);

  const pieData = [
    { name: "Card", value: 300, color: "#34A853" },
    { name: "QR", value: 200, color: "#FBBC05" },
    { name: "Cash", value: 100, color: "#4285F4" },
    { name: "Other", value: 50, color: "#EA4335" },
  ];

  const barData = [
    { name: "Mon", card: 90, qr: 30 },
    { name: "Tue", card: 50, qr: 45 },
    { name: "Wed", card: 70, qr: 25 },
    { name: "Thu", card: 60, qr: 30 },
    { name: "Fri", card: 100, qr: 60 },
    { name: "Sat", card: 40, qr: 30 },
    { name: "Sun", card: 45, qr: 35 },
  ];

  const areaData = Array.from({ length: 40 }, (_, i) => ({
    date: `Jun ${i + 1}`,
    newUser: Math.random() * 100,
    regularUser: Math.random() * 120,
  }));

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Revenue + Bar section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart Card */}
        <div className="bg-white rounded-xl p-5 shadow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-sm font-medium">Total Revenue</h4>
              <p className="text-xs text-muted-foreground">Daily - Yearly</p>
            </div>
            <Button size="sm" className="rounded-full px-4 py-1.5 text-xs">
              More Activities →
            </Button>
          </div>

          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
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
        <div className="bg-white rounded-xl p-5 shadow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-sm font-medium">
                Payment Method Distribution Daily
              </h4>
              <p className="text-xs text-muted-foreground">2025</p>
            </div>
            <Select>
              <SelectTrigger className="w-[100px] h-8 rounded-full text-sm bg-[#F2F2F2]">
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
                barCategoryGap="10%" // spacing between tick groups
                barGap={0} // no gap between bars of same tick
              >
                <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="card" fill="#6F2DA8" barSize={10} />
                <Bar dataKey="qr" fill="#C1C1C1" barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Area Chart (User Growth Rate) */}
      <section className="bg-white rounded-xl p-5 shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-sm font-medium">User Growth Rate</h4>
            <p className="text-xs text-muted-foreground">
              Showing User Growth Rate for the last 3 months
            </p>
          </div>
          <Select>
            <SelectTrigger className="w-[100px] h-8 rounded-full text-sm bg-[#F2F2F2]">
              <SelectValue placeholder="Daily" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="newUser"
                stroke="#FF6B6B"
                fill="url(#colorNew)"
              />
              <Area
                type="monotone"
                dataKey="regularUser"
                stroke="#4CAF50"
                fill="url(#colorReg)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;
