import DashboardCardItem from "./DashboardCardItem";

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <DashboardCardItem />
      <DashboardCardItem />
      <DashboardCardItem />
      <DashboardCardItem />
    </div>
  );
}
