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
}

const MetricCard = ({
  title,
  value,
  percentageChange = 0,
  Icon,
  iconColor,
  iconBgColor,
}: MetricCardProps) => {
  return (
    <Card className="w-full pb-1.5 bg-dashboardAccentGray">
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
