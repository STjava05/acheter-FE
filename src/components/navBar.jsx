

import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';
import { setSearch } from '../reducers/apiSlice';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';




function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // const [searchText, setSearchText] = useState('');
  const inputRef = useRef(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const cartItem = useSelector((state) => state.api.cart);

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearch(inputRef.current.value));
  };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   dispatch(setSearch(searchText));
  // };



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
              Registrati
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

          <li className='navbar-btns'>
            <Link to='/shoppingCart' className='add-to-cart-btn flex btn-text fw-5'>shopping<span className='cart-count-value'>{cartItem.length}</span>
              <span className='cart-icon'>
                <i className='fas fa-shopping-cart'> </i>
              </span>

            </Link>
          </li>

          {/* <form className='navbar-search flex' onSubmit={handleSearch}>
            <input type="text" placeholder="Search.." name="search" value={searchText} // Associa il valore dell'input allo stato locale
              onChange={(e) => setSearchText(e.target.value)} />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form> */}

          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"
              ref={inputRef} onChange={handleSearch} />
          </Form>
          <li>
            <Link to='/merce' className='nav-links-mobile' onClick={closeMobileMenu}> Merce </Link>
          </li>
          <li>
            <Link to='/ordine' className='nav-links-mobile' onClick={closeMobileMenu}> Ordine</Link>
          </li>
          <li>
            <Link to='/categoria' className='nav-links-mobile' onClick={closeMobileMenu} >Categoria</Link>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default NavBar;