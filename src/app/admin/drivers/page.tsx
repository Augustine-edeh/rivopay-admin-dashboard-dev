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
import { Pencil, PhoneCall, Trash2 } from "lucide-react";
import BusesSummary from "@/components/drivers/BusesSummary";

const drivers = new Array(20).fill(null).map((_, i) => ({
  id: `#43${i + 1}`,
  name: `Driver ${i + 1}`,
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
              <Button variant="outline" size="sm">
                Add New Driver +
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
                      <TableHead className="w-[40px]" />
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
                            className={
                              driver.status === "Blocked"
                                ? "bg-[#FFBABA] text-[#FF0900]"
                                : "bg-[#D8F6E2] text-[#00AB57]"
                            }
                          >
                            {driver.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{driver.route}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/avatars/01.png" />
                              <AvatarFallback>{driver.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-sm">
                              {driver.name}
                            </span>
                            <span className="text-muted-foreground text-xs">
                              {driver.id}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-muted-foreground"
                          >
                            <Trash2 className="w-4 h-4" />
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
      <Card className="rounded-2xl">
        <CardContent className="p-4 space-y-5">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Driver’s Information
            </p>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Ademola</p>
                  <p className="text-xs text-muted-foreground">#43456</p>
                </div>
              </div>
              <Badge className="bg-[#D8F6E2] text-[#00AB57]">Active</Badge>
            </div>

            <p className="text-sm mt-4">Mobile number +234 810 000 00</p>
            <Button
              className="w-full mt-2 text-white bg-[#00AB57] hover:bg-[#00994b]"
              variant="default"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Call Driver
            </Button>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-1">Bus #101</h4>
            <div className="text-sm text-muted-foreground flex justify-between mb-1">
              <p>🕓 Departure: 8:00AM</p>
              <p>January 23rd 2024</p>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <p>
                🪑 Total Seat <strong className="text-black ml-1">50</strong>
              </p>
              <p>
                Total Trips <strong className="text-black ml-1">0</strong>
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Road Activities</p>
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span>10:15 AM</span>
              <span>Arriving in 15mins</span>
            </div>
            <Progress value={75} className="h-2 bg-[#E5E5E5]" />
          </div>

          <Button variant="ghost" className="w-full text-muted-foreground">
            More
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriversPage;
