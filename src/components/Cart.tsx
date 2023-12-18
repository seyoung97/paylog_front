import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="bg-white w-3/12 h-screen absolute top-0 right-0 border-l border-gray-200 shadow-sm">
      <CartItem />
    </div>
  );
}
