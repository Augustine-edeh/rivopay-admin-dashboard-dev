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
import { Pencil } from "lucide-react";
import QuickActionCards from "@/components/settings/QuickActionCards";
import { QuickActionCardProps } from "@/components/settings/QuickActionCards";
import clsx from "clsx";
import DeleteAdminTrigger from "@/components/settings/DeleteAdminButton";

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

const quickActionsCards: QuickActionCardProps[] = [
  {
    title: "Control Panel",
    description: "Get access to full panel control",
    buttonText: "Continue",
    buttonTextColor: "#00AB57",
    href: "/admin/settings/control-panel",
  },
  {
    title: "Password",
    description: "You can reset or change your password by clicking here",
    buttonText: "Change",
    variant: "outline",
    buttonTextColor: "#000000",
  },
  {
    title: "Remove Account",
    description: "This action will deactivate temporarily",
    buttonText: "Deactivate",
    variant: "destructive",
    buttonTextColor: "#B43030",
  },
];

const SettingsPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);
  const [adminList, setAdminList] = useState(mockAdmins);

  useEffect(() => {
    setTitle("admin settings");
  }, [setTitle]);

  return (
    <div className="py-6">
      <div className="px-5 py-6 flex flex-col gap-6">
        {/* Table Section */}
        <div className="rounded-xl shadow border bg-[#FCFAFA] px-8 pt-3 pb-10 overflow-hidden">
          {/* NOTE: consider having max height at h-[300px] */}
          <div className="max-h-[310px] overflow-y-auto">
            <Table className="min-w-full border-separate border-spacing-0">
              <TableHeader className="sticky top-0 bg- gray-100 z-10">
                <TableRow>
                  <TableHead className="bg- gray-100">Actions</TableHead>
                  <TableHead className="bg- gray-100">ID</TableHead>
                  <TableHead className="bg- gray-100">Assigned role</TableHead>
                  <TableHead className="bg- gray-100">Last seen</TableHead>
                  <TableHead className="bg- gray-100">Status</TableHead>
                  <TableHead className="bg- gray-100">Edit</TableHead>
                  <TableHead className="bg- gray-100">Delete</TableHead>
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
                        className={`data-[state=checked]:bg-[#00AB57]
    data-[state=unchecked]:bg-[#737373] cursor-pointer`}
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
                      {/* <Trash2 className="w-4 h-4 cursor-pointer text-muted-foreground" /> */}
                      <DeleteAdminTrigger />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <QuickActionCards cards={quickActionsCards} />
      </div>
    </div>
  );
};

export default SettingsPage;
