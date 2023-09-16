

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';
import Search from './Search';
  import { useSession } from '../middleware/ProtectedRoutes';


function NavBar() {
    const session =useSession()
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const cartItem = useSelector((state) => state.api.cart);

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
       

        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Ou6no
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <div className='benvenuto'>{session&& <p>Benvenuto {session.denominazione}</p>}</div>
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
            <Link
              to='/menu'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>

          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
           
         
          <li className='nav-item'>
            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
          <Search />
          <li className='navbar-btns'>
            <Link to='/shoppingCart' className='add-to-cart-btn flex btn-text fw-5'>shopping<span className='cart-count-value'>{cartItem.length}</span>
              <span className='cart-icon'>
                <i className='fas fa-shopping-cart'> </i>
              </span>

            </Link>
          </li>


        
          <li>
            <Link to='/merce' className='nav-links-mobile' onClick={closeMobileMenu}> Merce </Link>
          </li>
          <li>
            <Link to='/ordine' className='nav-links-mobile' onClick={closeMobileMenu}> Ordine</Link>
          </li>
          <li>
            <Link to='/producteur' className='nav-links-mobile' onClick={closeMobileMenu} >Producteur</Link>
          </li>
        </ul>

      </nav>
    </>
  );
}

export default NavBar;