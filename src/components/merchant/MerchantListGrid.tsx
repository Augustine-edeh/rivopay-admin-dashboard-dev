"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DeleteMerchant from "@/components/merchant/DeleteMerchant";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { Save, Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { merchants } from "@/data/merchants";

const MerchantListGrid = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState(merchants[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full bg-[#9D9C9C47] rounded-[14px] px-3.5 py-6 overflow-hidden">
      {/* LEFT section: Scrollable Merchant List */}
      <div className="h-full overflow-y-auto pr-2.5">
        <div className="space-y-4">
          {merchants.map((merchant, idx) => (
            <Card
              key={idx}
              className="p-4 flex flex-col justify-between shadow-sm bg-white"
            >
              <DeleteMerchant />
              <div className="flex items-center gap-4">
                <Avatar className="relative size-11 grid place-items-center bg-[#B3B3B35C] overflow-visible">
                  <div className="absolute top-0.5 right-0 size-2.5 rounded-full bg-[#00BA8A]" />
                  <AvatarImage
                    src="/icons/user-fallback.svg"
                    className="size-4"
                  />
                  <AvatarFallback>{merchant.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">{merchant.name}</p>
                </div>
                <div className="text-xs text-right">
                  <p className="text-muted-foreground">Terminal ID</p>
                  <p className="font-medium">{merchant.id}</p>
                </div>
              </div>

              <div>
                <Separator />
                <div className="flex justify-between items-center py-2">
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">
                      Assigned Terminal
                    </p>
                    <p className="font-semibold">{merchant.terminal}</p>
                  </div>
                  <div className="relative h-7 w-0.5 bg-separatorGray">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 size-3 rounded-full bg-[#00AB57]" />
                  </div>
                </div>
                <Separator />
              </div>

              <Button
                size="sm"
                className="w-fit px-8 mx-auto mt-2 bg-lightGray text-muted-foreground hover:text-white rounded-full"
                onClick={() => setSelected(merchant)}
              >
                View
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* right section: Static Info Summary */}
      <Card className="p-4 rounded-[12px] h-full overflow-hidden">
        <div className="flex justify-between items-center text-muted-foreground">
          <h4 className="text-sm font-medium">Information Summary</h4>
          <Button
            onClick={() => setIsEditing((prev) => !prev)}
            className={clsx(
              "rounded-full",
              isEditing
                ? "bg-[#39C480] hover:bg-[#63b48d]"
                : "bg-dashboardLightGrayBG text-muted-foreground hover:text-white"
            )}
          >
            {isEditing ? (
              <>
                Save <Save className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Edit <Pencil className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={selected.name}
                disabled={!isEditing}
                className="mt-1 bg-[#CFCFCF33]"
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Input
                id="gender"
                value={selected.gender}
                disabled={!isEditing}
                className="mt-1 bg-[#CFCFCF33]"
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={selected.address}
                disabled={!isEditing}
                className="mt-1 bg-[#CFCFCF33]"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <Label htmlFor="terminalId">Terminal ID</Label>
              <Input
                id="terminalId"
                value={selected.id}
                disabled={!isEditing}
                className="mt-1 bg-[#CFCFCF33]"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={selected.phone}
                disabled={!isEditing}
                className="mt-1 bg-[#CFCFCF33]"
              />
            </div>
            <div>
              <Label htmlFor="terminal">Assigned Terminal</Label>
              <Input
                id="terminal"
                value={selected.terminal}
                disabled={!isEditing}
                className="mt-1 bg-[#CFCFCF33]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-auto">
          <Image
            src={selected.imageUrl}
            alt="NIN"
            width={150}
            height={100}
            className="rounded-md border object-contain"
          />
        </div>
      </Card>
    </div>
  );
};

export default MerchantListGrid;
