"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const MerchantRequestPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("merchants request"), [setTitle]);

  return <div>MerchantRequest Page</div>;
};

export default MerchantRequestPage;
