export interface ControlSetting {
  id: string;
  type: "switch" | "radio";
  title: string;
  description: string;
  options?: string[];
}
