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
        A list of all cards records.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="align-middle">
            <div className="flex items-center">
              <Checkbox />
            </div>
          </TableHead>
          <TableHead className="align-middle">ID</TableHead>
          <TableHead className="align-middle">Names</TableHead>
          <TableHead className="align-middle">Status</TableHead>
          <TableHead className="align-middle">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cards.map((card) => (
          <TableRow key={card.id}>
            <TableCell className="align-middle">
              <div className="flex items-center">
                <Checkbox />
              </div>
            </TableCell>
            <TableCell className="align-middle">{card.id}</TableCell>
            <TableCell className="align-middle">{card.name}</TableCell>
            <TableCell className="align-middle">
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
            <TableCell className="align-middle">{card.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CardsTable;
