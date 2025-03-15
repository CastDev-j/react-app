import React from "react";
import { Product, ProductCardContextProps } from "../interfaces";

export const products: Product[] = [
  {
    name: "Producto 1",
    price: 19.99,
    desc: "Descripción del Producto 1",
    image: "/coffee-mug.png",
  },
  {
    name: "Producto 2",
    price: 29.99,
    desc: "Descripción del Producto 2",
  },
  {
    name: "Producto 3",
    price: 39.99,
    desc: "Descripción del Producto 3",
    image: "/coffee-mug.png",
  },
];

export const ProductCardContext = React.createContext({} as ProductCardContextProps);
