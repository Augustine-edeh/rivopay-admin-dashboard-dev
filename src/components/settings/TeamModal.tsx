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

const teamMembers = [
  { name: "Prosper Ele", email: "prosper@rivo.com", isAdmin: true },
  { name: "Prosper Ele", email: "prosper@rivo.com", isAdmin: false },
  { name: "Prosper Ele", email: "prosper@rivo.com", isAdmin: false },
  { name: "Prosper Ele", email: "prosper@rivo.com", isAdmin: false },
];

const TeamModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-textPurple/90 hover:bg-textPurple rounded-full">
          View Team
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[1100px] w-full h-[80vh] p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Team Members
          </DialogTitle>
        </DialogHeader>

        {/* Header controls */}
        <div className="flex justify-between items-center my-4">
          <div className="flex items-center gap-2">
            <Checkbox />
            <span>Select All</span>
          </div>
          <input
            type="text"
            placeholder="Search by name"
            className="border px-3 py-1 rounded-md text-sm"
          />
          <Button
            variant="secondary"
            className="rounded-full text-white bg-textPurple/90"
          >
            + Add New Member
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b pb-2 text-sm font-medium">
          <span className="text-textPurple cursor-pointer">
            All Team Members (15)
          </span>
          <span className="text-muted-foreground cursor-pointer">
            Admins (3)
          </span>
        </div>

        {/* Member list */}
        <div className="mt-4 space-y-2 overflow-y-auto max-h-[60vh] pr-2">
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

              {/* Hidden by default, shown on hover of parent */}
              <div className="hidden group-hover:flex gap-3">
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-50"
                >
                  Make Admin
                </Button>
                <Button variant="destructive">Remove from team</Button>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamModal;
