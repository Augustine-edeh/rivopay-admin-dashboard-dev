"use client";

import { Button } from "@/components/ui/button";

export type QuickActionCardProps = {
  title: string;
  description: string;
  variant?: "default" | "outline" | "destructive";
  buttonText: string;
  buttonTextColor: string;
  onClick?: () => void;
};

const QuickActionCards = ({ cards }: { cards: QuickActionCardProps[] }) => {
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
            variant={"outline"}
            size="sm"
            className="w-fit rounded-[3px] mt-auto"
            onClick={card.onClick}
            style={{ color: card.buttonTextColor }}
          >
            {card.buttonText}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default QuickActionCards;
