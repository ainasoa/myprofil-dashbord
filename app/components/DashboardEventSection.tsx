import DashboardEventHeader from "./DashboardEventHeader";
import DashboardEventWeek from "./DashboardEventWeek";
import DashboardEvents from './DashboardEvents';

export default function DashboardEventSection() {
  return (
    <div className="border border-gray-200 bg-white p-4 rounded-lg flex flex-col gap-4">
      <DashboardEventHeader />
      <DashboardEventWeek />
      <div className='w-full border-b-1 border-gray-300'/>
      <DashboardEvents/>
    </div>
  );
}
