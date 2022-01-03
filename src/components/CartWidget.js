import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function CartWidget() {
  return (
    <Link to='sign-up'>
      <button className='btn'><i class="fas fa-shopping-cart"></i></button>
    </Link>
  );
}