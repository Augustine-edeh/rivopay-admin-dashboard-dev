import { TrendingUp } from "lucide-react";
import Image from "next/image";

const TrackCard = () => {
  return (
    <div className="relative bg-white overflow-hidde n rounded">
      <div className="flex flex-col gap-5">
        <div className="flex mt-3">
          <h6 className="border-l-3 border-dashboardCardGray pl-1">
            Total Card Registared
          </h6>

          <div className="flex items-center">
            <TrendingUp color="green" size={16} />
            <span>{12}</span>
          </div>
        </div>

        <p>{123}</p>

        <Image
          src="/semi-circle.png"
          width={49}
          height={49}
          alt="svg"
          className="absolute -bottom-3 -right-3 object-cover"
        />
      </div>
    </div>
  );
};

export default TrackCard;
