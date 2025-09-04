import { Button } from "flowbite-react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { LuCalendar, LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function DashboardEventHeader() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <LuCalendar /> This week
      </div>
      <div className="flex gap-8">
        <button className="icon-button">
          <LuChevronLeft />
        </button>
        <button className="icon-button">
          <LuChevronRight />
        </button>
        <button className="icon-button">
          <BsArrowsAngleExpand />
        </button>
      </div>
    </div>
  );
}
