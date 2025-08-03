"use client";

import { useEffect, useState } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import TransactionsHeader from "@/components/transactions/TransactionsHeader";
import TransactionsTable from "@/components/transactions/TransactionsTable";
import TransactionsPagination from "@/components/transactions/TransactionsPagination";
import ReceiptModal from "@/components/transactions/ReceiptModal";
import { TransactionsType } from "@/types/transactions/transactions";

const mockTransactions: TransactionsType[] = [
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
  const [selectedTx, setSelectedTx] = useState<TransactionsType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => setTitle("transactions"), [setTitle]);

  return (
    <section className="flex-1 flex flex-col gap-4 mt-10 mx-12 py-6 rounded-xl bg-dashboardAccentGray px-10">
      <TransactionsHeader />
      <TransactionsTable
        transactions={mockTransactions}
        onViewReceipt={(tx) => {
          setSelectedTx(tx);
          setModalOpen(true);
        }}
      />
      <TransactionsPagination />
      <ReceiptModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        transaction={selectedTx}
      />
    </section>
  );
};

export default TransactionsPage;
