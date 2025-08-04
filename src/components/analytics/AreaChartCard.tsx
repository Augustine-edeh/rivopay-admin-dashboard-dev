import { areaData } from "@/data/analyticsChartData";
import CustomLegend from "@/components/admin/PieChart/CustomLegend";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const AreaChartCard = () => (
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
            <linearGradient id="colorRegularUser" x1="0" y1="0" x2="0" y2="1">
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
);

export default AreaChartCard;
