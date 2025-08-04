import { barData } from "@/data/analyticsChartData";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const BarChartCard = () => (
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
          <span className="size-3 bg-[#6746A3] rounded-xs" />
          <span>Card</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="size-3 bg-[#9D9C9C] rounded-xs" />
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
);

export default BarChartCard;
