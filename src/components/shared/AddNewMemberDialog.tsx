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
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AddNewMemberDialog = ({
  trigger,
  onAdd,
}: {
  trigger: React.ReactNode;
  onAdd: (email: string | null, role: string, accessControl: boolean) => void;
}) => {
  const [accessControl, setAccessControl] = useState(true);
  const [role, setRole] = useState("owner");

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md space-y-4">
        <DialogHeader>
          <DialogTitle>New Administration</DialogTitle>
        </DialogHeader>

        {/* Identity */}
        <div className="space-y-1">
          <h1 className="text-base font-medium">Identity provided</h1>
          <p className="text-sm text-muted-foreground">rivo</p>
        </div>

        {/* Access Control */}
        <div className="flex items-center gap-3">
          <h1 className="text-base font-medium">Access Control</h1>
          <Switch
            checked={accessControl}
            onCheckedChange={(val) => setAccessControl(val)}
            className={`data-[state=checked]:bg-[#00AB57]
    data-[state=unchecked]:bg-[#737373] cursor-pointer`}
          />
        </div>

        {/* Admin Roles */}
        <div className="space-y-3">
          <h1 className="text-base font-medium">Admin Role</h1>
          <RadioGroup value={role} onValueChange={setRole}>
            <div className="space-y-1">
              <div className="flex items-start gap-2">
                <RadioGroupItem value="owner" id="role-owner" />
                <div>
                  <Label htmlFor="role-owner" className="font-medium">
                    Owner
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Can view, create and edit anything, including other
                    administrator
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <RadioGroupItem value="admin" id="role-admin" />
                <div>
                  <Label htmlFor="role-admin" className="font-medium">
                    Administration
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Can view, create and edit anything, except for other
                    administrator
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <RadioGroupItem value="readonly" id="role-readonly" />
                <div>
                  <Label htmlFor="role-readonly" className="font-medium">
                    Read Only
                  </Label>
                  <p className="text-sm text-muted-foreground">Can only view</p>
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Footer */}
        <DialogFooter className="mt-4">
          <Button className="rounded-full text-rivoRed bg-transparent hover:bg-gray-50 border border-transparent  hover:border-rivoRed hover:text-rivoRed transition-colors shadow-none">
            Cancel
          </Button>
          <Button
            // disabled={!email.includes("@")}
            onClick={() => onAdd("", role, accessControl)}
            className="rounded-full outline-none border-none bg-rivoGreen text-white hover:bg-rivoGreen/90"
          >
            Add Member
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewMemberDialog;
