import React from "react";
import { useSelector } from "react-redux";

const CartProvider = ({ children }) => {
  const cart = useSelector((state) => state.basket);
  const sum = cart.items.reduce((sum, item) => {
    sum += item.food.price * item.qty;
    return sum;
  }, 0);

  const sumWithDisc = sum * (1 - cart.discount / 100);

  return React.cloneElement(children, { cart, sum, sumWithDisc });
};

export default CartProvider;
