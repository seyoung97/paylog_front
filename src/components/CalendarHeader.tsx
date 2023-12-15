import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

type Props = {
  headerData: string;
  onPrevMonthClick: () => void;
  onNextMonthClick: () => void;
};

export default function CalendarHeader({
  headerData,
  onPrevMonthClick,
  onNextMonthClick,
}: Props) {
  return (
    <div className="flex items-center w-fit m-auto mt-10">
      <GrFormPrevious
        onClick={onPrevMonthClick}
        size="1.5rem"
        className="mr-4 text-slate-500"
      />
      <h2 className="text-xl">{headerData}</h2>
      <GrFormNext
        onClick={onNextMonthClick}
        size="1.5rem"
        className="ml-4 text-slate-500"
      />
    </div>
  );
}
