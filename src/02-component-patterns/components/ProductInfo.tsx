import { useContext } from "react";
import { ProductCardContext } from "../store/store";

export const ProductInfo: React.FC<{
  name?: string;
  desc?: string;
  price?: number;
}> = ({ name, desc, price }) => {
  const { product } = useContext(ProductCardContext);

  let nameToShow: string = name || "No Name";
  let descToShow: string = desc || "No Description";
  let priceToShow: number = price || 0;

  if (!name) nameToShow = product.name;
  if (!desc) descToShow = product.desc;
  if (!price) priceToShow = product.price;

  return (
    <div className="flex flex-col  p-2 col-span-1 w-full justify-center">
      <h2 className="font-bold">{nameToShow}</h2>
      <p className="text-neutral-400">{descToShow}</p>
      <p className="font-semibold mt-2">${priceToShow.toFixed(2)}</p>
    </div>
  );
};
