import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const ChartSelect = () => (
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
);

export default ChartSelect;
