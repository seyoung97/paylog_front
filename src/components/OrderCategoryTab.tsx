import { useState } from "react";

export default function OrderCategoryTab() {
  const [category, setCategory] = useState("인기 메뉴");
  const [isAdmin, setIsAdmin] = useState(true);
  const categories = ["인기 메뉴", "점심", "저녁", "사이드", "주류"];
  const focusedStyle = "border-b-4 border-sky-500 text-sky-500";
  const unfocusedStyle = "text-slate-600";

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
      {isAdmin && <div className="px-9 py-3 font-semibold">+ 카테고리</div>}
    </div>
  );
}
