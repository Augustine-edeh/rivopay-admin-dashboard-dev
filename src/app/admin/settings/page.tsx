"use client";

import { useEffect, useState } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";
import SettingsAdminTable from "@/components/settings/SettingsAdminTable";
import QuickActionCards from "@/components/settings/QuickActionCards";
import { QuickActionCardProps } from "@/components/settings/QuickActionCards";
import { mockAdmins } from "@/data/settings/mockAdmins";

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
        <SettingsAdminTable adminList={adminList} setAdminList={setAdminList} />
        <QuickActionCards cards={quickActionsCards} />
      </div>
    </div>
  );
};

export default SettingsPage;
