import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectComponent = () => {
  const ranges = ["Last Week", "This Month", "Last Month", "This Year"];

  return (
    <Select>
      <SelectTrigger className="bg-[#9D9C9C47] rounded-3xl px-2.5">
        <SelectValue placeholder="This week" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="sr-only">Date Range</SelectLabel>
          {ranges.map((range) => (
            <SelectItem
              value={range}
              key={range}
              className="data-[highlighted]:bg-[#553A6B33]"
            >
              {range}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SelectComponent;
