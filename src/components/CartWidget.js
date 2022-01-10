import React, { useContext } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import CartContext from "../context/cart/CartContext";

export function CartWidget() {
  const { cartItems, showHideCart } = useContext(CartContext);

  const totalItems = () => {
    let total = 0;
    cartItems.map((item) => (total += item.qty));
    return total;
  };
  return (
    <button className="btn" onClick={showHideCart}>
      {cartItems.length > 0 && (
        <div className="item__count">
          <span>{totalItems()}</span>
        </div>
      )}{" "}
      <i class="fas fa-shopping-cart"></i>
    </button>
  );
}
