import { FaTrashAlt } from "react-icons/fa";

export default function CartItem() {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-3">
        <div>순두부 찌개</div>
        <div>
          <span className="bg-gray-200 px-3 mr-3 rounded-md">-</span>
          <span>1</span>
          <span className="bg-gray-200 px-3 ml-3 rounded-md">+</span>
        </div>
        <div className="flex">
          <span className="pr-5">11,000 원</span> <FaTrashAlt />
        </div>
      </div>
    </>
  );
}
