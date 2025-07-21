"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const MerchantsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("merchants"), [setTitle]);

  return <div>Merchants Page</div>;
};

export default MerchantsPage;
