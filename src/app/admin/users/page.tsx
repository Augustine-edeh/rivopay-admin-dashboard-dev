"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const UsersPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("users"), [setTitle]);

  return <div>Users Page</div>;
};

export default UsersPage;
