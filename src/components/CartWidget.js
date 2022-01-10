import React, { useContext } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import CartContext from '../context/cart/CartContext';

export function CartWidget() {
  const {cartItems, showHideCart} = useContext(CartContext)
  return (
  
      <button className='btn' onClick={showHideCart}>
        {cartItems.length > 0 && (
          <div className='item__count'> 
          <span>{cartItems.length}</span>
          </div>
        )
        } <i class="fas fa-shopping-cart">
        </i></button>
  
  );
}