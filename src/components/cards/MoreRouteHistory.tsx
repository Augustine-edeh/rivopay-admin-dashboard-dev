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
import { Separator } from "../ui/separator";
import { ArrowRightLeft } from "lucide-react";

const MoreRouteHistoryDialog = () => {
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
            Route History
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground">Today</p>

        <div className="flex-1 pr-2 space-y-2 overflow-auto">
          {recentTransactions.length ? (
            recentTransactions.map((route, index) => (
              <div
                key={index}
                className="bg-dashboardAccentGray rounded-[8px] p-4"
              >
                <div className="flex items-center justify-between space-x-4">
                  <p className="font-medium text-sm w-10 text-left">Fajuyi</p>

                  <div className="flex items-center justify-center flex-1 gap-2">
                    <Separator className="flex-1 h-0.5 bg-[#D9D9D9]" />
                    <div className="size-8 rounded-[4px] bg-[#553A6B] flex items-center justify-center">
                      <ArrowRightLeft className="size-4 text-white" />
                    </div>
                    <Separator className="flex-1 h-0.5 bg-[#D9D9D9]" />
                  </div>

                  <p className="font-medium text-sm w-10 text-right">Ijero</p>
                </div>
                {/* Bottom Row: Times + Price */}
                <div className="flex items-center justify-between gap-2 text-muted-foreground text-xs">
                  <div className="w-1/4 text-left">
                    <p>Terminal</p>
                    <p className="font-medium">8:15am</p>
                  </div>

                  <div className="w-1/2 text-center">
                    <p className="font-semibold text-black text-sm">₦200.00</p>
                  </div>

                  <div className="w-1/4 text-right">
                    <p>Destination</p>
                    <p className="font-medium">8:40am</p>
                  </div>
                </div>
                {/* </div> */}
              </div>
            ))
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

export default MoreRouteHistoryDialog;
