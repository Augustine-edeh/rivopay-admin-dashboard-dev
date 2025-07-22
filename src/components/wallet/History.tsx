import Image from "next/image";
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
  <div className="flex items-center gap-4 bg-white p-4 rounded-xl border-[0.5px] shadow-sm ">
    <div className="size-10 flex items-center justify-center rounded-[10px] bg-[#B1EE8142]">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </div>
    <div className="text-center">
      <p className="font-semibold">{amount}</p>
      <p className="text-xs bg-[#C4FCBF63] text-[#46D52D] px-2.5 py-0.5 rounded-[10px]">
        {status}
      </p>
    </div>
  </div>
);

const RouteHistoryCard = () => (
  <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
    {/* Header */}
    <div className="flex justify-between items-center text-muted-foreground">
      <h3 className="font-medium">Route History</h3>
      <Badge className="bg-[#DFDFDF] text-inherit px-4 py-1 rounded-full">
        More
      </Badge>
    </div>
    {/* Top Row: Locations + Icon */}
    <div className="flex items-center justify-between space-x-4">
      <p className="font-medium text-sm w-10 text-left">Fajuyi</p>

      <div className="flex items-center justify-center flex-1 gap-2">
        <Separator className="flex-1 h-0.5 bg-[#D9D9D9]" />
        <div className="size-8 rounded-[4px] bg-[#553A6B] flex items-center justify-center">
          <ArrowRightLeft className="size-4 text-white" />
        </div>
        <Separator className="flex-1 h-0.5 bg-[#D9D9D9]" />
      </div>

      <p className="font-medium text-sm w-10 text-right">Ijero</p>
    </div>
    {/* Bottom Row: Times + Price */}
    <div className="flex items-center justify-between gap-2 text-muted-foreground text-xs">
      <div className="w-1/4 text-left">
        <p>Terminal</p>
        <p className="font-medium">8:15am</p>
      </div>

      <div className="w-1/2 text-center">
        <p className="font-semibold text-black text-sm">₦200.00</p>
      </div>

      <div className="w-1/4 text-right">
        <p>Destination</p>
        <p className="font-medium">8:40am</p>
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
          icon={
            <Image
              src="/icons/card.svg"
              alt="card"
              width={4}
              height={4}
              className="size-4 object-contain"
            />
          }
          title="Transfer"
          subtitle="Sango–Dugbe"
          amount="₦200.00"
          status="Confirmed"
        />
        <TransactionItem
          // icon={<QrCode className="h-4 w-4" />}
          icon={
            <Image
              src="/icons/qrcode.svg"
              alt="qrcode"
              width={4}
              height={4}
              className="size-4 object-contain"
            />
          }
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
