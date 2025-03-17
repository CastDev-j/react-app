import { useProductCard } from "../hooks/UseProduct";
import { onAddArgs, onRemoveArgs, Product } from "../interfaces";
import { ProductImage } from "./ProductImage";
import { ProductCardContext } from "../store/store";
import { ProductInfo } from "./ProductInfo";
import { ProductCounter } from "./ProductCounter";

const { Provider } = ProductCardContext;

interface ProductConfig {
  product: Product;
  children: React.ReactElement;
  onAdd?: (args: onAddArgs) => void;
  onRemove?: (args: onRemoveArgs) => void;
}

interface ProductCardProps extends React.FC<ProductConfig> {
  Info: typeof ProductInfo;
  Image: typeof ProductImage;
  Counter: typeof ProductCounter;
}

const ProductCardHOC: React.FC<ProductConfig> = ({
  children,
  product,
  onAdd,
  onRemove,
}) => {
  const { counter, handleDecrement, handleIncrement, setCounter } =
    useProductCard({
      onAdd,
      onRemove,
      product,
    });

  return (
    <Provider
      value={{
        counter,
        handleDecrement,
        handleIncrement,
        setCounter,
        product,
      }}
    >
      <div className="bg-neutral-900 text-neutral-100 rounded-lg shadow-lg p-4 grid grid-cols-2 gap-4 items-center justify-center">
        {children}
      </div>
    </Provider>
  );
};

export const ProductCard: ProductCardProps = Object.assign(ProductCardHOC, {
  Info: ProductInfo,
  Image: ProductImage,
  Counter: ProductCounter,
});
