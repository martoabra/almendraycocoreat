import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import Product from './Product';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems && MenuItems.map((Product) => {
          return (
            <ul className="">
            
        {MenuItems &&
          MenuItems.map((MenuItems) => (
            <Link key={MenuItems.id} to={`/MenuItems/${MenuItems.id}`}>
              
                  <li>{MenuItems.title}</li>
                  
            </Link>
          ))}
        </ul>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;

