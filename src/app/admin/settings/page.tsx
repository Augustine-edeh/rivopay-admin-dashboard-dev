"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const SettingsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("admin settings"), [setTitle]);

  return <div>Settings Page</div>;
};

export default SettingsPage;
