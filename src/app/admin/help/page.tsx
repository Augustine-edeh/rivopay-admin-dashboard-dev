"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const HelpPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => {
    setTitle("help and support");
    // Example redirection logic for future integration:
    // router.push("https://your-helpdesk.example.com/dashboard");
  }, [setTitle]);

  return (
    <div className="text-center text-muted-foreground mt-10">
      Help & Support will redirect users to our third-party dashboard once
      integrated.
    </div>
  );
};

export default HelpPage;
