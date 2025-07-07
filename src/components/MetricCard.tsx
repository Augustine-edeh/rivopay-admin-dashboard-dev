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
  percentageChange: number;
  Icon?: LucideIcon;
  iconColor: string;
  iconBgColor?: string;
  highlightColor?: string;
}

const MetricCard = ({
  title,
  value,
  percentageChange = 0,
  Icon,
  iconColor,
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
          {percentageChange}%
        </span>
        {Icon && (
          <div className={`bg-${iconBgColor} rounded-full p-1`}>
            <Icon size={18} color={iconColor} />
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default MetricCard;
