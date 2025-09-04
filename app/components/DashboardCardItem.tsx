
import { ReactNode } from "react";
import { MdPayment } from "react-icons/md";
import { PiTrendUpLight } from "react-icons/pi";

type PropType={
  label:string
  value:string
  Icon:ReactNode
}

export default function DashboardCardItem({label, value, Icon}:PropType) {
  return (
    <div className="border border-gray-200 p-4 rounded-lg bg-white">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-sm text-gray-500 mb-2">{label}</p>
          <h1 className="font-bold">{value}</h1>
        </div>
        {Icon}
      </div>
      <div className="flex justify-between">
        <p className="text-xs text-gray-500">Click to view analitycs</p>
        <PiTrendUpLight className="text-gray-500"/>
      </div>
    </div>
  );
}
