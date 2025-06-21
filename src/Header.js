import React from 'react';
import logo from './assets/Logo .svg';
function Header() {
  return (
    <header className='header-container'>
      <img className='logo-img' src={logo} alt='logo' />
      <nav className='nav-container'>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Menu</a>
          </li>
          <li>
            <a href=''>Reservations</a>
          </li>
          <li>
            <a href=''>Order Online</a>
          </li>
          <li>
            <a href=''>Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
