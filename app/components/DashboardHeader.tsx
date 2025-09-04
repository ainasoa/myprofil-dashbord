import { Button } from "flowbite-react";
import { LuBug, LuUserPlus } from "react-icons/lu";

export default function DashboardHeader() {
  return (
    <div className="flex gap-4 justify-between">
      <div>
        <h1 className="font-bold text-xl">Welcome back, John Doe!</h1>
        <p className="text-sm">
          Here's what's happening with your MyProfile account
        </p>
      </div>
      <div className="flex gap-2">
        <Button className="shadow">
          <LuUserPlus /> Invite Others
        </Button>
        <Button color="light" className="shadow">
          <LuBug /> Report bug
        </Button>
      </div>
    </div>
  );
}
