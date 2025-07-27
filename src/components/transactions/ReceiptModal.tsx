"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ReceiptModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transaction: {
    ref: string;
    method: string;
    date: string;
    time: string;
    amount: string;
    status: string;
  } | null;
  showCloseButton?: boolean;
}

const ReceiptModal = ({
  open,
  onOpenChange,
  transaction,
  showCloseButton,
}: ReceiptModalProps) => {
  if (!transaction) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={showCloseButton}
        className="w-[360px] rounded-xl py-6"
      >
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Bola Kuti Fawaz made a transaction of
          </p>
          <h2 className="text-2xl font-bold my-2">{transaction.amount}</h2>
          <p className="text-sm text-muted-foreground">
            Route of Sango–Eleyele
          </p>
        </div>

        <Separator className="my-4 border-dashed" />

        <div className="flex items-center gap-3 border rounded-xl px-3 py-2">
          <div className="bg-black text-white text-xs px-2 py-1 rounded-full">
            rivo
          </div>
          <div className="text-sm">
            <p className="font-medium">My Wallet card</p>
            <p className="text-xs text-muted-foreground">
              Reference: {transaction.ref}
            </p>
          </div>
          <p className="ml-auto text-xs text-muted-foreground">
            {transaction.time}
          </p>
        </div>

        <p className="text-center text-xs text-green-600 mt-4">
          on the {transaction.date}
        </p>

        <Button
          className="mt-6 w-full rounded-full bg-[#DFDFDF] text-inherit hover:bg-textPurple hover:text-white h-8"
          onClick={() => onOpenChange(false)}
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ReceiptModal;
