"use client";

import clsx from "clsx";
import { drivers } from "@/data/drivers/drivers";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import AddNewDriverButtonDialog from "@/components/drivers/AddNewDriverButton-Dialog";
import { Trash2 } from "lucide-react";

const DriversTable = () => (
  <Card className="h-[358px] flex flex-col">
    <CardContent className="p-4 flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-medium">Drivers Management</h3>
        <AddNewDriverButtonDialog />
      </div>

      <div className="overflow-hidden border rounded-md flex-1">
        <div className="overflow-x-auto">
          <Table className="table-fixed w-full">
            <TableHeader className="sticky top-0 bg-white z-10 shadow-sm">
              <TableRow>
                <TableHead className="w-1/5">Validator</TableHead>
                <TableHead className="w-1/5">Status</TableHead>
                <TableHead className="w-1/5">Route</TableHead>
                <TableHead className="w-2/5">Name</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        <ScrollArea className="overflow-y-auto flex-1 max-h-[210px]">
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
        </ScrollArea>
      </div>
    </CardContent>
  </Card>
);

export default DriversTable;
