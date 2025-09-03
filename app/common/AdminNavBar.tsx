"use client";
import { TextInput } from "flowbite-react";
import { LuSearch } from "react-icons/lu";
import AdminNotification from "./AdminNotification";
import AdminPoints from "./AdminPoints";
import AdminProfil from "./AdminProfil";

export default function AdminNavBar() {
  return (
    <div className="flex gap-4 w-full border-b border-gray-200 justify-between p-4 bg-white">
      <div>
        <h1 className="font-bold">Dashboard</h1>
        <p className="text-sm">Welcome to your MyProfile dashboard</p>
      </div>
      <div className="flex gap-4">
        <TextInput
          id="search"
          type="search"
          icon={LuSearch}
          placeholder="Search..."
        />
        <AdminPoints />
        <AdminNotification />
        <AdminProfil    />
      </div>
    </div>
  );
}
