import { LucideIcon } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

interface TrackCardProps {
  title: string;
  value: number | string;
  percentageChange?: number | string;
  Icon?: LucideIcon;
  iconColor?: string;
  imageSrc: string;
  borderColor: string;
  bgColor?: string; // Example: 'bg-dashboardCardPurple' (defined via Tailwind using CSS variable)
}

const TrackCard = ({
  title,
  value,
  percentageChange,
  Icon,
  iconColor,
  imageSrc,
  borderColor,
  bgColor,
}: TrackCardProps) => {
  return (
    <div className={clsx("relative overflow-hidden rounded py-4", bgColor)}>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center mt-1">
          <h6
            className={clsx(
              "border-l-8 pl-2 text-sm font-medium text-muted-foreground",
              borderColor
            )}
          >
            {title}
          </h6>

          {percentageChange !== undefined && Icon && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Icon color={iconColor} size={16} />
              <span>{percentageChange}</span>
            </div>
          )}
        </div>

        <p className="text-2xl font-semibold px-2">{value}</p>

        <Image
          src={imageSrc}
          width={49}
          height={49}
          alt="Background icon"
          className="absolute -bottom-3 -right-3 object-cover"
        />
      </div>
    </div>
  );
};

export default TrackCard;
