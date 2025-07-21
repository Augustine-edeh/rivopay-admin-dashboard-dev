"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const HelpPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("Help and Support"), [setTitle]);

  return <div>Help Page</div>;
};

export default HelpPage;
