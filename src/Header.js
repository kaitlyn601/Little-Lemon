import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo .svg';
function Header() {
  return (
    <header className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='Little Lemon Logo' />
        </div>
        <nav>
          <ul className='nav-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/bookings'>Reservations</Link>
            </li>
            <li>
              <Link to='/orderOnline'>Order Online</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
