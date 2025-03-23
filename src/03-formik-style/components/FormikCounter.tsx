import { FaMinus, FaPlus } from "react-icons/fa";
import { useFormikCounter } from "../hooks/useFormikCounter";

export const FormikCounter = () => {
  const {
    resset,
    decrement,
    increment,
    counter, 
    remainingToMax,
    remainingToMin,
    isMaxCountReached,
    isMinCountReached,
    isInitialCount,
  } = useFormikCounter();

  return (
    <div className="bg-neutral-700 p-6 rounded-lg flex flex-col gap-6">
      <div className="flex justify-center items-center gap-6">
        <button
          className={`bg-red-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-red-600 ${
            isMinCountReached ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => decrement(2)}
          disabled={isMinCountReached}
        >
          <span className="flex items-center gap-2">
            <FaMinus /> <span>2</span>
          </span>
        </button>
        <span className="text-4xl font-bold text-white">
          {counter.toString().padStart(2, "0")}
        </span>
        <button
          className={`bg-green-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-green-600 ${
            isMaxCountReached ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => increment(2)}
          disabled={isMaxCountReached}
        >
          <span className="flex items-center gap-2">
            <FaPlus /> <span>2</span>
          </span>
        </button>
      </div>
      <div className="text-center text-white space-y-2">
        <div className="text-xl">
          Valor actual:{" "}
          <span className="font-bold text-green-400">{counter}</span>
        </div>
        <div className="text-xl">
          Cantidad restante para alcanzar el límite máximo:{" "}
          <span className="font-bold text-yellow-400">{remainingToMax}</span>
        </div>
        <div className="text-xl">
          Cantidad restante para alcanzar el límite mínimo:{" "}
          <span className="font-bold text-red-400">{remainingToMin}</span>
        </div>
      </div>
      <button
        className={`bg-neutral-800 text-white px-6 py-3 rounded-lg transition duration-300 self-end mt-4 ${
          isInitialCount
            ? "cursor-not-allowed"
            : "cursor-pointer hover:bg-neutral-900"
        } `}
        onClick={resset}
      >
        Reset
      </button>
    </div>
  );
};
