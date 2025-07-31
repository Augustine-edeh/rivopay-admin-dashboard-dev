import { Button } from "@/components/ui/button";
import DriverInfoModalTrigger from "@/components/drivers/DriverInfoModalTrigger";
import SecondaryScreenHeader from "@/components/SecondaryScreenHeader";

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
  return (
    <div className="h-screen flex flex-col pt-3 pb-10">
      <SecondaryScreenHeader
        backTo="/admin/drivers"
        currentPageTitle={"Driver Activities"}
        title={"Back to drivers page"}
      />

      <div className="flex-1 flex flex-wrap gap-x-5 gap-y-3 p-5 overflow-y-auto bg-white">
        {driverActivities.map((activity, index) => (
          <DriverInfoModalTrigger activity={activity} key={index} />
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
