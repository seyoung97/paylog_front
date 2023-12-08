import CalendarDayLabel from "./CalendarDayLabel";

export default function CalendarGrid() {
  const dayLabel = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <ul className="grid grid-cols-7 gap-1 w-11/12 m-auto mt-10">
      {dayLabel.map((day) => {
        return (
          <li key={day}>
            <CalendarDayLabel day={day} />
          </li>
        );
      })}
    </ul>
  );
}
