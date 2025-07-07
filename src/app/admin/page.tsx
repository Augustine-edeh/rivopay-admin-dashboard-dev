const AdminPage = () => {
  return (
    <div className="flex flex-col">
      {/* Boxes Section */}
      <section></section>

      {/* Bottom Section */}
      <section className="flex-1 flex bg-yellow-400 p-1">
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
