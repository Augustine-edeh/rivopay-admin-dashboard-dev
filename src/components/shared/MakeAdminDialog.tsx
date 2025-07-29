"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

const MakeAdminDialog = ({
  name,
  onConfirm,
  trigger,
}: {
  name?: string; // Optional since it might not be used in this context
  onConfirm: (email: string) => void;
  trigger: React.ReactNode;
}) => {
  const [email, setEmail] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add a User from rivo.com</DialogTitle>
        </DialogHeader>

        <Textarea
          placeholder={name}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[100px]"
        />

        <DialogFooter className="mt-4">
          <Button
            onClick={() => onConfirm(email)}
            // disabled={!email.includes("@rivo.com")}
            className="bg-rivoGreen hover:bg-rivoGreen/90 text-white rounded-full mx-auto"
          >
            Add User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MakeAdminDialog;
