import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { TransactionsType } from "@/types/transactions/transactions";

interface Props {
  transactions: TransactionsType[];
  onViewReceipt: (tx: TransactionsType) => void;
}

const TransactionsTable = ({ transactions, onViewReceipt }: Props) => {
  return (
    <section className="rounded-xl">
      <Table>
        <TableHeader className="uppercase">
          <TableRow>
            <TableHead className="text-muted-foreground">Reference</TableHead>
            <TableHead className="text-muted-foreground">Payment</TableHead>
            <TableHead className="text-muted-foreground">Date</TableHead>
            <TableHead className="text-muted-foreground">Time</TableHead>
            <TableHead className="text-muted-foreground">Amount</TableHead>
            <TableHead className="text-muted-foreground">Status</TableHead>
            <TableHead className="text-muted-foreground"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index} className="h-14">
              <TableCell>{transaction.ref}</TableCell>
              <TableCell>{transaction.method}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.time}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={clsx(
                    "rounded-full border-none",
                    transaction.status === "Successful"
                      ? "bg-[#B1EE8133] text-[#00AB57]"
                      : "bg-[#FF080033] text-[#FF0900]"
                  )}
                >
                  {transaction.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-fit py-0.5 px-3.5 rounded-full text-muted-foreground bg-dashboardLightGrayBG border-none"
                  onClick={() => onViewReceipt(transaction)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default TransactionsTable;
