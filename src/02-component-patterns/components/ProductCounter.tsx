import React from "react";
import { ProductCardContext } from "../store/store";
import { FaMinus, FaPlus } from "react-icons/fa";

export const ProductCounter = () => {
  const { counter, handleDecrement, handleIncrement } =
    React.useContext(ProductCardContext);

  return (
    <div className="flex col-span-1 w-full items-center justify-center">
      <button
        className="cursor-pointer bg-neutral-50 text-center text-neutral-950 px-2 py-2 rounded-l-lg hover:bg-neutral-300 active:bg-neutral-400 transition-all duration-200 active:scale-95"
        onClick={() => handleDecrement()}
      >
        <FaMinus />
      </button>
      <pre className="px-4 font-light text-neutral-50/90">
        {counter.toString().padStart(2, "0")}
      </pre>
      <button
        className="cursor-pointer bg-neutral-50 text-neutral-950 px-2 py-2 rounded-r-lg hover:bg-neutral-300 active:bg-neutral-400 transition-all duration-200 active:scale-95"
        onClick={() => handleIncrement()}
      >
        <FaPlus />
      </button>
    </div>
  );
};