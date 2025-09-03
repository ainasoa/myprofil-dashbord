import { IoNotificationsOutline } from "react-icons/io5";


export default function AdminNotification() {
  return (
    <div className="flex items-center relative px-4 py-2 hover:bg-gray-200 rounded-sm cursor-pointer">
      <IoNotificationsOutline className="scale-150 " />
      <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
        3
      </div>
    </div>
  )
}
