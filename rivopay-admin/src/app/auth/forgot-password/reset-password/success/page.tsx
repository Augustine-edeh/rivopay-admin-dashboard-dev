"use client";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

const PasswordRestSuccess = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-md text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
      <p className="mt-2.5 mb-12 px-4">
        Your command center is ready. Let’s keep the system running smoothly!
      </p>

      <Button
        className="rounded-full w-full cursor-pointer"
        onClick={() => router.push("/admin")}
      >
        Continue
      </Button>
    </div>
  );
};

export default PasswordRestSuccess;
