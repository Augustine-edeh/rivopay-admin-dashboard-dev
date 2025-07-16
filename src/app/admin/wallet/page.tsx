"use client";

import { useEffect } from "react";

import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const WalletPage = () => {
  const setTitle = usePageTitleStore((state) => state.setTitle);
  useEffect(() => setTitle("wallet"), [setTitle]);

  return <div>Wallet Page</div>;
};

export default WalletPage;
