import React, { useState } from 'react';
import { MenuItems } from './Categories';
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
       
           
            
        {MenuItems &&
          MenuItems.map((MenuItems) => (
            <Link key={MenuItems.id} to={`/Categories/${MenuItems.id}`}>
              
                  <li>{MenuItems.title}</li>
                  
            </Link>
          ))}
        
          
        
      </ul>
    </>
  );
}

export default Dropdown;

