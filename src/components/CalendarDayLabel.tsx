type Props = {
  day: string;
};

export default function CalendarDayLabel({ day }: Props) {
  return <div className="flex justify-end pr-2 py-1">{day}</div>;
}
