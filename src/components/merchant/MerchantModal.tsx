"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

const MerchantModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#553A6B] hover:bg-[#6b3f8c] text-white rounded-full">
          <Plus /> Add New Merchant
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl p-8">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold mb-5">
            Add Merchant
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-8">
          {/* Input Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName" className="text-muted-foreground mb-2">
                Full Names
              </Label>
              <Input
                id="fullName"
                className="bg-[#CFCFCF33] rounded-none mb-5"
              />
            </div>
            <div>
              <Label
                htmlFor="terminalId"
                className="text-muted-foreground mb-2"
              >
                Terminal ID
              </Label>
              <Input
                id="terminalId"
                className="bg-[#CFCFCF33] rounded-none mb-5"
              />
            </div>
            <div>
              <Label htmlFor="gender" className="text-muted-foreground mb-2">
                Gender
              </Label>
              <Input id="gender" className="bg-[#CFCFCF33] rounded-none mb-5" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-muted-foreground mb-2">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                className="bg-[#CFCFCF33] rounded-none mb-5"
              />
            </div>
            <div>
              <Label htmlFor="address" className="text-muted-foreground mb-2">
                Address
              </Label>
              <Input
                id="address"
                className="bg-[#CFCFCF33] rounded-none mb-5"
              />
            </div>
            <div>
              <Label
                htmlFor="assignedTerminal"
                className="text-muted-foreground mb-2"
              >
                Assigned Terminal
              </Label>
              <Input
                id="assignedTerminal"
                className="bg-[#CFCFCF33] rounded-none mb-5"
              />
            </div>
          </div>

          {/* Upload Section */}
          <div className="text-center">
            <h4 className="font-bold">Upload Document</h4>
            <p className="text-sm mb-2">National ID</p>

            <div className="border border-dashed rounded-lg p-4">
              <p className="font-semibold">National ID Card.JPEG</p>
              <div className="flex justify-center mt-1">
                <span className="text-xs text-muted-foreground">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-1"></span>
                  JPG, PNG, PDF and SVG files up to 5MB
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="bg-darkPurple/90 hover:bg-darkPurple w-full max-w-sm mx-auto rounded-full"
            >
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MerchantModal;
