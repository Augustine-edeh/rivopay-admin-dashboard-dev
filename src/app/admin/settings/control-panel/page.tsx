"use client";

import SecondaryScreenHeader from "@/components/SecondaryScreenHeader";
import TeamModal from "@/components/settings/TeamModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import ControlSettingCard from "@/components/settings/ControlSettingCard";
import { controlSettings } from "@/data/settings/controlSettings";

const ControlPanelPage = () => {
  return (
    <div className="h-screen flex flex-col pt-3 pb-10">
      <SecondaryScreenHeader
        backTo="/admin/settings"
        currentPageTitle="Control Panel"
        title="Back to settings page"
      />

      <div className="flex-1 flex flex-col p-5 bg-white">
        <div className="flex justify-between mb-5">
          <h2 className="font-bold">Account Restriction</h2>
          <TeamModal />
        </div>

        <ScrollArea className="h-[550px]">
          <div className="flex flex-col gap-4">
            {controlSettings.map((setting) => (
              <ControlSettingCard key={setting.id} setting={setting} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ControlPanelPage;
