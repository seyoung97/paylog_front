import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import koLocale from "date-fns/locale/ko";

import CalendarHeader from "../components/CalendarHeader";

export default function RevenueCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getMonthDays = () => {
    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = endOfWeek(endOfMonth(currentMonth));
    return eachDayOfInterval({ start: startDate, end: endDate });
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  return (
    <div>
      <CalendarHeader
        headerData={format(currentMonth, "MMMM yyy", { locale: koLocale })}
        onPrevMonthClick={handlePrevMonth}
        onNextMonthClick={handleNextMonth}
      />
    </div>
  );
}
