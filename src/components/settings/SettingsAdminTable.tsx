import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import clsx from "clsx";
import { Pencil } from "lucide-react";
import DeleteAdminTrigger from "@/components/settings/DeleteAdminButton";

interface Admin {
  id: number;
  name: string;
  role: string;
  lastSeen: string;
  active: boolean;
}

interface SettingsAdminTableProps {
  adminList: Admin[];
  setAdminList: React.Dispatch<React.SetStateAction<Admin[]>>;
}

const SettingsAdminTable = ({
  adminList,
  setAdminList,
}: SettingsAdminTableProps) => {
  return (
    <div className="rounded-xl shadow border bg-[#FCFAFA] px-8 pt-3 pb-10 overflow-hidden">
      <div className="max-h-[310px] overflow-y-auto">
        <Table className="min-w-full border-separate border-spacing-0">
          <TableHeader className="sticky top-0 bg-gray-100 z-10">
            <TableRow>
              <TableHead>Actions</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Assigned role</TableHead>
              <TableHead>Last seen</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Edit</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {adminList.map((admin) => (
              <TableRow key={admin.id}>
                <TableCell>
                  <Switch
                    checked={admin.active}
                    onCheckedChange={(value) =>
                      setAdminList((prev) =>
                        prev.map((a) =>
                          a.id === admin.id ? { ...a, active: value } : a
                        )
                      )
                    }
                    className="data-[state=checked]:bg-[#00AB57] data-[state=unchecked]:bg-[#737373] cursor-pointer"
                  />
                </TableCell>
                <TableCell>{admin.name}</TableCell>
                <TableCell>{admin.role}</TableCell>
                <TableCell>{admin.lastSeen}</TableCell>
                <TableCell className="flex justify-center">
                  <div
                    className={clsx(
                      "grid place-items-center rounded-full size-6",
                      admin.active ? "bg-[#00AB57]" : "bg-[#737373]"
                    )}
                  >
                    <span className="sr-only">
                      {admin.active ? "Active" : "Inactive"}
                    </span>
                    <div className="w-2.5 h-1 bg-white" />
                  </div>
                </TableCell>
                <TableCell>
                  <Pencil className="w-4 h-4 cursor-pointer text-muted-foreground" />
                </TableCell>
                <TableCell>
                  <DeleteAdminTrigger />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SettingsAdminTable;
