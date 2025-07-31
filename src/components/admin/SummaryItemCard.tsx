import Image from "next/image";

interface SummaryItemProps {
  image: string;
  title: string;
  amount: number;
  description: string;
}

const SummaryItemCard = ({
  image,
  title,
  amount,
  description,
}: SummaryItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 bg-dashboardAccentGray p-3.5 rounded-[10px]">
      <Image src={image} alt={`${title} icon`} width={40} height={40} />
      <div className="space-y-2 text-muted-foreground">
        <h3 className="font-semibold text-black">{title}</h3>
        <p className="font-bold text-xl">{amount}</p>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default SummaryItemCard;
