type Props = {
  day: string;
};

export default function CalendarDayLabel({ day }: Props) {
  return <div className="bg-slate-200 flex justify-end pr-2 py-1">{day}</div>;
}
