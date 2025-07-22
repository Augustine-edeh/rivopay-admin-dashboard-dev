"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PhoneCall, Plus, Trash2 } from "lucide-react";
import BusesSummary from "@/components/drivers/BusesSummary";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const drivers = new Array(20).fill(null).map((_, i) => ({
  id: `#43${i + 1}`,
  name: "Ademola",
  status: i % 3 === 0 ? "Blocked" : "Completed",
  route: "Ilawe",
  validator: `Bus #10${i}`,
}));

const DriversPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("drivers"), [setTitle]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 py-6">
      {/* LEFT SECTION */}
      <div className="space-y-6">
        {/* Buses Summary Cards */}
        <BusesSummary />

        {/* Driver Table */}
        <Card className="h-[500px] flex flex-col">
          <CardContent className="p-4 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium">Drivers Management</h3>
              <Button
                variant="outline"
                size="sm"
                className="bg-[#00AB5712] hover:bg-[#00AB57]  text-[#00AB57] hover:text-[#daf9cffc] rounded-full border-none"
              >
                Add New Driver <Plus />
              </Button>
            </div>

            <div className="overflow-hidden border rounded-md flex-1">
              <div className="overflow-x-auto">
                <Table className="table-fixed w-full">
                  {/* Table Head */}
                  <TableHeader className="sticky top-0 bg-white z-10 shadow-sm">
                    <TableRow>
                      <TableHead className="w-1/5">Validator</TableHead>
                      <TableHead className="w-1/5">Status</TableHead>
                      <TableHead className="w-1/5">Route</TableHead>
                      <TableHead className="w-2/5">Name</TableHead>
                      <TableHead className="w- [40px] bg-red-500" />
                    </TableRow>
                  </TableHeader>
                </Table>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto flex-1 max-h-[360px]">
                <Table className="table-fixed w-full">
                  <TableBody>
                    {drivers.map((driver, index) => (
                      <TableRow key={index} className="border-b">
                        <TableCell>{driver.validator}</TableCell>
                        <TableCell>
                          <Badge
                            className={clsx(
                              "rounded-full",
                              driver.status === "Blocked"
                                ? "bg-[#FFBABA] text-[#FF0900]"
                                : "bg-[#D8F6E2] text-[#00AB57]"
                            )}
                          >
                            {driver.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{driver.route}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/driver.svg" />
                              <AvatarFallback>{driver.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                              <span className="font-medium text-sm">
                                {driver.name}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {driver.id}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-muted-foreground"
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT SECTION */}
      <Card className="rounded-none rounded-r-[17px] bg-dashboardAccentGray">
        <CardContent className="p-4 space-y-7">
          <div>
            <p className="text-sm text-muted-foreground">
              Driver’s Information
            </p>

            <Separator className="my-5" />

            <div className="px-5 py-2.5 rounded-[8px] bg-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Avatar className="size-10 grid place-items-center bg-[#B3B3B35C]">
                    <AvatarImage
                      src="/icons/user-fallback.svg"
                      className="size-4"
                    />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Ademola</p>
                    <p className="text-xs text-muted-foreground">#43456</p>
                  </div>
                </div>
                <Badge className="bg-[#D8F6E2] text-[#00AB57]">Active</Badge>
              </div>

              <p className="text-sm mt-4">
                Mobile number{" "}
                <span className="font-[500]">+234 810 000 00</span>
              </p>

              <Button
                className="w-full mt-2 text-white bg-[#00AB57] hover:bg-[#00994b]"
                variant="default"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                Call Driver
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-1">Bus #101</h4>

            {/* Departure row */}
            <div className="space-y-8 mb-10">
              <div className="text-sm flex justify-between">
                <p className="font-[500] flex items-center gap-1">
                  <Image
                    src="/icons/bus-departure.svg"
                    alt="bus"
                    width={16}
                    height={16}
                  />
                  <span>Departure: 8:00AM</span>
                </p>
                <p className="text-muted-foreground">January 23rd 2024</p>
              </div>

              {/* Seat & Trip summary */}
              <div className="flex justify-between text-sm text-muted-foreground">
                <p className="flex items-center gap-1">
                  <Image
                    src="/icons/seats.svg"
                    alt="seats"
                    width={16}
                    height={16}
                  />
                  <span>
                    Total Seat <strong className="text-black ml-1">50</strong>
                  </span>
                </p>

                <p>
                  Total Trips <strong className="text-black ml-1">0</strong>
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Road Activities</p>
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span>10:15 AM</span>
              <span>Arriving in 15mins</span>
            </div>
            {/* <Progress value={35} className="bg-[#DFDEDE47] h-2" /> */}

            <Progress
              value={35}
              className="bg-[#DFDEDE47] h-2"
              indicatorClassName="bg-[#A5A5A5]"
            />
          </div>

          <div className="flex justify-center">
            <Button
              variant="ghost"
              className="w-fit bg-[#B3B3B35C] text-muted-foreground rounded-full px-6"
            >
              More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriversPage;
