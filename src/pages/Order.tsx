import OrderCategoryTab from "../components/OrderCategoryTab";
import Cart from "../components/Cart";
import ProductMenu from "../components/ProductMenu";

export default function Order() {
  return (
    <div>
      <OrderCategoryTab />
      <Cart />
      <ProductMenu />
    </div>
  );
}