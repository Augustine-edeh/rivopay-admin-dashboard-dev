"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";

import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import { Plus } from "lucide-react";

const merchants = [
  {
    id: "00000000",
    name: "Bayo Makinde",
    terminal: "Ilawe",
    address: "No 2, housing estate, Ado Ekiti. Ekiti state",
    gender: "Male",
    phone: "081-000 000 00",
    imageUrl: "/assets/nin.png", // update this to your image path
  },
  {
    id: "00000000",
    name: "Bayo Makinde",
    terminal: "Ilawe",
    address: "No 2, housing estate, Ado Ekiti. Ekiti state",
    gender: "Male",
    phone: "081-000 000 00",
    imageUrl: "/assets/nin.png",
  },
];

export default function MerchantsPage() {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("merchants"), [setTitle]);

  const [selected, setSelected] = useState(merchants[0]);

  return (
    <div className="p-6 space-y-6">
      {/* Header Row */}
      <div className="flex items-center justify-between p-6 rounded-[11px] [background-image:linear-gradient(90deg,_#F3E4FF9C,_#F3F3E3BD,_#F8F8F8,_#F4ECECE5,_#EAF5E6AB),url('/maerchants-walletBar-bg.png')] bg-cover bg-center">
        <div className="flex items-center gap-4">
          <Image
            src="/icons/merchant-wallet.svg"
            alt="img"
            width={50}
            height={50}
            className="object-contain"
          />

          <div>
            <p className="text-sm font-medium mb-1 text-muted-foreground">
              TOTAL ALLOCATION
            </p>
            <h2 className="text-2xl font-bold">₦0.00</h2>
          </div>
        </div>

        <Button className="bg-[#553A6B] hover:bg-[#6b3f8c] text-white rounded-full">
          <Plus /> Add New Merchant
        </Button>
      </div>

      {/* Search and Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Accredited merchants {merchants.length}
        </p>
        <Input placeholder="Search" className="w-64 rounded-full" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Merchant List */}
        <ScrollArea className="space-y-4 pr-2 max-h-[500px]">
          {merchants.map((merchant, idx) => (
            <Card
              key={idx}
              className="p-4 flex flex-col justify-between space-y-3 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-white">
                  🧑‍💼
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{merchant.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Assigned Terminal: {merchant.terminal}
                  </p>
                </div>
                <div className="text-xs text-right">
                  <p className="text-muted-foreground">Terminal ID</p>
                  <p className="font-medium">{merchant.id}</p>
                </div>
              </div>
              <Button
                size="sm"
                className="w-fit bg-muted rounded-full"
                onClick={() => setSelected(merchant)}
              >
                View
              </Button>
            </Card>
          ))}
        </ScrollArea>

        {/* Selected Merchant Info */}
        <Card className="p-4 space-y-3">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-medium">Information Summary</h4>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Full Names</p>
              <p className="font-medium">{selected.name}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Terminal ID</p>
              <p className="font-medium">{selected.id}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Gender</p>
              <p className="font-medium">{selected.gender}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Phone Number</p>
              <p className="font-medium">{selected.phone}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-muted-foreground">Address</p>
              <p className="font-medium">{selected.address}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Assigned Terminal</p>
              <p className="font-medium">{selected.terminal}</p>
            </div>
            <div className="flex justify-end">
              <Image
                src={selected.imageUrl}
                alt="NIN"
                width={150}
                height={100}
                className="rounded-md border object-contain"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
