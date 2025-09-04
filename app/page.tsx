import DashboardCards from "./components/DashboardCards";
import DashboardEventSection from "./components/DashboardEventSection";
import DashboardHeader from "./components/DashboardHeader";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardHeader />
      <DashboardCards/>
      <DashboardEventSection/>
    </div>
  );
}
