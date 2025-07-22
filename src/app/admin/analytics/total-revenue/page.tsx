import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TotalRevenueLayout() {
  return (
    <div className="h-screen flex flex-col bg-muted text-foreground pt-5 pb-20">
      <header className="bg-red-400">
        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-darkPurple hover:bg-darkPurple/80 text-accent hover:text-accent"
        >
          <ArrowLeft /> Total Revenue
        </Button>
      </header>
    </div>
  );
}
