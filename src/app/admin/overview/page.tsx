"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const OverviewPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("overview"), [setTitle]);
  return <div>Overview Page</div>;
};

export default OverviewPage;
