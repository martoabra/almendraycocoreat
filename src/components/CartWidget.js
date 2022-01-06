import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function CartWidget() {
  return (
    <Link to='/Basket'>
      <button className='btn'><i class="fas fa-shopping-cart"></i></button>
    </Link>
  );
}