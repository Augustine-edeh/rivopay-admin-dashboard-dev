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
  bgColor?: string;
  type?: "full" | "fixed";
  className?: string;
}

const MetricCard = ({
  title,
  value,
  percentageChange = 0,
  Icon,
  iconColor,
  iconBgColor,
  bgColor,
  type = "full",
  className,
}: MetricCardProps) => {
  const isCustomBg = !!bgColor;

  return (
    <Card
      className={clsx(type === "full" ? "w-full" : "w-72", className)}
      style={{ backgroundColor: bgColor || "#f9f9f9" }}
    >
      <CardHeader>
        <CardTitle
          className={clsx("text-separatorGray", isCustomBg && "text-white")}
        >
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent
        className={clsx("font-semibold text-xl", isCustomBg && "text-white")}
      >
        {value}
      </CardContent>

      <CardFooter className="flex items-center space-x-2">
        <span
          className={clsx("text-sm font-medium", isCustomBg && "text-white")}
        >
          {percentageChange}%
        </span>
        {Icon && (
          <div
            className="rounded-full p-1"
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
