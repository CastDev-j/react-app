
export interface Product {
  name: string;
  price: number;
  desc: string;
  image?: string;
}

export interface ProductCardContextProps {
  counter: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
  product: Product;
}