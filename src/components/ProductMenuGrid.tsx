import ProductCard from "./ProductCard";
import ProductTag from "./ProductTag";

export default function ProductMenuGrid() {
  const products = [
    "순두부 찌개",
    "냉면",
    "돈까스",
    "설렁탕",
    "육개장",
    "제육볶음",
    "떡갈비",
    "불고기",
  ];

  return (
    <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10">
      {products.map((el) => {
        return (
          <li key={el} className="relative">
            <ProductCard data={el} />
            <ProductTag />
          </li>
        );
      })}
    </ul>
  );
}
