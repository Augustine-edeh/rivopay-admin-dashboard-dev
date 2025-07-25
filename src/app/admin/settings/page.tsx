"use client";

import { useEffect, useState } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const mockAdmins = [
  {
    id: 1,
    name: "David Akinolye",
    role: "KYC Verifications",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 2,
    name: "David Akinolye",
    role: "KYC Verifications",
    lastSeen: "Thursday 2025. 4:00pm",
    active: false,
  },
  {
    id: 3,
    name: "David Akinolye",
    role: "Merchants",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 4,
    name: "David Akinolye",
    role: "Merchants",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 5,
    name: "David Akinolye",
    role: "Card Management",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 6,
    name: "David Akinolye",
    role: "Card Management",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 7,
    name: "David Akinolye",
    role: "Support",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 8,
    name: "David Akinolye",
    role: "Technical Admin",
    lastSeen: "Thursday 2025. 4:00pm",
    active: false,
  },
  {
    id: 9,
    name: "David Akinolye",
    role: "Compliance",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 10,
    name: "David Akinolye",
    role: "Finance",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 11,
    name: "David Akinolye",
    role: "Fraud Monitoring",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 12,
    name: "David Akinolye",
    role: "Customer Success",
    lastSeen: "Thursday 2025. 4:00pm",
    active: false,
  },
  {
    id: 13,
    name: "David Akinolye",
    role: "KYC Officer",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 14,
    name: "David Akinolye",
    role: "Legal Admin",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 15,
    name: "David Akinolye",
    role: "Risk Management",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 16,
    name: "David Akinolye",
    role: "Settlement Admin",
    lastSeen: "Thursday 2025. 4:00pm",
    active: false,
  },
  {
    id: 17,
    name: "David Akinolye",
    role: "Auditor",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 18,
    name: "David Akinolye",
    role: "Reconciliation",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 19,
    name: "David Akinolye",
    role: "Payments",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
  {
    id: 20,
    name: "David Akinolye",
    role: "Product Manager",
    lastSeen: "Thursday 2025. 4:00pm",
    active: true,
  },
];

const SettingsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);
  const [adminList, setAdminList] = useState(mockAdmins);

  useEffect(() => {
    setTitle("Admin Settings");
  }, [setTitle]);

  return (
    <div className="px-5 py-6 flex flex-col gap-6">
      {/* Table Section */}
      <div className="rounded-xl shadow border bg-white overflow-hidden">
        <div className="max-h-[300px] overflow-y-auto">
          <Table className="min-w-full border-separate border-spacing-0">
            <TableHeader className="sticky top-0 bg-gray-100 z-10">
              <TableRow>
                <TableHead className="bg-gray-100">Actions</TableHead>
                <TableHead className="bg-gray-100">ID</TableHead>
                <TableHead className="bg-gray-100">Assigned role</TableHead>
                <TableHead className="bg-gray-100">Last seen</TableHead>
                <TableHead className="bg-gray-100">Status</TableHead>
                <TableHead className="bg-gray-100">Edit</TableHead>
                <TableHead className="bg-gray-100">Delete</TableHead>
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
                    />
                  </TableCell>
                  <TableCell>{admin.name}</TableCell>
                  <TableCell>{admin.role}</TableCell>
                  <TableCell>{admin.lastSeen}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${
                        admin.active ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                  </TableCell>
                  <TableCell>
                    <Pencil className="w-4 h-4 cursor-pointer text-muted-foreground" />
                  </TableCell>
                  <TableCell>
                    <Trash2 className="w-4 h-4 cursor-pointer text-muted-foreground" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Bottom Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Control Panel */}
        <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col gap-3">
          <div className="text-sm font-medium">Control Panel</div>
          <p className="text-xs text-muted-foreground">
            Get access to full panel control
          </p>
          <Button size="sm" className="w-fit">
            Continue
          </Button>
        </div>

        {/* Password */}
        <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col gap-3">
          <div className="text-sm font-medium">Password</div>
          <p className="text-xs text-muted-foreground">
            You can reset or change your password by clicking here
          </p>
          <Button variant="outline" size="sm" className="w-fit">
            Change
          </Button>
        </div>

        {/* Remove Account */}
        <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col gap-3">
          <div className="text-sm font-medium text-red-500">Remove Account</div>
          <p className="text-xs text-muted-foreground">
            This action will deactivate temporarily
          </p>
          <Button variant="destructive" size="sm" className="w-fit">
            Deactivate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
