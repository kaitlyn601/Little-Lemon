import React from 'react';

function Nav() {
  return (
    <header className='header-container'>
      <img className='logo-img' src='/src/assets/Logo .svg' alt='logo' />
      <nav className='nav-container'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
