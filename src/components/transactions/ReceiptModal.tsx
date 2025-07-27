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
        className="flex flex-col justify-between w-[360px] h-[400px] px-0 rounded-t-[11px] rounded-b-none py-6 overflow-clip border-none shadow-none"
      >
        <div className="h-1/2 text-center">
          <p className="text-sm text-muted-foreground">
            Bola Tinunbu Fawaz made a transaction of
          </p>
          <h2 className="text-2xl font-bold my-2">{transaction.amount}</h2>
          <p className="text-sm text-muted-foreground">
            Route of Sango–Eleyele
          </p>
        </div>

        {/* receipt dash-divider */}
        <div className="relative flex items-center">
          <div className="absolute -left-5 size-8 rounded-full bg-black/50" />
          <Separator className="flex-1 mx-7 my-4 bg-[#595959]/70 border border-dashed" />
          <div className="absolute -right-5 size-8 rounded-full bg-black/50" />
        </div>

        {/* cut-out mark at the bottom of receipt */}
        <div className="absolute -bottom-5 flex items-center">
          <div className="size-9 rounded-full bg-black/50" />
          <div className="size-9 rounded-full bg-black/50" />
          <div className="size-9 rounded-full bg-black/50" />
          <div className="size-9 rounded-full bg-black/50" />
          <div className="size-9 rounded-full bg-black/50" />
          <div className="size-9 rounded-full bg-black/50" />
          <div className="size-9 rounded-full bg-black/50" />
          <div className="size-9 rounded-full bg-black/50" />
          <div className="size-9 rounded-full bg-black/50" />
          <div className="size-9 rounded-full bg-black/50" />
        </div>

        <div className="h-1/2 px-6">
          <div className="flex items-center gap-3 rounded-xl px-3 py-2 bg-dashboardAccentGray">
            <div className="grid place-content-center size-12 bg-[#D9D9D9] text-xs px- rounded-[12px]">
              rivo
            </div>
            <div>
              <p className="font-bold">My Wallet card</p>
              <p className="text-xs text-muted-foreground">
                Reference: {transaction.ref}
              </p>
            </div>
            <p className="ml-auto text-xs font-semibold text-muted-foreground">
              {transaction.time}
            </p>
          </div>

          <p className="text-center text-xs text-green-600 mt-4">
            on the {transaction.date}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReceiptModal;
