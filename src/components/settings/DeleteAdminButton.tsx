"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const DeleteAdminTrigger = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="place-self-end grid place-items-center size-7 p-0 m-0 rounded-full bg-transparent hover:bg-lightGray focus:bg-lightGray text-black shadow-none cursor-pointer">
          <Trash2 className="w-4 h-4 cursor-pointer text-muted-foreground" />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[350px] p-8">
        <DialogHeader>
          <DialogTitle className="text-lg text-center font-semibold">
            Delete Admin?
          </DialogTitle>
          <p className="text-xs text-center text-red-500/90">
            This action is irreversible and automatically remove their data.
          </p>
        </DialogHeader>

        <div>
          <div className="size-20 rounded-full bg-lightGray mx-auto" />
          <div className="text-center mt-5 text-muted-foreground">
            <p className="font-semibold">David Akinloye</p>
            <p className="text-xs">KYC Verification</p>
          </div>
        </div>

        <DialogFooter className="flex mt-5">
          <div className="flex-1 text-center space-x-3">
            <DialogClose asChild>
              <Button
                className="rounded-full px-10 text-muted-foreground border border-separatorGray/90 hover:border-separatorGray"
                variant="outline"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              className="rounded-full px-10 bg-[#BF2B2B]/90 hover:bg-[#BF2B2B]"
              variant="destructive"
            >
              Delete
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAdminTrigger;
