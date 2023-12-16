import productImageUrl from "../assets/images/products/tofusoup.jpg";

type Props = {
  data: string;
};

export default function ProductCard({ data }: Props) {
  return (
    <div className=" rounded-md overflow-hidden shadow-md">
      <div className="w-full h-60">
        <img src={productImageUrl} className="w-full h-full object-cover"></img>
      </div>
      <div className="bg-white flex justify-between items-center px-4 py-4">
        <span className="text-lg">{data}</span> <span>11,000 원</span>
      </div>
    </div>
  );
}
