import { ControlSetting } from "@/types/settings/controlSetting";

export const controlSettings: ControlSetting[] = [
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
    id: "merchant-dashboard",
    type: "switch",
    title: "Turn on Merchant Dashboard",
    description: "To grant Access, move the toggle button below.",
  },
];
