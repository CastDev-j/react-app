import { useState, useEffect } from "react";
import { onAddArgs, onRemoveArgs, ShoppingCartState } from "../interfaces";

const getInitialCartState = (): ShoppingCartState => {
  const savedCart = localStorage.getItem("shoppingCart");
  return savedCart ? JSON.parse(savedCart) : {};
};

export const UseShopping = () => {
  const [ShoppingCart, setShoppingCart] =
    useState<ShoppingCartState>(getInitialCartState);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(ShoppingCart));
  }, [ShoppingCart]);

  const productQuantity = Object.values(ShoppingCart).length || 0;

  const onProductAdd = ({ count, product }: onAddArgs) => {
    console.log("Product added", count, product);

    setShoppingCart((prev) => {
      const currentProduct = prev[product.id];
      const newProduct = {
        ...product,
        count: count,
      };

      if (currentProduct) {
        return {
          ...prev,
          [product.id]: newProduct,
        };
      }

      return {
        ...prev,
        [product.id]: newProduct,
      };
    });
  };

  const onProductRemove = ({ count, product }: onRemoveArgs) => {
    console.log("Product removed", count, product);

    setShoppingCart((prev) => {
      if (count === 0) {
        const newCart = { ...prev };
        delete newCart[product.id];
        return newCart;
      }

      const currentProduct = prev[product.id];
      const newProduct = {
        ...product,
        count: count,
      };

      if (currentProduct) {
        return {
          ...prev,
          [product.id]: newProduct,
        };
      }

      return {
        ...prev,
        [product.id]: newProduct,
      };
    });
  };

  return {
    productQuantity,
    ShoppingCart,
    onProductAdd,
    onProductRemove,
  };
};
