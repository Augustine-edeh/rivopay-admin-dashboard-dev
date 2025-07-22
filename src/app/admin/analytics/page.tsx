"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import Link from "next/link";

const AnalyticsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("analytics"), [setTitle]);
  return (
    <div>
      <p>Analytics Page</p>
      <Link href="/admin/analytics/total-revenue">Go to Total Revenue</Link>
    </div>
  );
};

export default AnalyticsPage;
