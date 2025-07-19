import { Badge } from "../ui/badge";
import { Separator } from "@/components/ui/separator";

const RecentHistory = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center mb-4 text-muted-foreground">
        <h3> Recent History</h3>
        <Badge className="bg-[#DFDFDF] text-inherit px-4 py-1 rounded-full">
          More
        </Badge>
      </div>

      <div className="flex items-center">
        <div className="h-2.5 w-32 rounded-full bg-[#00AB57]" />
        <Separator className="flex-1 h-0.5 bg-[#D9D9D9]" />
      </div>
    </section>
  );
};

export default RecentHistory;
