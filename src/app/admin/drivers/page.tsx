"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Trash2, PhoneCall } from "lucide-react";

const DriversPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => setTitle("drivers"), [setTitle]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 py-6">
      {/* Left Section */}
      <div className="space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "Total Buses",
              count: 0,
              note: "Full fleet size for operations.",
            },
            {
              title: "Active Buses",
              count: 0,
              note: "Buses currently in service.",
            },
            {
              title: "In Maintenance",
              count: 0,
              note: "Buses in repair or check up.",
            },
          ].map((card, idx) => (
            <Card key={idx} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{card.title}</p>
                  <p className="text-2xl font-bold">{card.count}</p>
                </div>
                {idx === 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                )}
              </div>
              <p className="text-xs mt-2 text-muted-foreground">{card.note}</p>
            </Card>
          ))}
        </div>

        {/* Driver Management Table */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium">Drivers Management</h3>
              <Button variant="outline" className="text-sm">
                Add New Driver +
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-muted-foreground border-b">
                  <tr>
                    <th className="py-2 text-left">Validator</th>
                    <th className="py-2 text-left">Status</th>
                    <th className="py-2 text-left">Route</th>
                    <th className="py-2 text-left">Name</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Bus #101</td>
                    <td>
                      <Badge className="bg-[#D8F6E2] text-[#00AB57]">
                        Completed
                      </Badge>
                    </td>
                    <td>Ilawe</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/avatars/01.png" />
                          <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-sm">Ademola</span>
                        <span className="text-muted-foreground text-xs">
                          #43456
                        </span>
                      </div>
                    </td>
                    <td>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-muted-foreground"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Section: Driver Info */}
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
