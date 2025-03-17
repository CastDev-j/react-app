
export interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  image?: string;
}

export interface ProductCardContextProps {
  counter: number;
  setCounter: (counter: number) => void;
  handleDecrement: () => void;
  handleIncrement: () => void;
  product: Product;
}

export interface ShoppingCartState {
  [key: string]: Product & { count: number };
}

export interface onAddArgs {
  product: Product;
  count: number;
}

export interface onRemoveArgs {
  product: Product;
  count: number;
}