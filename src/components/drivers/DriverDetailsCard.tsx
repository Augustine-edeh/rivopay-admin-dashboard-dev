"use client";

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PhoneCall } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const DriverDetailsCard = () => {
  const router = useRouter();

  return (
    <Card className="rounded-none rounded-r-[17px] bg-dashboardAccentGray">
      <CardContent className="p-4 space-y-7">
        <div>
          <p className="text-sm text-muted-foreground">Driver’s Information</p>
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
              Mobile number <span className="font-[500]">+234 810 000 00</span>
            </p>

            <Button className="w-full mt-2 text-white bg-[#00AB57] hover:bg-[#00994b]">
              <PhoneCall className="w-4 h-4 mr-2" />
              Call Driver
            </Button>
          </div>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-1">Bus #101</h4>

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

        <div className="space-y-[8px] text-sm text-muted-foreground">
          <div className="flex items-center justify-between">
            <p className="font-medium mb-2">Road Activities</p>
            <p>10:15 AM</p>
          </div>
          <Progress
            value={35}
            className="bg-[#DFDEDE47] h-2"
            indicatorClassName="bg-[#A5A5A5]"
          />
          <p className="text-right">Arriving in 15mins</p>
        </div>

        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="w-fit bg-[#B3B3B35C] hover:bg-darkPurple text-muted-foreground hover:text-white rounded-full px-6 mt-5"
            onClick={() => router.push("/admin/drivers/activities")}
          >
            More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverDetailsCard;
