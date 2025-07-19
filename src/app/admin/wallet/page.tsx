"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import clsx from "clsx";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const transactions = [
  {
    ref: "#21223456216",
    method: "Physical Card",
    date: "12 Mar 2025",
    time: "12:00pm",
    amount: "₦300",
    status: "Successful",
  },
  {
    ref: "#21323456216",
    method: "Virtual Card",
    date: "12 Mar 2025",
    time: "12:00pm",
    amount: "₦300",
    status: "Pending",
  },
  {
    ref: "#21323456216",
    method: "QR Code",
    date: "12 Mar 2025",
    time: "12:00pm",
    amount: "₦500",
    status: "Successful",
  },
  {
    ref: "#21323456216",
    method: "QR Code",
    date: "12 Mar 2025",
    time: "12:00pm",
    amount: "₦300",
    status: "Pending",
  },
  {
    ref: "#21323456216",
    method: "QR Code",
    date: "12 Mar 2025",
    time: "12:00pm",
    amount: "₦500",
    status: "Successful",
  },
  {
    ref: "#21323456216",
    method: "Physical Card",
    date: "12 Mar 2025",
    time: "12:00pm",
    amount: "₦300",
    status: "Pending",
  },
  {
    ref: "#21323456216",
    method: "Virtual Card",
    date: "12 Mar 2025",
    time: "12:00pm",
    amount: "₦300",
    status: "Successful",
  },
];

const WalletPage = () => {
  const setTitle = usePageTitleStore((state) => state.setTitle);

  useEffect(() => {
    setTitle("wallet");
  }, [setTitle]);

  return (
    <section className="flex-1 flex flex-col gap-4 mt-12 mx-12 py-6 rounded-xl bg-[#9D9C9C0F]">
      {/* Wallet Page Header section */}
      <section className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Wallet</h2>

        <div className="relative hidden md:flex items-center w-full max-w-lg">
          <Input
            className="rounded-[45px] pl-14 bg-[#B3B3B35C] hover:bg-dashboardCardGray"
            id="search"
            placeholder="Search"
          />
          <Label htmlFor="search" className="absolute left-3.5 rounded-full">
            <Search className="text-separatorGray" />
          </Label>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select>
            <SelectTrigger className="w-[120px] h-8 rounded-3xl">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="amount">Amount</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/*Wallet Table Section */}
      <section className="rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted-foreground">Reference</TableHead>
              <TableHead className="text-muted-foreground">
                Payment Method
              </TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground">Time</TableHead>
              <TableHead className="text-muted-foreground">Amount</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactions.map((tx, index) => (
              <TableRow key={index} className="h-14">
                <TableCell>{tx.ref}</TableCell>
                <TableCell>{tx.method}</TableCell>
                <TableCell>{tx.date}</TableCell>
                <TableCell>{tx.time}</TableCell>
                <TableCell>{tx.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={clsx(
                      "rounded-full",
                      tx.status === "Successful"
                        ? "bg-[#B1EE8133] text-[#00AB57]"
                        : "bg-[#FF080033] text-[#FF0900]"
                    )}
                  >
                    {tx.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-fit py-0.5 px-3.5 rounded-full text-muted-foreground bg-dashboardLightGrayBG"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Pagination (static) */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <Button
              key={num}
              variant={num === 1 ? "default" : "outline"}
              size="sm"
              className="w-8 h-8 p-0"
            >
              {num}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WalletPage;
