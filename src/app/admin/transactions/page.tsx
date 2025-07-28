"use client";

// import { useEffect } from "react";
// import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

import { useState, useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import ReceiptModal from "@/components/transactions/ReceiptModal";

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

interface TransactionsType {
  ref: string;
  method: string;
  date: string;
  time: string;
  amount: string;
  status: string;
}

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

const TransactionsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("transactions"), [setTitle]);

  const [selectedTx, setSelectedTx] = useState<TransactionsType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="flex-1 flex flex-col gap-4 mt-10 mx- 12 py-6 rounded-xl bg-dashboardAccentGray px-10">
      {/* Transactions Page Header section */}
      <section className="flex justify-between items-center gap-5">
        <div className="relative hidden md:flex items-center w-full max-w-xs">
          <Input
            className="rounded-[45px] pl-14 bg-[#B3B3B35C] hover:bg-dashboardCardGray"
            id="search"
            placeholder="Search by reference..."
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
              <SelectItem value="reference">Reference</SelectItem>
              <SelectItem value="payment">Payment</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/*Transactions Table Section */}
      <section className="rounded-xl">
        <Table>
          <TableHeader className="uppercase">
            <TableRow>
              <TableHead className="text-muted-foreground">Reference</TableHead>
              <TableHead className="text-muted-foreground">Payment</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground">Time</TableHead>
              <TableHead className="text-muted-foreground">Amount</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground"></TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index} className="h-14">
                <TableCell>{transaction.ref}</TableCell>
                <TableCell>{transaction.method}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.time}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={clsx(
                      "rounded-full border-none",
                      transaction.status === "Successful"
                        ? "bg-[#B1EE8133] text-[#00AB57]"
                        : "bg-[#FF080033] text-[#FF0900]"
                    )}
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-fit py-0.5 px-3.5 rounded-full text-muted-foreground bg-dashboardLightGrayBG border-none"
                    onClick={() => {
                      setSelectedTx(transaction);
                      setModalOpen(true);
                    }}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Pagination (NOTE: static for now) */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <Button
              key={num}
              variant={num === 1 ? "default" : "outline"}
              size="sm"
              className="size-8 p-0"
            >
              {num}
            </Button>
          ))}
        </div>
      </div>

      <ReceiptModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        transaction={selectedTx}
      />
    </section>
  );
};

export default TransactionsPage;
