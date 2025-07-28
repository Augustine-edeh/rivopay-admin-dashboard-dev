"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TransactionItem } from "../wallet/History";
import Image from "next/image";

const MoreTransactionsDialog = () => {
  const recentTransactions = [
    {
      title: "Transfer",
      subtitle: "Sango–Dugbe",
      amount: "₦200.00",
      status: "Confirmed",
    },
    {
      title: "Transfer",
      subtitle: "Sango–Dugbe",
      amount: "₦200.00",
      status: "Confirmed",
    },
    {
      title: "Transfer",
      subtitle: "Sango–Dugbe",
      amount: "₦200.00",
      status: "Confirmed",
    },
    {
      title: "Transfer",
      subtitle: "Sango–Dugbe",
      amount: "₦200.00",
      status: "Confirmed",
    },
    {
      title: "Transfer",
      subtitle: "Sango–Dugbe",
      amount: "₦200.00",
      status: "Confirmed",
    },
    {
      title: "Transfer",
      subtitle: "Sango–Dugbe",
      amount: "₦200.00",
      status: "Confirmed",
    },
    {
      title: "Transfer",
      subtitle: "Sango–Dugbe",
      amount: "₦200.00",
      status: "Confirmed",
    },
    {
      title: "Transfer",
      subtitle: "Sango–Dugbe",
      amount: "₦200.00",
      status: "Confirmed",
    },
    {
      title: "Transfer",
      subtitle: "Sango–Dugbe",
      amount: "₦200.00",
      status: "Confirmed",
    },
    {
      title: "Transfer",
      subtitle: "Sango–Dugbe",
      amount: "₦200.00",
      status: "Confirmed",
    },
    {
      title: "Transfer",
      subtitle: "Sango–Dugbe",
      amount: "₦200.00",
      status: "Confirmed",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#DFDFDF] hover:bg-textPurple text-inherit hover:text-white px-4 py-1 rounded-full h-7">
          More
        </Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="flex flex-col sm:max-w-[486px] min-h-80 max-h-[550px]"
      >
        <DialogHeader>
          <DialogTitle className="text-base font-medium">
            Transaction History
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground">Today</p>

        <div className="flex-1 pr-2 space-y-2 overflow-auto">
          {recentTransactions.length ? (
            recentTransactions.map(
              ({ title, subtitle, amount, status }, index) => (
                <TransactionItem
                  key={index}
                  icon={
                    <Image
                      src="/icons/card.svg"
                      alt="card"
                      width={16}
                      height={16}
                      className="size-4 object-contain"
                    />
                  }
                  title={title}
                  subtitle={subtitle}
                  amount={amount}
                  status={status}
                />
              )
            )
          ) : (
            <p>No recent transactions</p>
          )}
        </div>

        <DialogFooter className="mt-10">
          <DialogClose asChild>
            <Button className="bg-[#DFDFDF] hover:bg-textPurple text-inherit hover:text-white px-4 py-1 rounded-full h-7 mx-auto">
              Back
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MoreTransactionsDialog;
