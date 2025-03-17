import React from "react";
import {
  Product,
  ProductCardContextProps,
} from "../interfaces";

export const products: Product[] = [
  {
    id: "0",
    name: "Producto 1",
    price: 19.99,
    desc: "Descripción del Producto 1",
    image: "/coffee-mug.png",
  },
  {
    id: "1",
    name: "Producto 2",
    price: 29.99,
    desc: "Descripción del Producto 2",
  },
  {
    id: "2",
    name: "Producto 3",
    price: 39.99,
    desc: "Descripción del Producto 3",
    image: "/coffee-gitcat.webp",
  },
];

export const ProductCardContext = React.createContext(
  {} as ProductCardContextProps
);