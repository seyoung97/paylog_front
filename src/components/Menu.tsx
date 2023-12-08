import { useNavigate } from "react-router";

type Props = {
  isMenuOpen: boolean;
};

export default function Menu({ isMenuOpen }: Props) {
  const navigate = useNavigate();

  const navigateToCalendar = () => {
    navigate("/");
  };

  const navigateToProductAnalysis = () => {
    navigate("/product_analysis");
  };

  const menuAnimationStyle = isMenuOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div
      className={`w-1/4 h-screen fixed ${menuAnimationStyle} border-l border-gray-300`}
    >
      <ul className="pt-8 pl-5">
        <li
          className="pb-5 text-lg cursor-pointer"
          onClick={navigateToCalendar}
        >
          매출 달력
        </li>
        <li
          className="text-lg cursor-pointer"
          onClick={navigateToProductAnalysis}
        >
          상품 분석
        </li>
      </ul>
    </div>
  );
}
