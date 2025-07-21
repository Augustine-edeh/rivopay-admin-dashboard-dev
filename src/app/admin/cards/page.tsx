"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const CardsPage = () => {
  const { title, setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("card management"), [title, setTitle]);

  return <div>Cards Page</div>;
};

export default CardsPage;
