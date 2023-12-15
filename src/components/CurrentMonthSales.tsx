type Props = {
  title: string;
  total: string;
};

export default function CurrentMonthSales({ title, total }: Props) {
  const fontColor = title === "이번 달 실 매출" ? "text-black" : "text-red-600";
  const brStyle =
    title === "이번 달 실 매출" ? "border-r-2 border-gray-300" : "";

  return (
    <div className={`flex flex-col items-center w-1/2 mt-7 py-3 ${brStyle}`}>
      <h3>{title}</h3>
      <div className="mt-3">
        {total ? (
          <span className={`text-xl font-bold ${fontColor}`}>{total}</span>
        ) : (
          <span className={`text-xl font-bold ${fontColor}`}>0</span>
        )}
        <span className={` ${fontColor}`}> 원</span>
      </div>
    </div>
  );
}
