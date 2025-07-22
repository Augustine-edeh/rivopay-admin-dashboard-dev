import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface MetricCardProps {
  title: string;
  value: string;
  percentageChange: number;
  Icon?: LucideIcon;
  iconColor: string;
  iconBgColor?: string;
  type?: "full" | "fixed";
  className?: string; // Optional className for additional styling
}

const MetricCard = ({
  title,
  value,
  percentageChange = 0,
  Icon,
  iconColor,
  iconBgColor,
  type = "full", // default to "full"
  className,
}: MetricCardProps) => {
  return (
    <Card
      className={clsx(
        type === "full" ? "w-full" : "w-72",
        "pb-1.5 bg-dashboardAccentGray",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="text-separatorGray">{title}</CardTitle>
      </CardHeader>

      <CardContent className="font-semibold text-xl">{value}</CardContent>

      <CardFooter className="flex items-center space-x-2">
        <span className="text-sm font-medium">{percentageChange}%</span>
        {Icon && (
          <div
            className={clsx("rounded-full p-1")}
            style={{ backgroundColor: iconBgColor }}
          >
            <Icon size={18} color={iconColor} />
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default MetricCard;
