import SecondaryScreenHeader from "@/components/SecondaryScreenHeader";
import DriverActivityGrid from "@/components/drivers/DriverActivityGrid";
import DriverPagination from "@/components/drivers/DriverPagination";

const DriverActivitiesPage = () => {
  return (
    <div className="h-screen flex flex-col pt-3 pb-10">
      <SecondaryScreenHeader
        backTo="/admin/drivers"
        currentPageTitle="Driver Activities"
        title="Back to drivers page"
      />

      <DriverActivityGrid />
      <DriverPagination />
    </div>
  );
};

export default DriverActivitiesPage;
