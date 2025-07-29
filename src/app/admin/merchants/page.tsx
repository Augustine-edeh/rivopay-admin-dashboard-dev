"use client";

import { useEffect } from "react";

import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import MerchantListGrid from "@/components/merchant/MerchantListGrid";

const MerchantsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("merchants"), [setTitle]);

  return <MerchantListGrid />;
};

export default MerchantsPage;
