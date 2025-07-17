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
    <section className="flex-1 flex flex-col gap-4 mt-12 rounded-xl py-6">
      {/* Header */}
      <div className="flex justify-between items-center px-6">
        <h2 className="text-lg font-semibold">Wallet</h2>

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
      </div>

      {/* Table */}
      <div className="rounded-xl border mx-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reference</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactions.map((tx, index) => (
              <TableRow key={index}>
                <TableCell>{tx.ref}</TableCell>
                <TableCell>{tx.method}</TableCell>
                <TableCell>{tx.date}</TableCell>
                <TableCell>{tx.time}</TableCell>
                <TableCell>{tx.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      tx.status === "Successful"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }
                  >
                    {tx.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="text-xs">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

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
