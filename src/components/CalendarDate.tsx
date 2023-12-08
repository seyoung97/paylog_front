import { format } from "date-fns";

type Props = {
  date: Date;
};

export default function CalendarDate({ date }: Props) {
  return (
    <div className="border pt-2">
      <div className="flex justify-between px-2">
        <div>☀️</div>
        <div className="text-slate-500">{format(date, "d")}</div>
      </div>
      <div className="flex flex-col items-end mt-10 pr-2">
        <div>+ 2,357,500</div>
        <div className="text-red-600">- 12,000</div>
      </div>
      <div className="flex justify-end w-full py-1 pr-2 bg-slate-100 ">
        + 2,345,500
      </div>
    </div>
  );
}
