import { LuIdCard } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { PiTrendUpLight } from "react-icons/pi";

export default function DashboardCardItem() {
  return (
    <div className="border border-gray-200 p-4 rounded-lg bg-white">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-sm text-gray-500 mb-2">MyPts Balance.</p>
          <h1 className="font-bold">34,4567</h1>
        </div>
        <MdPayment className="text-blue-500 text-2xl" />
      </div>
      <div className="flex justify-between">
        <p className="text-xs text-gray-500">Click to view analitycs</p>
        <PiTrendUpLight className="text-gray-500"/>
      </div>
    </div>
  );
}
