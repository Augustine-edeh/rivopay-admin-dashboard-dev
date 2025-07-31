"use client";
import type { LegendPayload } from "recharts";

const formatLabel = (label: string) =>
  label
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());

const CustomLegend = ({ payload }: { payload?: readonly LegendPayload[] }) => {
  return (
    <ul className="flex justify-center gap-4 text-xs">
      {payload?.map((entry, index) => (
        <li key={`item-${index}`} className="flex items-center gap-2">
          <span
            className="inline-block"
            style={{
              width: 15,
              height: 15,
              backgroundColor: entry.color,
              borderRadius: 1.8,
            }}
          />
          <span>{formatLabel(entry.value?.toString() || "")}</span>
        </li>
      ))}
    </ul>
  );
};

export default CustomLegend;
