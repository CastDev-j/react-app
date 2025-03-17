import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router";

interface ShoppingCartCounterProps {
    counter: number;
}

export const ShoppingCartCounter: React.FC<ShoppingCartCounterProps> = ({counter = 0}) => {
  return (
    <NavLink
      to={"./cart"}
      className="absolute top-0 right-0 p-4 flex items-center gap-2 bg-neutral-900 text-white rounded-full"
    >
      <FaCartPlus />
      <div className="">{counter}</div>
    </NavLink>
  );
};
