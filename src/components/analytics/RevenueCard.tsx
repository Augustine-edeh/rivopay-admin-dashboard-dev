import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { pieData } from "@/data/analyticsChartData";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const RevenueCard = () => (
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
);

export default RevenueCard;
