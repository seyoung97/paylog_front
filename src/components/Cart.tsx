import CartItem from "./CartItem";
import OrderTotal from "./OrderTotal";

export default function Cart() {
  return (
    <div className="bg-white flex flex-col w-3/12 h-screen fixed top-0 right-0 border-l border-gray-200 shadow-sm">
      <h2 className="my-3 ml-5 text-xl font-bold">담은 메뉴</h2>
      <div className="flex justify-between items-center my-3">
        <span className="ml-5 font-bold">총 3개</span>
        <button className="bg-red-100 mr-5 px-3 py-2 rounded-md text-red-500">
          선택 삭제
        </button>
      </div>
      <ul className="mt-3">
        <li>
          <CartItem />
        </li>
      </ul>
      <OrderTotal />
    </div>
  );
}
