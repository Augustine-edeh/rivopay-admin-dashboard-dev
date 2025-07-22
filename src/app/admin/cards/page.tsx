"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, Ban, Pencil, Plus, QrCode } from "lucide-react";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const AssignedCardsPage = () => {
  const { title, setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("Assigned Cards"), [title, setTitle]);

  return (
    <div className="flex-1 p-6 grid grid-cols-3 gap-6">
      {/* Left Side: Card & Table */}
      <div className="col-span-2 space-y-6">
        {/* Assigned Cards */}
        <section>
          <div className="flex items-start gap-4">
            <div className="grid grid-cols-1 gap-4 text-[#737373]">
              <div className="flex flex-col justify-center">
                <Button className="grid place-items-center size-12 rounded-xl border-2 border-dashed border-[#D9D9D9]  bg-dashboardAccentGray">
                  <Plus className="text-muted-foreground" />
                </Button>
                <p className="text-[10px]">Add Tags</p>
              </div>

              <div className="flex flex-col justify-center">
                <Button className="grid place-items-center size-12 rounded-xl border-2 border-[#D9D9D9]  bg-dashboardAccentGray">
                  <Ban color="#BF2B2B" />
                </Button>
                <p className="text-[10px]">Block card</p>
              </div>
            </div>

            {/* Card Box */}
            <div className="w-[320px] h-[200px] bg-darkPurple text-white rounded-xl p-4 flex flex-col justify-between">
              <div className="flex-1 flex items-center justify-center mt-5">
                <p className="text-2xl tracking-widest">{"0000 0000 0000"}</p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs">CARD HOLDER</p>
                  <p className="text-sm font-semibold">{"Femi Owoalabi"}</p>
                </div>
                <div className="text-right text-xs">
                  <p>VALID</p>
                  <p>{"12/2026"}</p>
                </div>
              </div>
            </div>

            {/* Balance Cards */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between bg-white rounded-xl gap-6 p-3 pl-0 w-[280px] shadow">
                <div className="border-l-4 pl-3 border-lightPurple">
                  <p className="text-xs text-muted-foreground">
                    Available Balance
                  </p>
                  <p className="text-lg text-[#6746A3] font-bold mt-2">
                    ₦{"0.00"}
                  </p>
                </div>
                <Button className="my-auto self-start rounded-full bg-darkPurple">
                  Top Up
                </Button>
              </div>
              <div className="bg-white rounded-xl p-3 pl-0 w-[280px] shadow">
                <div className="border-l-4 pl-3 border-dashboardLightGreen">
                  <p className="text-xs text-muted-foreground">
                    Previous Balance
                  </p>
                  <p className="text-lg text-[#89C35C] font-bold mt-2">
                    ₦{"0.00"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Table */}
        <section className="bg-dashboardAccentGray rounded-[10px] shadow p-4 h-80">
          <Table className="overflow-y-auto h-full">
            <TableHeader className="uppercase">
              <TableRow className="text-muted-foreground border-b">
                <TableHead>Users</TableHead>
                <TableHead>Card ID</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Meta ID</TableHead>
                <TableHead>Valid</TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow className="border-b">
                <TableCell className="py-2">Femi Owoalabi</TableCell>
                <TableCell>0000 00000</TableCell>
                <TableCell>08130044992</TableCell>
                <TableCell>RIVO9832</TableCell>
                <TableCell>20/12/2026</TableCell>
                <TableCell>
                  <Badge className="bg-transparent text-[#00AB57]">
                    Active
                  </Badge>
                </TableCell>
                <TableCell>
                  <Pencil size={18} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="py-2">Esther Daramola</TableCell>
                <TableCell>0000 00000</TableCell>
                <TableCell>08130044992</TableCell>
                <TableCell>RIVO9832</TableCell>
                <TableCell>20/12/2026</TableCell>
                <TableCell>
                  <Badge className="bg-transparent text-muted-foreground">
                    Blocked
                  </Badge>
                </TableCell>
                <TableCell>
                  <Pencil size={18} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>

      {/* Right Side: Card Info & History */}
      <div className="space-y-4">
        {/* Card Details */}
        <section className="bg-white rounded-xl p-4 shadow space-y-2">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>
              <span className="text-muted-foreground">Holder Names:</span> Femi
              Owoalabi
            </p>
            <p>
              <span className="text-muted-foreground">Gender:</span> Male
            </p>
            <p>
              <span className="text-muted-foreground">Card Number:</span> 0000
              0000 00
            </p>
            <p>
              <span className="text-muted-foreground">Meta ID:</span> RIVO9832
            </p>
            <p>
              <span className="text-muted-foreground">Exp. Date:</span>{" "}
              20/12/2026
            </p>
          </div>
        </section>

        {/* Recent History */}
        <section className="bg-white rounded-xl shadow p-4 space-y-3">
          <div className="flex justify-between items-center text-muted-foreground mb-1">
            <h3 className="font-medium">Recent History</h3>
            <Badge className="bg-[#DFDFDF] text-inherit px-3">More</Badge>
          </div>
          <div className="h-2 w-24 bg-[#00AB57] rounded-full" />
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-white rounded-xl p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F2F2F2] rounded-full flex items-center justify-center">
                  <ArrowRightLeft className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Transfer</p>
                  <p className="text-xs text-muted-foreground">Sango–Dugbe</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">₦200.00</p>
                <p className="text-xs text-[#00AB57]">Confirmed</p>
              </div>
            </div>

            <div className="flex justify-between items-center bg-white rounded-xl p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F2F2F2] rounded-full flex items-center justify-center">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Transfer</p>
                  <p className="text-xs text-muted-foreground">Sango–Dugbe</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">₦200.00</p>
                <p className="text-xs text-[#00AB57]">Confirmed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Route History */}
        <section className="bg-white rounded-xl shadow p-4 space-y-3">
          <div className="flex justify-between items-center text-muted-foreground">
            <h3 className="font-medium">Route History</h3>
            <Badge className="bg-[#DFDFDF] text-inherit px-3">More</Badge>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Fajuyi</p>
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-6 bg-[#D9D9D9]" />
              <div className="w-8 h-8 rounded bg-[#553A6B] flex items-center justify-center">
                <ArrowRightLeft className="text-white w-4 h-4" />
              </div>
              <div className="h-0.5 w-6 bg-[#D9D9D9]" />
            </div>
            <p className="text-sm font-medium">Ijero</p>
          </div>

          <div className="flex justify-between text-xs text-muted-foreground">
            <div className="text-left">
              <p>Terminal</p>
              <p className="text-black">8:15am</p>
            </div>
            <div className="text-center">
              <p className="text-black text-sm font-semibold">₦200.00</p>
            </div>
            <div className="text-right">
              <p>Destination</p>
              <p className="text-black">8:40am</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AssignedCardsPage;
