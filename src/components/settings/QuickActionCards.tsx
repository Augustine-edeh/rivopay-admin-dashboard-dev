"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export type QuickActionCardProps = {
  title: string;
  description: string;
  variant?: "default" | "outline" | "destructive";
  buttonText: string;
  buttonTextColor?: string;
  href?: string;
  onClick?: () => void; // optional explicit handler
};

const QuickActionCards = ({ cards }: { cards: QuickActionCardProps[] }) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 bg-[#FCFAFA] shadow-sm flex flex-col gap-3"
        >
          <div className="text-sm font-medium text-textPurple">
            {card.title}
          </div>
          <p className="text-xs text-muted-foreground">{card.description}</p>
          <Button
            variant={card.variant || "outline"}
            size="sm"
            className="w-fit rounded-[3px] mt-auto"
            style={{ color: card.buttonTextColor }}
            onClick={() => {
              if (card.onClick) {
                card.onClick(); //custom click logic
              } else if (card.href) {
                router.push(card.href); // fallback to navigation
              }
            }}
          >
            {card.buttonText}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default QuickActionCards;
