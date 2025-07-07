import BalanceCard from "@/components/BalanceCard";

const AdminPage = () => {
  return (
    <div className="flex-1 flex flex-col bg-white py-12">
      {/* Boxes Section */}
      <section>
        <BalanceCard />
        <BalanceCard />
        <BalanceCard />
      </section>

      {/* Bottom Section */}
      <section className="flex-1 flex bg-blue-400 p-1">
        <div className="bg-red-500">
          {/* Card Section */}
          <div>Card Management Section</div>

          {/* Table Section */}
          <div>Table Section</div>
        </div>

        <div className="bg-red-500">
          {/* Card Section */}
          <div>Pie Chart Section</div>

          {/* Line Chart Section */}
          <div>Line Chart Section</div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
