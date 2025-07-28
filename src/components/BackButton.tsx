"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  backTo: string;
  currentPageTitle: string;
  title: string;
}

const BackButton = ({ backTo, currentPageTitle, title }: BackButtonProps) => {
  const router = useRouter();
  return (
    <>
      <Button
        variant="outline"
        title={title}
        onClick={() => router.push(backTo)}
      >
        <ArrowLeft />
      </Button>
      <p>{currentPageTitle}</p>
    </>
  );
};

export default BackButton;
