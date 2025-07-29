"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { Plus } from "lucide-react";
import { Label } from "../ui/label";
import SearchInput from "../shared/SearchInput";

const teamMembers = [
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: true },
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: false },
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: false },
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: false },
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: true },
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: false },
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: false },
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: false },
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: true },
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: false },
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: false },
  { name: "Prosper Efe", email: "prosper@rivo.com", isAdmin: false },
];

const TeamModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-textPurple/90 hover:bg-textPurple rounded-full">
          View Team
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-4xl w-full h-[80vh] p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Team Members
          </DialogTitle>
        </DialogHeader>

        {/* Header controls */}
        <div className="flex flex-wrap gap-4 justify-between items-center my-4">
          <div className="flex items-center gap-3">
            <Checkbox id="selectAll" />
            <Label htmlFor="selectAll">Select All</Label>
          </div>
          <SearchInput />
          <Button
            variant="secondary"
            className="rounded-full text-white bg-textPurple/90 hover:bg-textPurple"
          >
            <Plus /> Add New Member
          </Button>
        </div>

        {/* Tabs row */}
        <div className="flex gap-6 border-b pb-2 text-sm font-medium text-muted-foreground">
          <span className="cursor-pointer">All Team Members (15)</span>
          <span className="cursor-pointer">Admins {`(3)`}</span>
        </div>

        {/* Member list */}
        <ScrollArea className="h-[60vh] pr-2 mt-4 bg-red-300">
          <div className="space-y-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group flex justify-between items-center px-3 py-3 border rounded-md hover:bg-muted transition"
              >
                <div className="flex items-center gap-3">
                  <Checkbox />
                  <div>
                    <p className="font-medium text-sm">
                      {member.name}{" "}
                      {member.isAdmin && (
                        <span className="text-xs text-muted-foreground">
                          (Admin)
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {member.email}
                    </p>
                  </div>
                </div>

                <div className="hidden group-hover:flex gap-3">
                  <Button
                    variant="outline"
                    className="border-rivoGreen text-rivoGreen hover:bg-green-50 rounded-full"
                  >
                    Make Admin
                  </Button>
                  <Button
                    variant="outline"
                    className="border-rivoRed text-rivoRed hover:bg-red-50 rounded-full"
                  >
                    Remove from team
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TeamModal;
