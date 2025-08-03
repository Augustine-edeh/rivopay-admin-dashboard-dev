import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const TransactionsHeader = () => {
  return (
    <section className="flex justify-between items-center gap-5">
      <div className="relative hidden md:flex items-center w-full max-w-xs">
        <Input
          className="rounded-[45px] pl-14 bg-[#B3B3B35C] hover:bg-dashboardCardGray"
          id="search"
          placeholder="Search by reference..."
        />
        <Label htmlFor="search" className="absolute left-3.5 rounded-full">
          <Search className="text-separatorGray" />
        </Label>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Sort by:</span>
        <Select>
          <SelectTrigger className="w-[120px] h-8 rounded-3xl">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="reference">Reference</SelectItem>
            <SelectItem value="payment">Payment</SelectItem>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="status">Status</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default TransactionsHeader;
