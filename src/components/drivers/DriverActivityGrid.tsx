import DriverInfoModalTrigger from "@/components/drivers/DriverInfoModalTrigger";
import { driverActivities } from "@/data/drivers/driverActivities";

const DriverActivityGrid = () => {
  return (
    <div className="flex-1 flex flex-wrap gap-x-5 gap-y-3 p-5 overflow-y-auto bg-white">
      {driverActivities.map((activity, index) => (
        <DriverInfoModalTrigger activity={activity} key={index} />
      ))}
    </div>
  );
};

export default DriverActivityGrid;
