import { useCallback, useContext, useEffect, useState } from "react";
import { FormikContext } from "../store";

export const useFormikCounter = () => {
  const { initialCount, maxCount, minCount } = useContext(FormikContext);

  const [counter, setCounter] = useState(initialCount);

  useEffect(() => {
    setCounter(initialCount);
  }, [initialCount]);

  const remainingToMax = maxCount - counter;
  const remainingToMin = counter - minCount;

  const isMaxCountReached = counter >= maxCount;
  const isMinCountReached = counter <= minCount;

  const [isInitialCount, setIsInitialCount] = useState(
    initialCount === counter
  );

  useEffect(() => {
    setIsInitialCount(initialCount === counter);
  }, [counter, initialCount]);

  const decrement = useCallback((value: number = 1) => {
    if (counter > minCount) {
      setCounter(Math.max(counter - value, minCount));
    }
  }, [counter, minCount]);

  const increment = useCallback((value: number = 1) => {
    if (counter < maxCount) {
      setCounter(Math.min(counter + value, maxCount));
    }
  }, [counter, maxCount]);

  const resset = useCallback(() => {
    setCounter(initialCount);
  }, [initialCount]);

  console.log(
    JSON.stringify(
      {
        counter,
        remainingToMax,
        remainingToMin,
        isMaxCountReached,
        isMinCountReached,
        isInitialCount,
      },
      null,
      2
    )
  );

  return {
    decrement,
    increment,
    resset,

    counter,
    remainingToMax,
    remainingToMin,
    isMaxCountReached,
    isMinCountReached,
    isInitialCount,
  };
};
