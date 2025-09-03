"use client"
import { MdOutlineDashboard } from "react-icons/md";
import AdminLink from "./AdminLink";
import { LuChartBar, LuDatabase, LuPackage, LuUser, LuUserPlus, LuUsers, LuWallet } from "react-icons/lu";
import { FiGitBranch } from "react-icons/fi";

export default function SideBar() {
  return (
    <div className="w-[250px] bg-gray-950 text-white ">
      <div className="p-4 border-b border-gray-500 flex gap-3 items-center ">
        <div className="font-bold py-2 px-4 rounded-2xl bg-white text-gray-950">
          M
        </div>
        <h2 className="text-lg font-bold">MyProfil</h2>
      </div>
      <div className="p-4">
        <AdminLink Icon={MdOutlineDashboard} label="Dashboard" href="/" />
        <AdminLink Icon={LuUser} label="MyProfil" href="#" />
        <AdminLink Icon={LuWallet} label="Wallet" href="#" />
        <AdminLink Icon={LuPackage} label="Products" href="#" />
        <AdminLink Icon={LuUserPlus} label="Contacts" href="#" />
        <AdminLink Icon={FiGitBranch} label="Cirles" href="#" />
        <AdminLink Icon={LuUsers} label="Community" href="#" />
        <AdminLink Icon={LuDatabase} label="Data" href="#" />
        <AdminLink Icon={LuChartBar} label="Insights" href="#" />
      </div>
    </div>
  );
}
