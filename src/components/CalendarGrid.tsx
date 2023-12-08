import CalendarDayLabel from "./CalendarDayLabel";
import CalendarDate from "./CalendarDate";

type Props = {
  getMonthDays: () => Date[];
};

export default function CalendarGrid({ getMonthDays }: Props) {
  const dayLabel = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <ul className="grid grid-cols-7 w-11/12 max-w-screen-2xl m-auto">
      {dayLabel.map((day) => {
        return (
          <li key={day}>
            <CalendarDayLabel day={day} />
          </li>
        );
      })}
      {getMonthDays().map((date) => {
        return (
          <li key={date.toString()}>
            <CalendarDate date={date} />
          </li>
        );
      })}
    </ul>
  );
}
