"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const DriversPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("drivers"), [setTitle]);

  return <div>Drivers Page</div>;
};

export default DriversPage;
