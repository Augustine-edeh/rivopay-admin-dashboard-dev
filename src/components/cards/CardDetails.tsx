import { Separator } from "../ui/separator";

const CardDetails = () => (
  <section className="p-4 pt-7 space-y-2 bg-dashboardAccentGray rounded-t-[8px]">
    <div className="grid grid-cols-1 gap-4 text-sm bg-dashboardAccentGray">
      {[
        ["Holder Names:", "Femi Owoalabi"],
        ["Gender:", "Male"],
        ["Card Number:", "0000 0000 00"],
        ["Meta ID:", "RIVO9832"],
        ["Exp. Date:", "20/12/2026"],
      ].map(([label, value], idx) => (
        <div key={idx}>
          <div className="grid grid-cols-2">
            <span className="text-muted-foreground">{label}</span>
            <span>{value}</span>
          </div>
          <Separator className="h-4 mt-2 bg-[#D9D9D9]" />
        </div>
      ))}
    </div>
  </section>
);

export default CardDetails;
