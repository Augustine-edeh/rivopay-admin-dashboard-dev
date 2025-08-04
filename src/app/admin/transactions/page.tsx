"use client";

import { useEffect, useState } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import TransactionsHeader from "@/components/transactions/TransactionsHeader";
import TransactionsTable from "@/components/transactions/TransactionsTable";
import TransactionsPagination from "@/components/transactions/TransactionsPagination";
import ReceiptModal from "@/components/transactions/ReceiptModal";
import { TransactionsType } from "@/types/transactions/transactions";
import { transactions } from "@/data/transactions/transactions";

const TransactionsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);
  const [selectedTx, setSelectedTx] = useState<TransactionsType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => setTitle("transactions"), [setTitle]);

  return (
    <section className="flex-1 flex flex-col gap-4 mt-10 mx-12 py-6 rounded-xl bg-dashboardAccentGray px-10">
      <TransactionsHeader />
      <TransactionsTable
        transactions={transactions}
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
