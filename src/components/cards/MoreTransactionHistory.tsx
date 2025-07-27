"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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
        <Button className="bg-[#DFDFDF] hover:bg-textPurple text-inherit hover:text-white  px-4 py-1 rounded-full h-7">
          More
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col sm:max-w-[486px] min-h-80 max-h-[550px]">
        <DialogHeader>
          <DialogTitle className="sr-only">Transaction History</DialogTitle>
          <DialogTitle className="">Transaction Historysss</DialogTitle>
        </DialogHeader>

        <div className="flex-1 pr-2 space-y-2 bg-red-400 overflow-auto">
          {recentTransactions.length ? (
            recentTransactions.map(
              ({ title, subtitle, amount, status }, index) => (
                <TransactionItem
                  key={index}
                  icon={
                    <Image
                      src="/icons/card.svg"
                      alt="card"
                      width={4}
                      height={4}
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
      </DialogContent>
    </Dialog>
  );
};

export default MoreTransactionsDialog;
