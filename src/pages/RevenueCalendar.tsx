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
import { DailyData } from "../type";

export default function RevenueCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const { data } = useQuery("jsonData", fetchRevenueCalendarData);

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

  const totalRevenue = data?.data?.[format(currentMonth, "yyy")]?.[
    format(currentMonth, "MMM")
  ]
    ?.reduce(function (acc: number, currentValue: DailyData) {
      return acc + currentValue.daily_sales;
    }, 0)
    .toLocaleString();

  const totalRefund = data?.data?.[format(currentMonth, "yyy")]?.[
    format(currentMonth, "MMM")
  ]
    ?.reduce(function (acc: number, currentValue: DailyData) {
      return acc + currentValue.daily_refund;
    }, 0)
    .toLocaleString();

  return (
    <div>
      <CalendarHeader
        headerData={format(currentMonth, "MMMM yyy", { locale: koLocale })}
        onPrevMonthClick={handlePrevMonth}
        onNextMonthClick={handleNextMonth}
      />
      <div className="flex w-4/5 m-auto">
        <CurrentMonthSales title="이번 달 실 매출" total={totalRevenue} />
        <CurrentMonthSales title="이번 달 총 환불" total={totalRefund} />
      </div>
      <div className="mt-10 mb-20">
        <CalendarGrid getMonthDays={getMonthDays} revenueData={data} />
      </div>
    </div>
  );
}
