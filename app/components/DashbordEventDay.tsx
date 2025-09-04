type PropType = {
  day: string;
  date: number;
};
export default function DashbordEventDay({ day, date }: PropType) {
  return (
    <div className="flex flex-col items-center p-2 border-2 border-gray-300 rounded-lg hover:bg-blue-100 hover:border-blue-500 cursor-pointer">
      <p className="text-sm text-gray-500">{day}</p>
      <h1 className="font-bold">{date}</h1>
    </div>
  );
}
