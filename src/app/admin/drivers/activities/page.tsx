"use client";

import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const driverActivities = [
  {
    image: "/driver-2.svg",
    name: "James Komolafe",
    terminalID: "7764PP9",
    route: "Ado-Ikere",
    arrivingIn: "15",
    date: "January 23rd 2024",
    status: "pending",
  },
  {
    image: "/driver-2.svg",
    name: "James Komolafe",
    terminalID: "7764PP9",
    route: "Ado-Ilawe",
    arrivingIn: "15",
    date: "January 23rd 2024",
    status: "completed",
  },
  {
    image: "/driver-2.svg",
    name: "James Komolafe",
    terminalID: "7764PP9",
    route: "Ado-Ilawe",
    arrivingIn: "15",
    date: "January 23rd 2024",
    status: "completed",
  },
  {
    image: "/driver-2.svg",
    name: "James Komolafe",
    terminalID: "7764PP9",
    route: "Ado-Ikere",
    arrivingIn: "15",
    date: "January 23rd 2024",
    status: "pending",
  },
];

const DriverActivities = () => {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col pt-3 pb-10">
      <header className="flex items-center gap-3 mb-5">
        <Button
          variant="outline"
          title="Back to drivers page"
          onClick={() => router.push("/admin/drivers")}
        >
          <ArrowLeft />
        </Button>
        <p>Driver Activities</p>
      </header>

      <div className="flex-1 flex flex-wrap gap-x-5 gap-y-3 p-5 overflow-y-auto bg-white">
        {driverActivities.map((activity, index) => (
          <Card
            key={index}
            className="w-96 h-fit bg-[#F8F8F8] text-muted-foreground"
          >
            <CardContent className="space-y-7">
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <Image
                    src={activity.image}
                    alt="user"
                    width={46}
                    height={46}
                  />
                  <div className="space-y-3">
                    <p className="text-black font-semibold">{activity.name}</p>
                    <p>
                      Terminal ID: <span>{activity.terminalID}</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-black font-semibold">Route</p>
                  <p>{activity.route}</p>
                </div>
              </div>

              <div>
                <Progress value={40} />
                <p className="text-right mt-2">
                  Arriving in {activity.arrivingIn}mins
                </p>
              </div>

              <CardFooter className="flex justify-between p-0 mt-10">
                {activity.date}
                <Badge
                  className={clsx(
                    "rounded-full capitalize",
                    activity.status === "pending"
                      ? "bg-textPurple"
                      : "bg-[#00AB57]"
                  )}
                >
                  {activity.status}
                </Badge>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <Button
              key={num}
              variant={num === 1 ? "default" : "outline"}
              size="sm"
              className="w-8 h-8 p-0"
            >
              {num}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriverActivities;
