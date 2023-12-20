import { useState } from "react";

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function OrderCategoryTab({ setIsModalOpen }: Props) {
  const [category, setCategory] = useState("인기 메뉴");
  const [count, setCount] = useState(0);
  // const [isAdmin, setIsAdmin] = useState(true);
  const categories = ["인기 메뉴", "점심", "저녁", "사이드", "주류"];
  const focusedStyle = "border-b-4 border-sky-500 text-sky-500";
  const unfocusedStyle = "text-slate-600";

  const handleLoginModalOpen = () => {
    setCount((prev) => prev + 1);
    console.log("count", count);
    if (count === 7) {
      setIsModalOpen(true);
      setCount(0);
    }
  };

  return (
    <div className="flex mx-5 w-9/12">
      {categories.map((item) => {
        return (
          <div
            key={item}
            className={`px-7 py-3 text-lg cursor-pointer ${
              category === item ? focusedStyle : unfocusedStyle
            }`}
            onClick={() => {
              setCategory(item);
            }}
          >
            {item}
          </div>
        );
      })}
      {/* {isAdmin && <div className="px-9 py-3 font-semibold">+ 카테고리</div>} */}
      <div
        className="px-12 py-5 bg-sky-200"
        onClick={handleLoginModalOpen}
      ></div>
    </div>
  );
}
