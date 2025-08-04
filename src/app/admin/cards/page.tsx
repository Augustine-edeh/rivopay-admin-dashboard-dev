"use client";

import { useEffect } from "react";
import { cardData } from "@/data/card/cardData";

import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import { Ban, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddNewCardDialog from "@/components/cards/AddNewCard";
import RecentHistory from "@/components/wallet/History";
import CardDetails from "@/components/cards/CardDetails";

const AssignedCardsPage = () => {
  const { title, setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("Assigned Cards"), [title, setTitle]);

  return (
    <div className="flex-1 p-6 grid grid-cols-3 gap-6">
      {/* Left Side */}
      <div className="col-span-2 space-y-6">
        {/* Card Actions & Overview */}
        <section className="flex items-start gap-4">
          <div className="grid grid-cols-1 gap-4 text-[#737373]">
            <AddNewCardDialog />

            <div className="flex flex-col justify-center">
              <Button className="grid place-items-center size-12 rounded-xl border-2 border-[#D9D9D9] bg-transparent hover:bg-gray-200/80 cursor-pointer">
                <Ban color="#BF2B2B" />
              </Button>
              <p className="text-[10px]">Block card</p>
            </div>
          </div>

          <div className="w-[320px] h-[200px] bg-darkPurple text-white rounded-xl p-4 flex flex-col justify-between">
            <div className="flex-1 flex items-center justify-center mt-5">
              <p className="text-2xl tracking-widest">0000 0000 0000</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs">CARD HOLDER</p>
                <p className="text-sm font-semibold">Femi Owoalabi</p>
              </div>
              <div className="text-right text-xs">
                <p>VALID</p>
                <p>12/2026</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between bg-white rounded-xl gap-6 p-3 pl-0 w-[280px] shadow">
              <div className="border-l-4 pl-3 border-lightPurple">
                <p className="text-xs text-muted-foreground">
                  Available Balance
                </p>
                <p className="text-lg text-[#6746A3] font-bold mt-2">₦0.00</p>
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
                <p className="text-lg text-[#89C35C] font-bold mt-2">₦0.00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Table */}
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
              {cardData.map((card, idx) => (
                <TableRow key={idx} className="border-b">
                  <TableCell className="py-2">{card.name}</TableCell>
                  <TableCell>{card.cardId}</TableCell>
                  <TableCell>{card.phone}</TableCell>
                  <TableCell>{card.metaId}</TableCell>
                  <TableCell>{card.valid}</TableCell>
                  <TableCell>
                    <Badge
                      className={`bg-transparent ${
                        card.status === "Active"
                          ? "text-[#00AB57]"
                          : "text-muted-foreground"
                      }`}
                    >
                      {card.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Pencil size={18} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>

      {/* Right Side */}
      <div>
        <CardDetails />
        <RecentHistory className="rounded-t-none" />
      </div>
    </div>
  );
};

export default AssignedCardsPage;
