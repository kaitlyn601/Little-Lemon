import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo .svg';
function Header() {
  return (
    <header className='header-container'>
      <img className='logo-img' src={logo} alt='logo' />
      <nav className='nav-container'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/bookings'>Reservations</Link>
        <Link to='orderOnline'>Order Online</Link>
        <Link to='login'>Login</Link>
      </nav>
    </header>
  );
}

export default Header;
