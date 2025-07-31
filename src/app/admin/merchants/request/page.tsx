"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import MerchantListGrid from "@/components/merchant/MerchantListGrid";

const MerchantRequestPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("merchants request"), [setTitle]);

  return <MerchantListGrid />;
};

export default MerchantRequestPage;
