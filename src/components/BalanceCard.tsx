import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const BalanceCard = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-separatorGray">Total Revenue</CardTitle>
      </CardHeader>

      <CardContent className="font-semibold">
        <p>₦0.00</p>
      </CardContent>

      <CardFooter className="space-x-1">
        <div>{`0%`}</div>
        <div className="bg-green-300 rounded-full p-1">
          <TrendingUp size={18} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default BalanceCard;
