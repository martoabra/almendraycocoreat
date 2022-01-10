import React, { useContext, useState } from 'react';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import logo from '../assets/logo.png'
import CartContext from '../context/cart/CartContext';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const {cartItems, showHideCart} = useContext(CartContext)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/'  onClick={closeMobileMenu}>
        <img className='navbar-logo' src={logo} />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            
            
              Categorias <i className='fas fa-caret-down' />
            
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Productos
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Construccion'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              <i class="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
        <div className='nav-links'>
        <CartWidget cartItems={cartItems} onClick={showHideCart}/></div>
      </nav>
    </>
  );
}

export default Navbar;