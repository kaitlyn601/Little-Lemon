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
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/bookings'>Reservations</Link>
            <Link to='orderOnline'>Order Online</Link>
            <Link to='login'>Login</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
