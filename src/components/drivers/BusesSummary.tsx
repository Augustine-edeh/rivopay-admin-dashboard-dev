import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil } from "lucide-react";

const BusesSummary = () => {
  const summary = [
    {
      title: "Total Buses",
      count: 0,
      note: "Full fleet size for operations.",
    },
    {
      title: "Active Buses",
      count: 0,
      note: "Buses currently in service.",
    },
    {
      title: "In Maintenance",
      count: 0,
      note: "Buses in repair or check up.",
    },
  ];

  return (
    <div className="bg-dashboardAccentGray rounded-[10px] px-5 py-4 space-y-4">
      {/* Edit button */}
      <div className="flex justify-end">
        <Button className="bg-dashboardLightGrayBG rounded-full text-black hover:text-white">
          Edit <Pencil className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {summary.map((card, i) => (
          <Card key={i} className="p-4">
            <p className="text-sm font-medium">{card.title}</p>
            <p className="text-2xl font-bold">{card.count}</p>
            <p className="text-xs mt-1 text-muted-foreground">{card.note}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BusesSummary;
