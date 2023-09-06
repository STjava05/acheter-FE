

import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './navBar.css';
import Dropdown from './Dropdown';


function NavBar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Ou6no
            <i className='fab fa-firstdraft' />
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
              <Link
                to='/acquirenti'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Profilo
              </Link>
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
              {/* <form className='navbar-search flex'>
                  <input type="text" placeholder="Search.." name="search" />
                  <button type="submit" className='navbar-search-btn'>
                    <i className="fa fa-search"></i></button>
              </form>

              <div className='navbar-btns'>
                <Link to ='/Cart' className='add-to-cart-btn flex'>
                <span className='cart-icon'>
                    <i className='fas fa-shopping-cart'> </i>
                </span>
                <div className='btn-text fw-5'>cart<span className='cart-count-value'>0</span>

                </div>

                </Link>
              </div> */}
           
          
            <li>
              <Link
                to='/merce'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Merce
              </Link>
            </li>
            <li>
              <Link
                to='/ordine'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Ordine
              </Link>
            </li>
            <li>
              <Link
                to='/categoria'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Categoria
              </Link>
            </li>
          </ul>
          {/* <Button /> */}
        </nav>
      </>
    );
  }
  
  export default NavBar;