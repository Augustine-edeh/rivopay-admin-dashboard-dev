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
import { ReactNode } from "react";
import clsx from "clsx";

interface ConfirmDeleteDialogProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  name?: string;
  role?: string;
  avatar?: ReactNode;
  onDelete?: () => void;
  triggerClassName?: string;
  iconClassName?: string;
}

const ConfirmDeleteDialog = ({
  trigger,
  title = "Delete Item?",
  description = "This action is irreversible and will remove the data permanently.",
  name = "John Doe",
  role = "No Role Assigned",
  avatar,
  onDelete,
  triggerClassName,
  iconClassName,
}: ConfirmDeleteDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <Button
            className={clsx(
              "place-self-end grid place-items-center size-7 p-0 m-0 rounded-full bg-transparent hover:bg-lightGray focus:bg-lightGray text-black shadow-none cursor-pointer",
              triggerClassName
            )}
          >
            <Trash2
              className={clsx("size-4 text-muted-foreground", iconClassName)}
            />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="w-[350px] p-8">
        <DialogHeader>
          <DialogTitle className="text-lg text-center font-semibold">
            {title}
          </DialogTitle>
          <p className="text-xs text-center text-rivoRed/90">{description}</p>
        </DialogHeader>

        <div>
          {avatar ? (
            <div className="mx-auto">{avatar}</div>
          ) : (
            <div className="size-20 rounded-full bg-lightGray mx-auto" />
          )}
          <div className="text-center mt-5 text-muted-foreground">
            <p className="font-semibold">{name}</p>
            <p className="text-xs">{role}</p>
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
              onClick={onDelete}
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

export default ConfirmDeleteDialog;
