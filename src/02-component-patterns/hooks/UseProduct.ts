import { useState } from "react";

const PRODUCT_LIMIT = 99;
const PRODUCT_MIN = 0;

export const useProductCard = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () =>
    setCounter(Math.min(counter + 1, PRODUCT_LIMIT));

  const handleDecrement = () => 
    setCounter(Math.max(counter - 1, PRODUCT_MIN)); 

  return {
    counter,
    handleIncrement,
    handleDecrement,
  };
};
