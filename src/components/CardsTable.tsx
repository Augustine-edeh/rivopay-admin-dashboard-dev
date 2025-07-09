import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "./ui/checkbox";
import clsx from "clsx";

const cards = [
  {
    id: "001",
    name: "John Doe",
    status: "active",
    date: "2025-07-01",
  },
  {
    id: "002",
    name: "Jane Smith",
    status: "inactive",
    date: "2025-07-02",
  },
  {
    id: "003",
    name: "Michael Johnson",
    status: "active",
    date: "2025-07-03",
  },
  {
    id: "004",
    name: "Emily Davis",
    status: "inactive",
    date: "2025-07-04",
  },
  {
    id: "005",
    name: "David Wilson",
    status: "active",
    date: "2025-07-05",
  },
  {
    id: "006",
    name: "Sarah Brown",
    status: "inactive",
    date: "2025-07-06",
  },
  {
    id: "007",
    name: "Chris Taylor",
    status: "active",
    date: "2025-07-07",
  },
];

const CardsTable = () => {
  return (
    <Table>
      <TableCaption className="sr-only">
        A list of your recent records.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Names</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cards.map((card) => (
          <TableRow key={card.id}>
            <TableCell className="font-medium">
              <Checkbox />
            </TableCell>
            <TableCell>{card.id}</TableCell>
            <TableCell>{card.name}</TableCell>
            <TableCell>
              <span
                className={clsx(
                  "px-2 py-1 rounded-full text-xs font-semibold capitalize",
                  card.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                )}
              >
                {card.status}
              </span>
            </TableCell>
            <TableCell>{card.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CardsTable;
