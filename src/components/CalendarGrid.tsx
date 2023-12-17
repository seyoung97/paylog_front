import CalendarDayLabel from "./CalendarDayLabel";
import CalendarDate from "./CalendarDate";
import { format } from "date-fns";
import { RevenueData } from "../type";

type Props = {
  getMonthDays: () => Date[];
  revenueData: RevenueData;
};

export default function CalendarGrid({ getMonthDays, revenueData }: Props) {
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
            <CalendarDate
              date={date}
              dailyRevenueData={
                revenueData?.[format(date, "yyy")]?.[
                  format(date, "MMM")
                ]?.[Number(format(date, "d")) - 1] ?? 0
              }
            />
          </li>
        );
      })}
    </ul>
  );
}
