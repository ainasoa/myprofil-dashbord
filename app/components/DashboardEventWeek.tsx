import DashbordEventDay from "./DashbordEventDay";

export default function DashboardEventWeek() {
  return (
    <div className="grid grid-cols-7 gap-4">
      <DashbordEventDay day="Mon" date={31} />
      <DashbordEventDay day="Tue" date={1} />
      <DashbordEventDay day="Wed" date={2} />
      <DashbordEventDay day="Thu" date={3} />
      <DashbordEventDay day="Fri" date={4} />
      <DashbordEventDay day="Sat" date={5} />
      <DashbordEventDay day="Sun" date={6} />
    </div>
  );
}
