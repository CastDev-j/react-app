import { useState } from "react";
import { onAddArgs, onRemoveArgs, Product } from "../interfaces";

const PRODUCT_LIMIT = 99;
const PRODUCT_MIN = 0;

interface ProductCardProps {
  onAdd?: (args: onAddArgs) => void;
  onRemove?: (args: onRemoveArgs) => void;
  product: Product;
}

export const useProductCard = ({
  onAdd,
  onRemove,
  product,
}: ProductCardProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    const newValue = Math.min(counter + 1, PRODUCT_LIMIT);
    setCounter(newValue);
    onAdd?.({
      product,
      count: newValue,
    });
  };

  const handleDecrement = () => {
    const newValue = Math.max(counter - 1, PRODUCT_MIN);
    setCounter(newValue);

    onRemove?.({
      product,
      count: newValue,
    });
  };

  return {
    counter,
    setCounter,
    handleIncrement,
    handleDecrement,
  };
};
