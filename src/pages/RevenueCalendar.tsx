import { useState } from "react";
import { useQuery } from "react-query";
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
import CurrentMonthSales from "../components/currentMonthSales";
import CalendarGrid from "../components/CalendarGrid";

import { fetchRevenueCalendarData } from "../assets/service/calendar";

export default function RevenueCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  console.log("currentMonth", currentMonth); // Tue Dec 12 2023 14:26:47 GMT+0900

  const { data } = useQuery("jsonData", fetchRevenueCalendarData);
  if (data) console.log("calendar data", data.data["2023"]["Dec"]);

  const getMonthDays = (): Date[] => {
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

  console.log("format", format(currentMonth, "MMM"));
  return (
    <div>
      <CalendarHeader
        headerData={format(currentMonth, "MMMM yyy", { locale: koLocale })}
        onPrevMonthClick={handlePrevMonth}
        onNextMonthClick={handleNextMonth}
      />
      <div className="flex w-4/5 m-auto">
        <CurrentMonthSales title="이번 달 실 매출" />
        <CurrentMonthSales title="이번 달 총 환불" />
      </div>
      <div className="mt-10 mb-20">
        <CalendarGrid
          getMonthDays={getMonthDays}
          revenueData={data}
          selectorMonth={format(currentMonth, "MMM")}
          selectorYear={format(currentMonth, "yyy")}
        />
      </div>
    </div>
  );
}
