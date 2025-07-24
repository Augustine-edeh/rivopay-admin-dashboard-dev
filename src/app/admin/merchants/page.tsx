"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useState, useEffect } from "react";

import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import { Pencil, Plus, Save, Search, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
const merchants = [
  {
    id: "6a06163e",
    name: "Bamidele Makinde",
    terminal: "Oke-Ila",
    address: "No 54, Unity Road, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "081-233 683 19",
    imageUrl: "/nin.png",
  },
  {
    id: "817f2a6f",
    name: "Damilola Afolabi",
    terminal: "Opopogboro",
    address: "No 32, Oke-Iyinmi Lane, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "091-176 216 95",
    imageUrl: "/nin.png",
  },
  {
    id: "50ba8b2f",
    name: "Daniel Ogunleye",
    terminal: "Iworoko",
    address: "No 54, Old Garage, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "070-810 049 74",
    imageUrl: "/nin.png",
  },
  {
    id: "80f41389",
    name: "Akin Adewale",
    terminal: "Emure",
    address: "No 52, Old Garage, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "080-222 476 81",
    imageUrl: "/nin.png",
  },
  {
    id: "ef75b445",
    name: "Tope Adeyemi",
    terminal: "Aramoko",
    address: "No 43, Mission Road, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "080-872 633 30",
    imageUrl: "/nin.png",
  },
  {
    id: "3324edc9",
    name: "Yemi Ogunleye",
    terminal: "Ifaki",
    address: "No 94, Housing Estate, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "081-133 991 94",
    imageUrl: "/nin.png",
  },
  {
    id: "6c51a1b7",
    name: "Joshua Adeniyi",
    terminal: "Oke-Ila",
    address: "No 12, Unity Road, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "080-578 144 81",
    imageUrl: "/nin.png",
  },
  {
    id: "2ecb2028",
    name: "Esther Adewale",
    terminal: "Emure",
    address: "No 58, Mission Road, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "081-450 462 66",
    imageUrl: "/nin.png",
  },
  {
    id: "fc4e7bc4",
    name: "Elizabeth Ogunleye",
    terminal: "Ilawe",
    address: "No 67, Palm Avenue, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "080-977 259 71",
    imageUrl: "/nin.png",
  },
  {
    id: "10c75cfa",
    name: "Ade Ogunleye",
    terminal: "Erio",
    address: "No 25, Oba's Palace Road, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "070-958 894 75",
    imageUrl: "/nin.png",
  },
  {
    id: "27b3435f",
    name: "Grace Fashola",
    terminal: "Ikere Junction",
    address: "No 68, Oke-Iyinmi Lane, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "091-635 943 18",
    imageUrl: "/nin.png",
  },
  {
    id: "bd033cae",
    name: "David Oyekan",
    terminal: "Emure",
    address: "No 25, Church Street, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "081-721 875 01",
    imageUrl: "/nin.png",
  },
  {
    id: "97f9c029",
    name: "Funmi Adeniyi",
    terminal: "Iworoko",
    address: "No 60, New Market Road, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "091-826 538 74",
    imageUrl: "/nin.png",
  },
  {
    id: "d5e79a76",
    name: "Yemi Adeyemi",
    terminal: "Ikere Junction",
    address: "No 30, Oba's Palace Road, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "081-173 231 99",
    imageUrl: "/nin.png",
  },
  {
    id: "dc4c7e86",
    name: "Kehinde Adewale",
    terminal: "Ilawe",
    address: "No 24, Unity Road, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "080-362 989 11",
    imageUrl: "/nin.png",
  },
  {
    id: "4c3bcfa9",
    name: "Tope Oyekan",
    terminal: "Ojumose",
    address: "No 73, Oba's Palace Road, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "070-576 709 98",
    imageUrl: "/nin.png",
  },
  {
    id: "c68ffb38",
    name: "Taiwo Adewale",
    terminal: "Opopogboro",
    address: "No 83, Oba's Palace Road, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "090-772 694 95",
    imageUrl: "/nin.png",
  },
  {
    id: "360e0386",
    name: "Femi Ojo",
    terminal: "Basiri",
    address: "No 83, New Market Road, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "080-826 724 29",
    imageUrl: "/nin.png",
  },
  {
    id: "ccd88908",
    name: "Yemi Oyekan",
    terminal: "Ijero",
    address: "No 1, Oke-Iyinmi Lane, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "080-767 586 65",
    imageUrl: "/nin.png",
  },
  {
    id: "7728a13c",
    name: "Tolu Adeyemi",
    terminal: "Aramoko",
    address: "No 100, Library Close, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "091-958 405 46",
    imageUrl: "/nin.png",
  },
  {
    id: "8614d9d5",
    name: "Ade Adeniyi",
    terminal: "Iworoko",
    address: "No 77, Mission Road, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "070-610 757 31",
    imageUrl: "/nin.png",
  },
  {
    id: "b3f4c91c",
    name: "Akin Oyekan",
    terminal: "Erio",
    address: "No 1, Stadium Road, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "070-023 517 53",
    imageUrl: "/nin.png",
  },
  {
    id: "3f2613e8",
    name: "Deborah Ogunleye",
    terminal: "Ikole",
    address: "No 95, School Road, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "080-588 605 42",
    imageUrl: "/nin.png",
  },
  {
    id: "dd95dc39",
    name: "Elizabeth Fashola",
    terminal: "Erio",
    address: "No 23, Unity Road, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "091-646 431 57",
    imageUrl: "/nin.png",
  },
  {
    id: "ec623592",
    name: "Esther Adeniyi",
    terminal: "Iworoko",
    address: "No 16, Palm Avenue, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "090-102 719 13",
    imageUrl: "/nin.png",
  },
  {
    id: "5e36bb15",
    name: "Grace Ojo",
    terminal: "Ajilosun",
    address: "No 61, School Road, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "090-118 887 59",
    imageUrl: "/nin.png",
  },
  {
    id: "6bfa5184",
    name: "Grace Adeniyi",
    terminal: "Efon",
    address: "No 3, Church Street, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "080-250 259 22",
    imageUrl: "/nin.png",
  },
  {
    id: "a500cb30",
    name: "Esther Ajayi",
    terminal: "Ojumose",
    address: "No 21, Unity Road, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "090-964 077 87",
    imageUrl: "/nin.png",
  },
  {
    id: "c894be2e",
    name: "David Ajayi",
    terminal: "Oke-Ila",
    address: "No 30, Old Garage, Ado Ekiti, Ekiti State",
    gender: "Male",
    phone: "091-777 728 55",
    imageUrl: "/nin.png",
  },
  {
    id: "7cd781fd",
    name: "Sade Adewale",
    terminal: "Iworoko",
    address: "No 49, Church Street, Ado Ekiti, Ekiti State",
    gender: "Female",
    phone: "070-883 703 21",
    imageUrl: "/nin.png",
  },
];

const MerchantsPage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("merchants"), [setTitle]);

  const [selected, setSelected] = useState(merchants[0]);

  return (
    <div className="p-6 space-y-6">
      {/* Header Row */}
      {/* NOTE: tweak [bg-cover, bg-center, bg-blend-color, bg-no-repeat] properties to achieve HeaderBar design specs in production   */}
      <div className="flex items-center justify-between p-6 rounded-[11px] [background-image:linear-gradient(90deg,_#F3E4FF9C,_#F3F3E3BD,_#F8F8F8,_#F4ECECE5,_#EAF5E6AB),url('/maerchants-walletBar-bg.png')] bg-cover bg-center bg-blend- color bg-no-repeat">
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
        {/* <Input placeholder="Search" className="w-64 rounded-full" /> */}
        <div className="relative hidden md:flex items-center w-full max-w-xs">
          <Input
            className="rounded-[45px] pl-14 bg-[#B3B3B35C] hover:bg-dashboardCardGray"
            id="search"
            placeholder="Search"
          />
          <Label htmlFor="search" className="absolute left-3.5 rounded-full">
            <Search className="text-separatorGray" />
          </Label>
        </div>
      </div>

      {/* Content */}
      {/* NOTE: consider increasing heoght to `500px` */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[450px] bg-[#9D9C9C47] rounded-[14px] px-3.5 py-6">
        {/* Merchant List */}
        <Card className="p-2 h-full overflow-hidden bg-transparent border-none shadow-none">
          <ScrollArea className="h-full">
            <div className="space-y-4 pr-3">
              {merchants.map((merchant, idx) => (
                <Card
                  key={idx}
                  className="p-4 flex flex-col justify-between shadow-sm"
                >
                  <Button className="place-self-end grid place-items-center size-7 p-0 m-0 rounded-full bg-transparent hover:bg-lightGray focus:bg-lightGray text-black shadow-none cursor-pointer">
                    <Trash2 size={16} />
                  </Button>

                  <div className="flex items-center gap-4">
                    <Avatar className="relative size-11 grid place-items-center bg-[#B3B3B35C] overflow-visible">
                      <div className="absolute top-0.5 right-0 size-2.5 rounded-full bg-[#00BA8A]"></div>
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
          </ScrollArea>
        </Card>

        {/* Selected Merchant Info */}
        <Card className="p-4 space-y-6 rounded-[12px]">
          <div className="flex justify-between items-center text-muted-foreground">
            <h4 className="text-sm font-medium">Information Summary</h4>

            <Button
              onClick={() => setIsEditing((prev) => !prev)}
              // className="bg-dashboardLightGrayBG rounded-full text-muted-foreground hover:text-white"
              className={clsx(
                "rounded-full",
                isEditing
                  ? "bg-[#39C480] hover:bg-[#63b48d]"
                  : "bg-dashboardLightGrayBG text-muted-foreground hover:text-white"
              )}
            >
              {isEditing ? (
                <>
                  Save
                  <Save className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Edit
                  <Pencil className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {/* Left Column */}
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

            {/* Right Column */}
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

          {/* NIN Image aligned bottom-right */}
          <div className="flex justify-end mt-4">
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
    </div>
  );
};

export default MerchantsPage;
