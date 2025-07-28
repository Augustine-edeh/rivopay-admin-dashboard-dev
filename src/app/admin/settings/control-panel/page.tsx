import SecondaryScreenHeader from "@/components/SecondaryScreenHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { RadioGroup } from "@radix-ui/react-dropdown-menu";

const controlSettings = [
  {
    id: "create-account",
    type: "switch",
    title: "Allow Creating New Account",
    description:
      "By default, access can only be granted under instructions. To give access, move the toggle button below.",
  },
  {
    id: "delete-account",
    type: "switch",
    title: "Turn on Merchant Wallet",
    description: "To grant Access, move the toggle button below.",
  },

  {
    id: "verify-method",
    type: "radio",
    title: "Email Verification Method",
    description: "Control whether email address must be verified.",
    options: ["No verification", "Recommended", "Enforced"],
  },
  {
    id: "verify-method",
    type: "switch",
    title: "Turn on Merchant Dashboard",
    description: "To grant Access, move the toggle button below.",
  },
];

const ControlPanelPage = () => {
  return (
    <div className="h-screen flex flex-col pt-3 pb-10">
      <SecondaryScreenHeader
        backTo="/admin/settings"
        currentPageTitle={"Control Panel"}
        title={"Back to drivers page"}
      />

      <div className="flex-1 flex flex-col p-5 bg-white">
        <div className="flex justify-between mb-5">
          <h2 className="font-bold">Account Restriction</h2>
          <Button className="bg-textPurple/90 hover:bg-textPurple rounded-full">
            View Team
          </Button>
        </div>

        <ScrollArea className="h-[550px]">
          <div className="flex flex-col gap-2">
            {controlSettings.map((setting) => (
              <Card
                key={setting.id}
                className="border-none rounded-none shadow-none gap-3 h-fit w-96"
              >
                <CardHeader>{setting.title}</CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription>{setting.description}</CardDescription>

                  <CardFooter className="px-0 mt-3">
                    {setting.type === "switch" && (
                      <Switch className="data-[state=checked]:bg-[#00AB57] data-[state=unchecked]:bg-[#737373] cursor-pointer" />
                    )}

                    {setting.type === "radio" && (
                      <RadioGroup className="flex gap-4">
                        {setting.options?.map((option, index) => (
                          <label
                            key={index}
                            className="flex items-center gap-1 text-sm"
                          >
                            <input
                              type="radio"
                              name={setting.id}
                              value={option}
                              className="accent-[#00AB57]"
                            />
                            {option}
                          </label>
                        ))}
                      </RadioGroup>
                    )}
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ControlPanelPage;
