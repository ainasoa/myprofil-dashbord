import { MdPayment,  } from "react-icons/md";
import DashboardCardItem from "./DashboardCardItem";
import { LuEye, LuGift, LuHardDrive, LuUsers } from "react-icons/lu";
import { TbActivityHeartbeat } from "react-icons/tb";

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <DashboardCardItem
        label="MyPts Balance"
        value="34,567"
        Icon={<MdPayment className="text-blue-500 text-4xl" />}
      />
      <DashboardCardItem
        label="Profile Views "
        value="34,567"
        Icon={<LuEye className="text-green-500 text-4xl" />}
      />
      <DashboardCardItem
        label="Connections"
        value="34,567"
        Icon={<LuUsers className="text-pink-500 text-4xl" />}
      />
      <DashboardCardItem
        label="Total Activities "
        value="34,567"
        Icon={<TbActivityHeartbeat className="text-orange-500 text-4xl" />}
      />
      <DashboardCardItem
        label="MyPts Earned "
        value="34,567"
        Icon={<LuGift className="text-yellow-500 text-4xl" />}
      />
      <DashboardCardItem
        label="Storage Used"
        value="34,567"
        Icon={<LuHardDrive className="text-blue-700 text-4xl" />}
      />
    </div>
  );
}
