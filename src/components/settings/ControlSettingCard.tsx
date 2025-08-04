import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ControlSetting {
  id: string;
  type: "switch" | "radio";
  title: string;
  description: string;
  options?: string[];
}

interface Props {
  setting: ControlSetting;
}

const ControlSettingCard = ({ setting }: Props) => {
  return (
    <Card className="border-none rounded-none shadow-none gap-3 h-fit w-96">
      <CardHeader>{setting.title}</CardHeader>
      <CardContent className="space-y-3">
        <CardDescription>{setting.description}</CardDescription>

        <CardFooter className="px-0 mt-3">
          {setting.type === "switch" && (
            <Switch className="data-[state=checked]:bg-[#00AB57] data-[state=unchecked]:bg-[#737373] cursor-pointer" />
          )}

          {setting.type === "radio" && setting.options && (
            <RadioGroup
              defaultValue={setting.options[0]}
              className="flex gap-4"
            >
              {setting.options.map((option, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <RadioGroupItem
                    value={option}
                    id={`${setting.id}-${index}`}
                    className="text-[#00AB57]"
                  />
                  <Label htmlFor={`${setting.id}-${index}`} className="text-sm">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ControlSettingCard;
