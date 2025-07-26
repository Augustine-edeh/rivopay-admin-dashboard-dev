"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const HelpPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("help and support"), [setTitle]);

  return (
    <div>
      The help page should re-route to the integrated 3rd party H&S dashboard
    </div>
  );
};

export default HelpPage;
