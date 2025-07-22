"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const TransactionsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("Transactions"), [setTitle]);

  return <div>Transactions Page</div>;
};

export default TransactionsPage;
