import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { ArrowRightLeft, QrCode } from "lucide-react";

const TransactionItem = ({
  icon,
  title,
  subtitle,
  amount,
  status,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  amount: string;
  status: string;
}) => (
  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F2F2F2]">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </div>
    <div className="text-right">
      <p className="font-semibold">{amount}</p>
      <p className="text-xs text-[#00AB57]">{status}</p>
    </div>
  </div>
);

const RouteHistoryCard = () => (
  <div className="bg-white rounded-xl shadow-sm p-4">
    <div className="flex justify-between items-center mb-4 text-muted-foreground">
      <h3>Route History</h3>
      <Badge className="bg-[#DFDFDF] text-inherit px-4 py-1 rounded-full">
        More
      </Badge>
    </div>

    <div className="flex items-center justify-between">
      <div className="text-left">
        <p className="font-medium">Fajuyi</p>
        <p className="text-xs text-muted-foreground">
          Terminal
          <br />
          8:15am
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-[#F2F2F2] flex items-center justify-center">
          <ArrowRightLeft className="h-4 w-4 text-muted-foreground" />
        </div>
        <p className="text-sm font-semibold mt-1">₦200.00</p>
      </div>

      <div className="text-right">
        <p className="font-medium">Ijero</p>
        <p className="text-xs text-muted-foreground">
          Destination
          <br />
          8:40am
        </p>
      </div>
    </div>
  </div>
);

const RecentHistory = () => {
  return (
    <section className="w-full space-y-4 p-4">
      {/* Header */}
      <div className="flex justify-between items-center text-muted-foreground">
        <h3 className="font-medium">Recent History</h3>
        <Badge className="bg-[#DFDFDF] text-inherit px-4 py-1 rounded-full">
          More
        </Badge>
      </div>

      {/* Green bar + Separator */}
      <div className="flex items-center">
        <div className="h-2.5 w-32 rounded-full bg-[#00AB57]" />
        <Separator className="flex-1 h-0.5 bg-[#D9D9D9]" />
      </div>

      {/* Transactions */}
      <div className="space-y-3">
        <TransactionItem
          icon={<ArrowRightLeft className="h-4 w-4" />}
          title="Transfer"
          subtitle="Sango–Dugbe"
          amount="₦200.00"
          status="Confirmed"
        />
        <TransactionItem
          icon={<QrCode className="h-4 w-4" />}
          title="Transfer"
          subtitle="Sango–Dugbe"
          amount="₦200.00"
          status="Confirmed"
        />
      </div>

      {/* Route History */}
      <RouteHistoryCard />
    </section>
  );
};

export default RecentHistory;
