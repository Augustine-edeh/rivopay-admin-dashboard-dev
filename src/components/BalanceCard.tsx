import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  percentageChange?: string;
  Icon?: LucideIcon;
  iconBgColor?: string;
  highlightColor?: string;
}

const MetricCard = ({
  title,
  value,
  percentageChange = "0%",
  Icon,
  iconBgColor = "bg-green-300",
  highlightColor = "text-green-600",
}: MetricCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-separatorGray">{title}</CardTitle>
      </CardHeader>

      <CardContent className="font-semibold text-xl">{value}</CardContent>

      <CardFooter className="flex items-center space-x-2">
        <span className={`text-sm font-medium ${highlightColor}`}>
          {percentageChange}
        </span>
        {Icon && (
          <div className={`${iconBgColor} rounded-full p-1`}>
            <Icon size={18} />
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default MetricCard;
