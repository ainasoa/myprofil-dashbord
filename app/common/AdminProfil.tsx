import { Avatar } from "flowbite-react";
import { LuChevronDown } from "react-icons/lu";

export default function AdminProfil() {
  return (
    <div className="flex gap-3 items-center cursor-pointer hover:bg-gray-100 px-2 rounded-sm">
      <Avatar placeholderInitials="JD" rounded color="blue"  />
      <div>
        <div className="font-bold">John Doe</div>
        <div className="text-sm">Personal Profil</div>
      </div>
      <LuChevronDown />
    </div>
  );
}
