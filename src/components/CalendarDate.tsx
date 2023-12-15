import { format } from "date-fns";
import { DailyData } from "../type";

type Props = {
  date: Date;
  dailyRevenueData: DailyData;
};

export default function CalendarDate({ date, dailyRevenueData }: Props) {
  return (
    <div className="border pt-2">
      <div className="flex justify-between px-2">
        <div>☀️</div>
        <div className="text-slate-500">{format(date, "d")}</div>
      </div>
      <div className="flex flex-col items-end mt-10 pr-2">
        <div>{`+ ${dailyRevenueData?.daily_sales?.toLocaleString()}`}</div>
        <div className="text-red-600">{`- ${dailyRevenueData?.daily_refund?.toLocaleString()}`}</div>
      </div>
      <div className="flex justify-end w-full py-1 pr-2 bg-slate-100 ">
        {`+${(
          dailyRevenueData?.daily_sales - dailyRevenueData?.daily_refund
        ).toLocaleString()}`}
      </div>
    </div>
  );
}
